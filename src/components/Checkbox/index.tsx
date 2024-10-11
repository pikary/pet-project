import React from 'react';
import './styles.scss';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    return (
        <label className={'checkbox__container text-lg cursor-pointer' + (checked ? ' checked' : '')}>
            <input
                type="checkbox"
                checked={true}
                onChange={onChange}
                className={'checkbox__input mr-4'}
            />
            <span className={'checkmark'}></span>
            {label}
        </label>
    );
};

export default Checkbox;
