import React from 'react';

import { Link } from 'react-router-dom';
import './Card.scss';
import CardContent from './CardContent';
import CardHeader from './CardHeader';

const Card = ({ board }) => {
    return (
        <Link
            to={`/boards/${board._id}`}
            className='board-link'
        >
            {/* TODO: Add background image from board data */}
            <section className='board-card'>
                <CardHeader title={board.title} />
                <CardContent board={board} />
            </section>
        </Link>
    );
};

export default Card;
