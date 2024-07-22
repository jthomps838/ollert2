const DeckSetButtonGroup = ({ nextCard, prevCard, back }) => {
    return (
        <section className='question-btns'>
            <button onClick={prevCard}>Previous</button>
            <button onClick={back}>Back</button>
            <button onClick={nextCard}>Next</button>
        </section>
    );
};

export default DeckSetButtonGroup;
