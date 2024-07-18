import BoardDropdown from './BoardDropdown';

const BoardProfileDropdown = ({ open, setOpen }) => {
    return (
        <BoardDropdown
            open={open}
            setOpen={setOpen}
        >
            <>
                <h2>Settings Dropdown</h2>
            </>
        </BoardDropdown>
    );
};

export default BoardProfileDropdown;
