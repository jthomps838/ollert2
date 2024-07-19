import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Header from './components/Common/Header';
import BoardDetails from './pages/BoardDetails';
import BoardsPage from './pages/BoardsPage';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/boards',
        element: <BoardsPage />,
    },
    {
        path: '/boards/:id',
        element: <BoardDetails />,
    },
]);

function App() {
    return (
        <section className='container'>
            <Header />
            <RouterProvider router={router} />
        </section>
    );
}

export default App;
