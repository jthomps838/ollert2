import { useRef } from 'react';
import { ImCross } from 'react-icons/im';
import { useOnClickOutside } from 'usehooks-ts';

const BoardDropdown = ({ children, open, setOpen }) => {
    const ref = useRef(null);
    const handleClickOutside = (e) => {
        setOpen();
    };
    const handleClickInside = () => {
        setOpen();
    };

    useOnClickOutside(ref, handleClickOutside);

    return (
        <>
            {open && (
                <section
                    ref={ref}
                    className='board-dropdown'
                >
                    <ImCross
                        className='dropdown-close'
                        onClick={handleClickInside}
                    />
                    {children}
                </section>
            )}
        </>
    );
};

export default BoardDropdown;
