import { Schema, model } from 'mongoose';

const listSchema = new Schema({
    title: { type: String, required: true },
    order: { type: Number, required: true },
    board: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const List = model('List', listSchema);

export default List;
