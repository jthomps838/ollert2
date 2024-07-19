import { IoMdMenu } from 'react-icons/io';

import { useState } from 'react';
import BoardDropdown from './BoardDropdown';
import BoardMenuDropdown from './BoardMenuDropdown';

const BoardMenu = () => {
    const [open, setOpen] = useState(false);
    const onClickHandler = () => setOpen((prev) => !prev);

    return (
        <section className='board-settings board-menu'>
            <IoMdMenu
                className='board-icon'
                onClick={onClickHandler}
            />
            <BoardDropdown
                open={open}
                setOpen={setOpen}
            >
                <BoardMenuDropdown />
            </BoardDropdown>
        </section>
    );
};

export default BoardMenu;
