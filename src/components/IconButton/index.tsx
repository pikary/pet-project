import {FC, ButtonHTMLAttributes} from 'react';

interface IconButtonProps {
    icon: string;
    classname?: string;
    onclick?: () => void;
}

const IconButton:FC<
    IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>
    = ({ icon, classname = '', onclick, ...rest }) => {
    return (
        <button
            onClick={onclick}
            className={`flex items-center justify-center w-10 h-10 px-3 py-3 border-gray-400 border-2 rounded-full text-md
        text-gray-400 cursor-pointer hover:border-gray-700 hover:text-gray-700 transition-transform duration-200 transform hover:scale-105 ${classname}`}
            {...rest}
        >
            <i className={icon}></i>
        </button>
    );
};

export default IconButton;
