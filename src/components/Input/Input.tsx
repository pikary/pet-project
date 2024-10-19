import React, { useState, ChangeEvent } from 'react';
import { useField } from 'formik';

interface InputProps {
    className?: string;
    labelText?: string;
    type?: string;
    placeholder?: string;
    name: string;
    icon?: string;
    margin?: string;
    formik?: boolean; // New prop to determine whether to use Formik or not
    value?: string; // Used if not in Formik
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // Non-Formik onChange handler
}

const Input: React.FC<InputProps> = ({
                                         className = '',
                                         labelText,
                                         type = 'text',
                                         placeholder,
                                         name,
                                         icon,
                                         margin,
                                         formik = true, // By default, assume Formik is being used
                                         value,
                                         onChange,
                                     }) => {
    const [focus, setFocus] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta] = formik ? useField({ name, type }) : [{ value }, {}];

    return (
        <div className={margin}>
            {labelText && (
                <label htmlFor={name} className="block text-gray-700 text-lg font-bold mb-2">
                    {labelText}
                </label>
            )}
            <div className="relative flex w-full">
                {icon && (
                    <i
                        className={`${icon} absolute left-1.5 translate-y-1/2 transition-colors duration-300 ${focus ? 'text-black' : 'text-gray-400'}`}
                    />
                )}
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    className={`px-2 py-1 rounded border border-transparent focus:border-black focus:shadow-[0px_0px_10px_1px_gray] transition ease-in-out delay-330 ${className}`}
                    aria-label={placeholder || labelText}
                    autoComplete="off"
                    style={{ paddingLeft: icon ? '30px' : undefined }}
                    {...(formik ? field : { value, onChange })}
                />
            </div>
            {meta?.error && <span className="block text-red-500 text-sm">{meta.error}</span>}
        </div>
    );
};

export default Input;
