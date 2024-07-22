import axios from 'axios';
import { useEffect, useState } from 'react';
import DeckCard from './DeckCard';
import DeckSetButtonGroup from './DeckSetButtonGroup';
const DeckSetView = ({
    questionSet: { _id: setId, title },
    setQuestionSet,
}) => {
    const [question, setQuestion] = useState(null);
    const [questionSet, setQuestions] = useState(null);

    useEffect(() => {
        axios
            .get(
                `${
                    import.meta.env.VITE_SERVER_URL
                }/api/decks/questionset/${setId}`,
            )
            .then(({ data: { questions } }) => {
                setQuestions(() => questions);
                setQuestion(() => questions[0]);
            });
    }, [setId]);

    const nextCard = () => {
        const currIndex = questionSet.indexOf(question);
        if (currIndex === questionSet.length - 1) {
            setQuestion(() => questionSet[0]);
        } else {
            setQuestion(() => questionSet[currIndex + 1]);
        }
    };

    const prevCard = () => {
        const currIndex = questionSet.indexOf(question);
        if (currIndex === 0) {
            setQuestion(() => questionSet[questionSet.length - 1]);
        } else {
            setQuestion(() => questionSet[currIndex - 1]);
        }
    };
    const back = () => setQuestionSet(null);

    return (
        <section className='main-content'>
            {questionSet && (
                <header>
                    <h1>{questionSet.title}</h1>
                </header>
            )}
            {question && (
                <section className='question-container'>
                    <h1>{title}</h1>
                    <h1 className='question-header'>
                        Question {questionSet.indexOf(question) + 1} of{' '}
                        {questionSet.length}
                    </h1>
                    <DeckCard question={question} />

                    <DeckSetButtonGroup
                        nextCard={nextCard}
                        prevCard={prevCard}
                        back={back}
                    />
                </section>
            )}
        </section>
    );
};

export default DeckSetView;
