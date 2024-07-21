import { Suspense } from 'react';
import BoardCard from './BoardCard';

const BoardList = ({ list: { id, title }, cards }) => {
    return (
        <section className='board-list'>
            <Suspense fallback={<h2>Loading...</h2>}>
                <header>
                    <h2>{title}</h2>
                </header>
                <main>
                    {cards?.map((card) => (
                        <BoardCard
                            key={card.order}
                            card={card}
                        />
                    ))}
                </main>
            </Suspense>
        </section>
    );
};

export default BoardList;
