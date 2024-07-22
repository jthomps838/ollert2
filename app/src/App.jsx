import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.scss';
import Header from './components/Common/Header';
import AuthPage from './pages/AuthPage';
import BoardDetails from './pages/BoardDetails';
import BoardsPage from './pages/BoardsPage';
import { DeckReviewpage } from './pages/DeckReviewpage';
import FlashcardPage from './pages/FlashcardPage';
import Four0One from './pages/Four0One';
import FourOFour from './pages/FourOFour';
import Home from './pages/Home';

const queryClient = new QueryClient();

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
        path: '/flashcards',
        element: <FlashcardPage />,
    },
    {
        path: '/flashcards/:id',
        element: <DeckReviewpage />,
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
        <QueryClientProvider client={queryClient}>
            <section className='container'>
                <Header />
                <RouterProvider router={router} />
            </section>
        </QueryClientProvider>
    );
}

export default App;
