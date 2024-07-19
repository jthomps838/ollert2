import Board from '../components/Board/Board';
import AsideMenu from '../components/Common/AsideMenu';

const BoardDetails = () => {
    return (
        <section className='main-content'>
            <AsideMenu />
            <Board
                id={1}
                title={'Kanban Board title'}
            />
        </section>
    );
};

export default BoardDetails;
