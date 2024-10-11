import React, {useEffect} from 'react';
import {useField} from "formik";
import './styles.scss';

interface CheckboxProps {
    name:string;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name,label }) => {
    const [field,meta] = useField({name,type:'checkbox'})
    useEffect(() => {
        console.log(field.checked)
    }, [field.checked]);
    return (
        <>
            <label className={'checkbox__container text-base cursor-pointer block ' }>
                <input
                    type="checkbox"
                    className={'checkbox__input mr-4 '+ (field.checked && 'checked')}
                    {...field}
                />
                <span className={`checkmark ${meta.error && 'checkmark-error'}`} style={{background:field.checked ? '#2196F3' : '#eee'}}></span>
               {label}
            </label>

        </>

    );
};

export default Checkbox;
