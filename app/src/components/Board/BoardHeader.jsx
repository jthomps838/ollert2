import BoardMenu from './BoardMenu';
import BoardSettings from './BoardSettings';

const BoardHeader = ({ title }) => {
    return (
        <header className='board-header'>
            <BoardMenu />
            <h1 className='board-title'>{title}</h1>
            {/* add settings later */}
            <BoardSettings />
        </header>
    );
};

export default BoardHeader;
