import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Header from './components/Common/Header';
import AuthPage from './pages/AuthPage';
import BoardDetails from './pages/BoardDetails';
import BoardsPage from './pages/BoardsPage';
import Four0One from './pages/Four0One';
import FourOFour from './pages/FourOFour';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
    {
        path: '/boards',
        element: <BoardsPage />,
    },
    {
        path: '/boards/:id',
        element: <BoardDetails />,
    },
    {
        path: '/unauthorized',
        element: <Four0One />,
    },
    {
        path: '*',
        element: <FourOFour />,
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
