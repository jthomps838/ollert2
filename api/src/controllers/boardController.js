import mongoose from 'mongoose';

import Board from '../models/boardModel.js';

class BoardController {
    static async getBoards(req, res, next) {
        try {
            const boards = await Board.find().populate('owner members');
            res.status(200).json(boards);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    static async getBoardById(req, res, next) {
        const { id } = req.params;
        try {
            const board = await Board.findById(id).populate('owner members');
            if (board) {
                res.status(200).json(board);
            }
            res.status(404).json({
                message: `No board found with the id: ${id}`,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: err.message });
        }
    }

    static async createBoard(req, res) {
        const { title, description, owner, members, background } = req.body;

        try {
            const board = new Board({
                title,
                description,
                owner: mongoose.Types.ObjectId.createFromHexString(owner),
                members: members.map((id) =>
                    mongoose.Types.ObjectId.createFromHexString(id),
                ),
                background,
            });

            await board.save();
            res.status(201).json(board);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default BoardController;
