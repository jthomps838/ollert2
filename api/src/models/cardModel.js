import { Schema, model } from 'mongoose';

const cardSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    list: { type: Schema.Types.ObjectId, ref: 'List', required: true },
    order: { type: Number, required: true },
    board: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    members: [{ type: Schema.Types.ObjectId, re: 'User' }],
    labels: [{ type: String }],
    dueDate: { type: Date },
    attachments: [{ type: String }],
    archived: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Card = model('Card', cardSchema);

export default Card;
