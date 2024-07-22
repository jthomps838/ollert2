import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { getDeckById } from '../../api/deck';
import './deck.scss';
import DeckSet from './DeckSet';
import DeckSetView from './DeckSetView';

const Deck = () => {
    const { id } = useParams('id');
    const {
        isLoading,
        isError,
        data: deck,
    } = useQuery({
        queryKey: [id],
        queryFn: getDeckById,
    });
    const [questionSet, setQuestionSet] = useState(null);

    if (isLoading)
        return (
            <section className='question-set-skeleton'>
                <h1>Loading...</h1>
            </section>
        );

    if (isError) return <h1>error</h1>;

    return (
        <section className='question-set-container'>
            <header className='question-set-header'>
                <h1>{deck.title}</h1>
                <p>{deck.description}</p>
            </header>
            <h1>Question Sets</h1>
            <Link to='/flashcards'>Back to Decks</Link>
            {!questionSet ? (
                deck?.questionSets?.map((set) => (
                    <DeckSet
                        key={set._id}
                        set={set}
                        setQuestionSet={setQuestionSet}
                    />
                ))
            ) : (
                <DeckSetView
                    questionSet={questionSet}
                    setQuestionSet={setQuestionSet}
                />
            )}
        </section>
    );
};

export default Deck;
