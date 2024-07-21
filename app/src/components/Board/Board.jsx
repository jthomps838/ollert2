import { Suspense } from 'react';

import './Board.scss';
import BoardHeader from './BoardHeader';
import BoardList from './BoardList';

const Board = ({ board }) => {
    return (
        <main className='container'>
            <BoardHeader title={board.title} />
            <Suspense fallback={<h1>Loading...</h1>}>
                <section className='board-content'>
                    {board?.lists?.map((list) => (
                        <BoardList
                            key={list.order}
                            list={list}
                            cards={board.cards}
                        />
                    ))}
                </section>
            </Suspense>
        </main>
    );
};

export default Board;
