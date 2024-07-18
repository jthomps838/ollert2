import { FaRegClock } from 'react-icons/fa';

const BoardCard = ({ card }) => {
    return (
        <section className='board-card'>
            <header>
                <h1>{card.title}</h1>
            </header>
            <main>
                <p>{card.description}</p>
            </main>
            <footer>
                <section className='label-container'>
                    {card?.labels.map((label) => (
                        <span key={label}>{label}</span>
                    ))}
                </section>
                {card?.dueDate ? (
                    <span className='due-date'>
                        <FaRegClock className='clock-icon' />
                        <p>{card.dueDate}</p>
                    </span>
                ) : null}
            </footer>
        </section>
    );
};

export default BoardCard;
