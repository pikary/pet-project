import * as Yup from 'yup';
import {LoginFormValues} from "../../store/users/types.ts";



export const initialValues:LoginFormValues={
    email:'',
    password:'',
    isRemember:false
}

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required'),
});
