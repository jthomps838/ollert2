import express from 'express';

import BoardController from '../controllers/boardController.js';
import ensureAuthenticated from '../middlewares/auth.js';

const router = express.Router();

router.get('/', ensureAuthenticated, BoardController.getBoards);

router.get('/:id', ensureAuthenticated, BoardController.getBoardById);

router.post('/', ensureAuthenticated, BoardController.createBoard);

export default router;
