import { Router } from 'express';
import User from '../models/userModel.js';

const router = Router();

router.get('/', async (req, res) => {
    if (req.session) {
        const user = await User.findById(req.session?.passport?.user).select([
            '-password',
        ]);
        req.session.user = user;
        res.json({ user });
    } else {
        res.redirect('/auth/signin');
    }
});

export default router;
