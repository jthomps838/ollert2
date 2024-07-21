import { useState } from 'react';

const Login = () => {
    const [creds, setCreds] = useState({
        username: '',
        password: '',
    });
    const onChange = (e) =>
        setCreds((creds) => ({ ...creds, [e.target.name]: e.target.value }));
    const signIn = (e) => {
        console.log(creds);
        e.preventDefault();
    };
    return (
        <form>
            <label htmlFor='username'>
                <input
                    type='text'
                    placeholder='username'
                    name='username'
                    onChange={onChange}
                />
            </label>
            <label htmlFor='password'>
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                    onChange={onChange}
                />
            </label>
            {/* TODO: add forgot password logic */}
            <button
                type='submit'
                onClick={signIn}
            >
                Sign In
            </button>
        </form>
    );
};

export default Login;
