import React, {useState, ChangeEvent} from 'react';

interface InputProps {
    className?: string;
    labelText?: string;
    type?: string;
    placeholder?: string;
    name?: string;
    modelValue: string;
    icon?: string;
    onModelValueChange: (value: string) => void; // Event for updating the input value
}

const Input: React.FC<InputProps> = ({
                                         className = '',
                                         labelText,
                                         type = 'text',
                                         placeholder,
                                         name,
                                         modelValue,
                                         icon,
                                         onModelValueChange
                                     }) => {
    const [focus, setFocus] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onModelValueChange(e.target.value); // Emit the input value change event
    };

    return (
        <div>
            {labelText && (
                <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
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
                    value={modelValue}
                    onChange={handleInputChange}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    className={`px-2 py-1 rounded border border-transparent focus:border-black focus:shadow-[0px_0px_10px_1px_gray] transition ease-in-out delay-330 ${className}`}
                    aria-label={placeholder || labelText}
                    autoComplete="off"
                    style={{paddingLeft: icon ? '30px' : undefined}} // Adjust padding if icon exists
                />
            </div>
        </div>
    );
};

export default Input;
