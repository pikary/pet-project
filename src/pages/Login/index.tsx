import {FC} from 'react'
import Input from "../../components/Input/Input.tsx";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import {
    Formik,
    Form
} from 'formik';
import {initialValues} from "./helpers.ts";

const Login: FC = () => {


    const onSubmit = async() =>{
        try{
            //api call
        }catch (e) {

        }
    }
    return (
        <div className={'w-full h-full'}>
            <div className='w-full ' style={{
                background: "url('https://preview.colorlib.com/theme/bootstrap/login-form-03/images/bg_1.jpg')" ,
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPositionY:'center',
                height: 200,
            }}></div>
            <Formik initialValues={initialValues} onSubmit={()=>{}}>
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
                    <div>
                        <Button type={'submit'} text={'Log in'} className={'text-lg text-white'}/>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Login