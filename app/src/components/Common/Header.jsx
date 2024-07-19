import axios from 'axios';

const Header = () => {
    const login = () => {
        axios
            .post(
                `${import.meta.env.VITE_SERVER_URL}/api/auth/signin`,
                {
                    username: 'josefffffph',
                    password: 'testing',
                },
                { withCredentials: true },
            )
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <header className='main_header'>
            <aside>Logo</aside>
            <nav>
                <button onClick={login}>Login</button>
            </nav>
        </header>
    );
};

export default Header;
