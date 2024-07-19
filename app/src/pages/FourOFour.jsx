import { Link } from 'react-router-dom';

const Four0One = () => {
    return (
        <main className='four-o-four-container'>
            <header>
                <h1>404 Not Found</h1>
                <p>
                    The page does not exist, please take a look at some helpful
                    links below
                </p>
            </header>
            <img
                className='image'
                src='./404_image.jpeg'
                alt='Unauthorized'
            />
            <section className='four-o-four-links'>
                <Link
                    className='button'
                    to='/'
                >
                    Home
                </Link>
                <Link
                    className='button'
                    to='/auth'
                >
                    Login
                </Link>
                {/* <Link
                    className='button'
                    to='{{browseBoardsUrl}}'
                >
                    Browse Boards
                </Link> */}
            </section>
        </main>
    );
};

export default Four0One;
