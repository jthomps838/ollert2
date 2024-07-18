import express from 'express';

import BoardController from '../controllers/boardController.js';

const router = express.Router();

router.get('/', BoardController.getBoards);

router.get('/:id', BoardController.getBoardById);

router.post('/', BoardController.createBoard);

export default router;
