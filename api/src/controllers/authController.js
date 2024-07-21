import bcrypt from 'bcryptjs';

import User from '../models/userModel.js';
import {
    validateEmail,
    validatePassword,
    validateUsername,
} from '../utils/validators.js';

class AuthController {
    static async signUp(req, res, next) {
        try {
            const { username, password, email } = req.body;
            const validationErrors = AuthController.validateSignup(req?.body);

            if (validationErrors) {
                res.status(400);
                return next({
                    code: 400,
                    message: validationErrors,
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username,
                password: hashedPassword,
                email,
            });
            await newUser.save();
            res.json({ user: { username, email } });
        } catch (err) {
            if (err.code === 11000) {
                res.status(400);
                return next({
                    code: 400,
                    message: `Username: ${req.body.username} or Email: ${req.body.email} already exists`,
                });
            }
            next({ error: 'User was not signed up, retry again later.' });
        }
    }

    static signOut(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/signin');
        });
    }

    static validateSignup = (body) => {
        let error = '';
        if (!body) {
            return 'No body present in request';
        }
        const validators = {
            username: validateUsername,
            password: validatePassword,
            email: validateEmail,
        };
        for (let i in body) {
            if (!validators[i](body[i])) {
                error = `${error} No ${i} is found in request body, or does not conform to validation rules`;
            }
        }
        return error;
    };
}

export default AuthController;
