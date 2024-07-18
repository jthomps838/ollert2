import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';

import userRoutes from './routes/userRoutes.js';
import healthRouter from './routes/healthRoute.js';
import authRouter from './routes/authRoute.js';
import profileRoutes from './routes/profileRoute.js';
import boardRouter from './routes/boardRoute.js';
import errorHandling from './middlewares/errors.js';
import * as swaggerJson from './utils/swagger.js';
import './utils/passport.js';

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
        this.initializeMiddlewares();
        this.initializeSwagger();
        this.initializeRoutes();
        this.initializeAuth();
        this.initializeErrorHandling();
        this.handleShutdown();
    }

    initializeAuth() {
        console.log('auth initialized');
    }

    initializeMiddlewares() {
        // Middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(
            session({
                secret: 'daklfjasdf',
                resave: false,
                saveUninitialized: false,
            }),
        );
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }

    initializeSwagger() {
        const swaggerDocs = swaggerJsdoc(this.swaggerOptions);
        this.app.use(
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocs),
        );
    }

    initializeRoutes() {
        //  Routes
        this.app.use('/', healthRouter);
        this.app.use('/api/auth', authRouter);
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
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log('Could not connect to MongoDB', err);
        }
    }

    async disconnectDB() {
        try {
            await mongoose.disconnect();
            console.log('Disconnected from MongoDB');
        } catch (err) {
            console.log('Could not disconnect from MongoDB', err);
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on ${this.port}`);
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
