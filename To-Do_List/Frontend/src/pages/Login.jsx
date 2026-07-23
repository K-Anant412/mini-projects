import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const { loginUser } = useContext( AuthContext );
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setServerError('');

        const result = await loginUser( data.email, data.password )
        if ( result.success ) {
            navigate('/home')
        }else{
            setServerError( result.error );
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-100 h-100 border-gray-400 rounded-2xl flex flex-col items-center p-3 shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
                <h1 className='text-3xl text-gray-700 font-bold p-2 w-full h-fit flex items-center justify-center '>Log-in</h1>

                <div className='relative w-full h-fit p-2 flex flex-col items-center'>
                    <label className='relative w-fit px-1 -left-22'>Email Address</label>
                    <input 
                        type="email" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address"}
                        })}    
                        placeholder='name@example.com'
                        className='w-[80%] h-fit p-3 pl-6 bg-white/70 rounded-xl placeholder:text-2xl'
                    />
                </div>

                <div className='w-full h-fit p-2 flex flex-col items-center'>
                    <label className='relative w-fit px-1 -left-26'>Password</label>
                    <input 
                        type="password" 
                        {...register("password", {
                            required: "password is required"
                        })} 
                        className='w-[80%] h-fit p-3 pl-6 bg-white/70 rounded-xl placeholder:text-2xl flex items-center justify-center'
                    />
                    {errors.password && <p className='text-xs text-red-400 mt-1'>{errors.password.message}</p>}
                </div>

                <button
                    type='submit'
                    className='w-[70%] h-fit py-2.5 mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-md shadow-sky-600/20 transition-all duration-200'
                >
                    Sign In
                </button>
                
                <p>
                    Don't have an account?{' '}
                    <Link>
                        Rigister here
                    </Link>
                </p>
            </form>
        </>
    )
}

export default Login