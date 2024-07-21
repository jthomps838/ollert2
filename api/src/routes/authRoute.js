import { Router } from 'express';
import passport from 'passport';
import AuthController from '../controllers/authController.js';

const router = Router();

router.post('/signup', AuthController.signUp);

router.post(
    '/signin',
    passport.authenticate('local', {
        successRedirect: '/api/profile',
        failureRedirect: '/api/auth/signin',
    }),
);

router.get('/signout', AuthController.signOut);

export default router;
