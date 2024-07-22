import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AsideMenu from '../components/Common/AsideMenu';
import '../styles/pages/flashcardHome.scss';

const FlashcardPage = () => {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/api/decks`)
            .then(({ data }) => {
                setDecks(() => data?.decks || []);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section className='main-content'>
            <AsideMenu />
            <section className='flashcard-container'>
                <header>
                    <h1>Flashcard Decks</h1>
                </header>
                <main className='flashcard-decks-container'>
                    {decks?.map((deck) => (
                        <Link
                            key={deck._id}
                            to={`/flashcards/${deck._id}`}
                        >
                            <section>
                                <h2>{deck.title}</h2>
                            </section>
                        </Link>
                    ))}
                </main>
            </section>
        </section>
    );
};

export default FlashcardPage;
