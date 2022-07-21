import * as React from 'react';

type Props = {
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({children, onClick}: Props): JSX.Element => {
    return (
        <button onClick={onClick} className='text-white text-xl text-center font-medium tracking-widest border border-solid border-white py-3 w-40 hover:text-black hover:bg-white duration-300 mx-auto my-2 sm:m-2.5 block sm:inline'>
            {children}
        </button>
    )
}

export default Button;