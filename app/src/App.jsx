import './App.scss';
import Header from './components/Common/Header';
import AsideMenu from './components/Common/AsideMenu';
import Board from './components/Board/Board';

function App() {
    return (
        <section className='container'>
            <Header />
            <section className='main-content'>
                <AsideMenu />
                <Board
                    id={1}
                    title={'Kanban Board title'}
                />
            </section>
        </section>
    );
}

export default App;
