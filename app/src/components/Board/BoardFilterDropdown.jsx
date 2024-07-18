import BoardDropdown from './BoardDropdown';

const BoardFilterDropdown = ({ open, setOpen }) => {
    return (
        <BoardDropdown
            open={open}
            setOpen={setOpen}
        >
            <h3>Filters by Members</h3>
            {/* list of members available */}
            <h3>Filters by Due Date</h3>
            {/* overdue, next day, no date  */}
            <h3>Filters by Activity</h3>
            {/* activity by date range */}
            <h3>Filters by Labels</h3>
            {/* show labels, and no label option */}
        </BoardDropdown>
    );
};

export default BoardFilterDropdown;
