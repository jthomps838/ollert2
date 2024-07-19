import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoFilter } from 'react-icons/io5';

import BoardFilterDropdown from './BoardFilterDropdown';
import BoardProfileDropdown from './BoardProfileDropdown';
import BoardSettingsDropdown from './BoardSettingsDropdown';

const BoardSettings = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleDropdownToggle = (type) => {
        switch (type) {
            case 'profile':
                setProfileOpen((prev) => !prev);
                break;
            case 'filter':
                setFilterOpen((prev) => !prev);
                break;
            case 'settings':
                setSettingsOpen((prev) => !prev);
                break;
            default:
                break;
        }
    };
    return (
        <section className='board-settings'>
            <IoFilter
                onClick={() => handleDropdownToggle('filter')}
                className='board-icon'
            />
            <FaUserCircle
                onClick={() => handleDropdownToggle('profile')}
                className='board-icon'
            />
            <HiOutlineDotsHorizontal
                onClick={() => handleDropdownToggle('settings')}
                className='board-icon'
            />
            <BoardFilterDropdown
                open={filterOpen}
                setOpen={() => handleDropdownToggle('filter')}
            />
            <BoardProfileDropdown
                open={profileOpen}
                setOpen={() => handleDropdownToggle('profile')}
            />
            <BoardSettingsDropdown
                open={settingsOpen}
                setOpen={() => handleDropdownToggle('settings')}
            />
        </section>
    );
};

export default BoardSettings;
