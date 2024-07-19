import { Schema, model } from 'mongoose';

const boardSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    background: { type: String, default: 'default' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Board = model('Board', boardSchema);

export default Board;
