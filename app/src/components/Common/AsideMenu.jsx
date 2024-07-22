import { Link } from 'react-router-dom';
import './common.scss';

const AsideMenu = () => {
    return (
        <aside className='aside-menu'>
            <nav>
                <Link to='/boards'>Boards</Link>
                <Link to='/flashcards'>Flash Cards</Link>
            </nav>
        </aside>
    );
};

export default AsideMenu;
