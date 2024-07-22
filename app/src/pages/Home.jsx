import React from 'react';

import { IoHome } from 'react-icons/io5';
import AsideMenu from '../components/Common/AsideMenu';

const Home = () => {
    return (
        <section className='main-content'>
            <AsideMenu />
            <section className='container'>
                <h1 className='boards-header'>
                    <IoHome /> Home
                </h1>
                <main>
                    <h1>List of Boards</h1>
                    <h1>List of flashcards</h1>
                </main>
            </section>
        </section>
    );
};

export default Home;
