import {FC, useState} from 'react'
import Input from "../../components/Input/Input.tsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import {
    Formik,
    Form
} from 'formik';
import {useNavigate} from "react-router-dom";
import {useAppDispatch,useAppSelector} from "../../store/hooks.ts";
import {initialValues, RegisterFormValues, RegisterSchema} from "./helpers.ts";
import {authRegisterRequest} from "../../store/users/actions.ts";

const Register: FC = () => {
    const navigate = useNavigate()
    const {isLoading} = useAppSelector((state)=>state.user)
    const dispatch = useAppDispatch()
    const onSubmit = (values: RegisterFormValues) => {
        const onSuccess = () =>{
            navigate('/')
        }
        try{
            dispatch(authRegisterRequest(values, onSuccess));
            console.log('try')
        }catch (e) {
            console.log('catch')
        }
    };
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
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
            >
                <Form className={'mx-auto w-1/2 my-1/2 bg-white px-10 py-5 mt-[-20px]'}>
                    <h2 className={'text-center text-3xl mb-1   0'}>Registration</h2>
                    <Input
                        type={'email'}
                        labelText={'Email'}
                        placeholder={'your email'}
                        className={'w-full py-3 text-base bg-gray-100'}
                        name={'email'}
                        margin={'mb-4'}
                    />

                    <div className={'w-full flex justify-between mb-4'}>
                        <Input
                            type={'text'}
                            labelText={'First Name'}
                            placeholder={'your name'}
                            className={'w-full flex-1 py-3 text-base bg-gray-100'}
                            name={'firstName'}
                        />
                        <Input
                            type={'text'}
                            labelText={'Surname'}
                            placeholder={'your surname'}
                            className={'w-full flex-1 py-3 text-base bg-gray-100'}
                            name={'lastName'}
                        />
                    </div>
                    <Input
                        type={'password'}
                        labelText={'Password'}
                        placeholder={'your password'}
                        className={'w-full py-3 text-base bg-gray-100'}
                        name={'password'}
                        margin={'mb-4'}
                    />

                    <Input
                        type={'password'}
                        labelText={'Repeat password'}
                        placeholder={'your password'}
                        className={'w-full py-3 text-base bg-gray-100'}
                        name={'passwordRepeat'}
                        margin={'mb-4'}
                    />
                    <div className='mt-3 flex gap-1 mb-6'>
                        <Checkbox
                            name={'isConsent'}

                            label={'I agree with'}>
                        </Checkbox>
                        <Link className={'text-base underline text-primary'} to={'recovery'}>Terms</Link>
                    </div>
                    <Button disabled={isLoading } type={'submit'} text={'Register'} className={`text-lg text-white ${isLoading && 'bg-red-200'}`}/>
                </Form>
            </Formik>

        </div>
    )
}

export default Register