import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Board from '../models/boardModel.js';
import Card from '../models/cardModel.js';
import List from '../models/listModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON files
const boards = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/boards.json'), 'utf8'),
);
const lists = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/lists.json'), 'utf8'),
);
const cards = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../data/cards.json'), 'utf8'),
);
// const comments = JSON.parse(
//     fs.readFileSync(path.join(__dirname, '../data/comments.json'), 'utf8'),
// );

async function seedDatabase() {
    try {
        await Board.deleteMany({});
        await List.deleteMany({});
        await Card.deleteMany({});
        // await Comment.deleteMany({});

        await Board.insertMany(boards);
        console.log('Boards inserted');

        await List.insertMany(lists);
        console.log('Lists inserted');

        await Card.insertMany(cards);
        console.log('Cards inserted');

        // await Comment.insertMany(comments);
        // console.log('Comments inserted');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
    // finally {
    //     await mongoose.disconnect();
    //     console.log('Disconnected from MongoDB');
    // }
}

export default seedDatabase;
