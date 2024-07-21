import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';

import { useNavigate } from 'react-router';
import Card from '../components/Card/Card';
import AsideMenu from '../components/Common/AsideMenu';
import '../styles/boardPage.scss';

const BoardsPage = () => {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/api/boards`, {
                withCredentials: true,
            })
            .then(({ data }) => {
                if (data) {
                    setBoards(() => [...data]);
                }
            })
            .catch((err) => {
                console.log(err);
                if (err?.response?.status === 401) {
                    navigate('/unauthorized');
                }
            });
    }, [navigate]);

    return (
        <section className='main-content'>
            <AsideMenu />
            <section className='container'>
                <h1 className='boards-header'>
                    <IoPersonSharp /> Your Boards
                </h1>
                <Suspense fallback={<h1>Loading...</h1>}>
                    {boards ? (
                        boards?.map((board) => (
                            <Card
                                key={board._id}
                                board={board}
                            />
                        ))
                    ) : (
                        <h1>No boards</h1>
                    )}
                </Suspense>
            </section>
        </section>
    );
};

export default BoardsPage;
