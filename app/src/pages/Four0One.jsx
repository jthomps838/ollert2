import { Link } from 'react-router-dom';

const Four0Four = () => {
    return (
        <main className='four-o-one-container'>
            <header>
                <h1>401 Unauthorized</h1>
                <p>You are not authorized to view this page.</p>
            </header>
            <img
                className='image'
                src='./401_image.jpeg'
                alt='Unauthorized'
            />
            <section className='four-o-one-links'>
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

export default Four0Four;
