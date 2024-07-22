const DeckSet = ({ set, setQuestionSet }) => {
    const handleClick = () => {
        return setQuestionSet(set);
    };
    return (
        <main
            key={set._id}
            onClick={handleClick}
        >
            <h1>{set.title}</h1>
            <p>{set.description}</p>
            <span>{set.label}</span>
        </main>
    );
};

export default DeckSet;
