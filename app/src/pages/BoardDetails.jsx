import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Board from '../components/Board/Board';
import AsideMenu from '../components/Common/AsideMenu';

const BoardDetails = () => {
    const [board, setBoard] = useState({});
    const { id: boardId } = useParams('id');

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_SERVER_URL}/api/boards/${boardId}`)
            .then(({ data }) => {
                setBoard(() => data);
            });
    }, [boardId]);

    return (
        <section className='main-content'>
            <AsideMenu />
            <Board board={board} />
        </section>
    );
};

export default BoardDetails;
