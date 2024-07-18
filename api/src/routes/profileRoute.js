import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Welcome, ${req.user.username}`);
    } else {
        res.redirect('/auth/signin');
    }
});

export default router;
