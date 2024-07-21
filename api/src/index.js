import RedisStore from 'connect-redis';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import logger from 'node-color-log';
import passport from 'passport';
import { createClient } from 'redis';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import errorHandling from './middlewares/errors.js';
import authRouter from './routes/authRoute.js';
import boardRouter from './routes/boardRoute.js';
import healthRouter from './routes/healthRoute.js';
import profileRoutes from './routes/profileRoute.js';
import userRoutes from './routes/userRoutes.js';
import './utils/passport.js';
import * as swaggerJson from './utils/swagger.js';

class Server {
    constructor(port) {
        this.app = express();
        this.port = port;
        this.dbUrl = process.env.DATABASE_URL;
        this.swaggerOptions = {
            swaggerDefinition: swaggerJson,
            apis: ['./routes/*.js'],
        };

        this.connectDB();
        this.initializeSwagger();
        this.initializeMiddlewares();
        this.initializeSessionStore();
        this.initializeAuth();
        this.initializeRoutes();
        this.initializeErrorHandling();
        this.handleShutdown();
    }

    initializeAuth() {
        logger
            .color('green')
            .log('Setting up authentication provided by Passport.js');
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    initializeSessionStore() {
        let redisClient = createClient({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
        });
        redisClient
            .connect()
            .then((data) => {
                logger
                    .color('green')
                    .bold()
                    .log(`Redis client connected on ${process.env.REDIS_PORT}`);
                logger.log(data);
            })
            .catch(console.error);

        logger.color('green').log('Creating redis Client...');

        let redisStore = new RedisStore({
            client: redisClient,
            prefix: 'ollert:',
        });
        logger.log(redisStore);
        logger.color('green').log('Redis store initialized');

        const sessionOptions = {
            store: redisStore,
            secret: process.env.SESSION_SECRET_KEY,
            resave: false,
            saveUninitialized: false,
            cookie: {
                secure: process.env.NODE_ENV === 'production' ? true : false,
                httpOnly: process.env.NODE_ENV === 'production' ? true : false,
                maxAge: 10000 * 60 * 10, // session max age in miliseconds
            },
        };

        if (process.env.NODE_ENV === 'production') {
            app.set('trust proxy', 1); // trust first proxy
            sess.cookie.secure = true; // serve secure cookies
        }

        logger.bold().color('green').log('creating session');
        this.app.use(session(sessionOptions));
    }

    initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(
            cors({
                origin: process.env.UI_URL, // Client origin
                credentials: true,
                optionsSuccessStatus: 200,
            }),
        );
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    initializeSwagger() {
        const swaggerDocs = swaggerJsdoc(this.swaggerOptions);
        logger.color('blue').bold().log('Self documenting via Swagger');
        logger
            .bgColor('blue')
            .log(`Visit ${process.env.HOST}/api-docs for further details`);
        this.app.use(
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocs),
        );
    }

    initializeRoutes() {
        this.app.use('/api/auth', authRouter);
        this.app.use('/', healthRouter);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/profile', profileRoutes);
        this.app.use('/api/boards', boardRouter);
    }

    handleShutdown() {
        process.on('SIGINT', async () => {
            this.disconnectDB();
            process.exit(0);
        });
    }

    initializeErrorHandling() {
        this.app.use(errorHandling);
    }

    async connectDB() {
        try {
            await mongoose.connect(this.dbUrl);
            logger.bgColor('magenta').log('Connected to MongoDB');
        } catch (err) {
            logger.bgColor('red').log('Could not connect to MongoDB', err);
        }
    }

    async disconnectDB() {
        try {
            await mongoose.disconnect();
            logger.color('green').bold().log('Disconnected from MongoDB');
        } catch (err) {
            logger
                .color('red')
                .bold()
                .log('Could not disconnect from MongoDB', err);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            logger
                .color('green')
                .bold()
                .log(`Server is running on ${this.port}`);
        });
    }

    getApp() {
        return this.app;
    }
}

if (process.env.NODE_ENV !== 'test') {
    const port = Number(process.env.PORT) || 8000;

    const server = new Server(port);

    server.listen();
}

export default Server;
