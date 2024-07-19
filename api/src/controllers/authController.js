import bcrypt from 'bcryptjs';

import User from '../models/userModel.js';

class AuthController {
    static async signUp(req, res, next) {
        try {
            const { username, password, email } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username,
                password: hashedPassword,
                email,
            });
            await newUser.save();
            res.json({ user: { username, email } });
        } catch (err) {
            res.json({ error: 'User was not signed up, retry again later.' });
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
}

export default AuthController;
