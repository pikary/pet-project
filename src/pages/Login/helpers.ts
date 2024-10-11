import * as Yup from 'yup';

export interface LoginFormValues {
    email: string;
    password: string;
    isRemember: boolean;
}

export const initialValues:LoginFormValues={
    email:'',
    password:'',
    isRemember:false
}

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
});
