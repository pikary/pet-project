import {FC, useEffect} from 'react'
import Input from "../../components/Input/Input.tsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import {
    Formik,
    Form
} from 'formik';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {initialValues,LoginSchema} from "./helpers.ts";
import {authLoginRequest, authRegisterRequest} from "../../store/users/actions.ts";
import {LoginFormValues} from "../../store/users/types.ts";

const Login: FC = () => {
    const navigate = useNavigate()
    const {currentUser,isLoading} = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()



    const onSubmit = (values: LoginFormValues) => {
        console.log(values)
        dispatch(authLoginRequest(values));
    }

    // Navigate to home page on successful registration
    useEffect(() => {
        if (currentUser && isLoading===false) {
            navigate('/'); // Navigate to the home page or desired path
        }
    }, [currentUser, navigate]);
    return (
        <div className={'w-full h-full'}>
            <div className='w-full ' style={{
                background: "url('https://preview.colorlib.com/theme/bootstrap/login-form-03/images/bg_1.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: 'center',
                height: 200,
            }}></div>
            <Formik
                validationSchema={LoginSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                <Form className={'mx-auto w-1/2 my-1/2 bg-white px-10 py-5 mt-[-20px]'}>
                    <h2 className={'text-center text-3xl mb-10'}>Login to social</h2>
                    <Input
                        type={'email'}
                        labelText={'Username'}
                        placeholder={'your email'}
                        className={'w-full py-3 text-base bg-gray-100 mb-4'}
                        name={'email'}
                    />
                    <Input
                        type={'password'}
                        labelText={'Password'}
                        placeholder={'your password'}
                        className={'w-full py-3 text-base bg-gray-100 mb-4'}
                        name={'password'}
                    />
                    <div className='mt-3 flex justify-between mb-6'>
                        <Checkbox
                            name={'isRemember'}
                            label={'Remember me?'}>
                        </Checkbox>
                        <Link className={'text-lg underline text-primary'} to={'recovery'}>Forgot password?</Link>
                    </div>
                        <Button type={'submit'} text={'Log in'} className={'text-lg text-white'}/>
                </Form>
            </Formik>
        </div>
    )
}

export default Login