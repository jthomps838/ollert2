import { useState } from 'react';

const DeckCard = ({ question }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => setIsFlipped((prev) => !prev);
    return (
        <section
            className='card-container'
            onClick={handleClick}
        >
            <section className={`card ${isFlipped ? 'flipped' : ''}`}>
                <section className='card-front'>{question.question}</section>
                <section className='card-back'>{question.answer}</section>
            </section>
        </section>
    );
};

export default DeckCard;
