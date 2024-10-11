import React, {useState, ChangeEvent} from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';

interface InputProps {
    className?: string;
    labelText?: string;
    type?: string;
    placeholder?: string;
    name: string;
    icon?: string;
    margin? :string
}

const Input: React.FC<InputProps> = ({
                                         className = '',
                                         labelText,
                                         type = 'text',
                                         placeholder,
                                         name,
                                         icon,
                                        margin
                                     }) => {
    const [focus, setFocus] = useState(false);


    const [field,meta,helpers] = useField({name:name, type:'text'});


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
                    style={{paddingLeft: icon ? '30px' : undefined}} // Adjust padding if icon exists
                    {...field}
                />
            </div>
            {meta.error && <span className={'block text-red-500 text-sm'}>{meta.error}</span>}

        </div>
    );
};

export default Input;
