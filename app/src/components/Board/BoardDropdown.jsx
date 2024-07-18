import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { ImCross } from 'react-icons/im';

const BoardDropdown = ({ children, open, setOpen }) => {
    const ref = useRef(null);
    const handleClickOutside = (e) => {
        setOpen();
    };
    const handleClickInside = () => {
        setOpen();
    };

    useOnClickOutside(ref, handleClickOutside);
    console.log(children, open);
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
