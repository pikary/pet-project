import * as Yup from 'yup';
import {RegisterFormValues} from "../../store/users/types.ts";


export const initialValues:RegisterFormValues={
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    passwordRepeat:'',
    isConsent:false
}


export const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required'),
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('This field is required'),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    isConsent: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

