import { Suspense, useEffect, useState } from 'react';

import './Board.scss';
import BoardHeader from './BoardHeader';
import BoardList from './BoardList';

// mock data
import FakeLists from '../../mockData/boards';

const Board = ({ id, title }) => {
    const [boardLists, setBoardLists] = useState([]);
    useEffect(() => {
        if (id) {
            // API call for list based on Board id
            const lists = FakeLists.filter((list) => list.board == id);
            setBoardLists(lists.sort((a, b) => a.board === id));
        }
    }, [id]);

    return (
        <main className='container'>
            <BoardHeader title={title} />
            <Suspense fallback={<h1>Loading...</h1>}>
                <section className='board-content'>
                    {boardLists.map((list) => (
                        <BoardList
                            key={list.order}
                            list={list}
                        />
                    ))}
                </section>
            </Suspense>
        </main>
    );
};

export default Board;
