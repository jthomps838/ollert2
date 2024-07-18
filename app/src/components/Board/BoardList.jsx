import { Suspense, useEffect, useState } from 'react';
import BoardCard from './BoardCard';

// mock data
import FakeCards from '../../mockData/cards';
import { sortByOrder } from '../../utils/sort';

const BoardList = ({ list: { id, title } }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (id) {
            const filteredCards = FakeCards.filter(
                (card) => card.list === id && !card.archived,
            );
            setCards(filteredCards.sort(sortByOrder));
        }
    }, [id]);

    return (
        <section className='board-list'>
            <Suspense fallback={<h2>Loading...</h2>}>
                <header>
                    <h2>{title}</h2>
                </header>
                <main>
                    {cards.map((card) => (
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
