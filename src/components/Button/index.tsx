import React, {ReactNode} from 'react';
import classnames from 'classnames';

type ButtonType = 'pink' | 'blue';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode | null;
    text?: string;
    className?: string;
    onClick?: () => void;
    shortenText?: string;
    color?: ButtonType;
}

function Button(props: ButtonProps) {
    const {
        onClick,
        className,
        type,
        disabled,
        text,
        icon,
        color,
        shortenText,
    } = props;

    return (
        <button
            disabled={disabled || false}
            onClick={onClick}
            className={'w-full bg-primary text-base cursor-pointer flex justify-center items-center px-3 py-4 font-semibold rounded-lg' + className}
            type={type}
        >
            <p>{text}</p>
            {icon}
        </button>
    );
}

Button.defaultProps = {
    icon: null,
    className: '',
    onClick: () => {
    },
    color: '',
    text: '',
    shortenText: '',
};

export default Button;