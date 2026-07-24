import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../service/api';

const Register = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const [serverError, setServerError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setServerError('');
        try{
            await authService.register(data.name, data.email, data.password);
            setSuccess(true);
            setTimeout(()=> navigate('/login'), 2000);
        }catch(error){
            setServerError(error.response?.data?.error || 'Registration failes, Try again');
        }
    };

    return (
        <>
            {serverError && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">{serverError}</div>
            )}

            {success && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-lg text-center">
                    "Registration successful! Redirecting to login..."
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className='w-100 h-fit border-gray-400 rounded-2xl flex flex-col items-center p-3 py-5 shadow-gray-600 shadow-[inset_0_0_8px_2px_rgba(0,0,0,0.06)]'>
                <h1 className='text-3xl text-gray-700 font-bold p-2 w-full h-fit flex items-center justify-center '>Create Account</h1>
            
                <div className='relative w-full h-fit p-2 flex flex-col items-center'>
                    <label className='relative w-fit px-1 -left-25'>Username</label>
                    <input 
                        type="email" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address"}
                        })}    
                        placeholder='e.g; user123'
                        className='w-[80%] h-fit p-2 pl-6 bg-white/70 rounded-xl placeholder:text-xl '
                    />
                </div>

                <div className='relative w-full h-fit p-2 flex flex-col items-center'>
                    <label className='relative w-fit px-1 -left-22'>Email Address</label>
                    <input 
                        type="email" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address"}
                        })}    
                        placeholder='e.g; name@example.com'
                        className='w-[80%] h-fit p-2 pl-6 bg-white/70 rounded-xl placeholder:text-xl'
                    />
                </div>
            
                <div className='w-full h-fit p-2 flex flex-col items-center'>
                    <label className='relative w-fit px-1 -left-26'>Password</label>
                    <input 
                        type="password" 
                        {...register("password", {
                            required: "password is required"
                        })} 
                        placeholder='******'
                        className='w-[80%] h-fit p-2 pl-6 bg-white/70 rounded-xl flex items-center justify-center placeholder:relative placeholder:top-0.5'
                    />
        
                    {errors.password && <p className='text-xs text-red-400 mt-1'>{errors.password.message}</p>}
                </div>
            
                <button
                    type='submit'
                    className='w-[70%] h-fit py-2.5 mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-md shadow-sky-600/20 transition-all duration-200'
                >
                    Create account
                </button>
                            
                <p className='text-sm font-medium w-full flex gap-1 items-center justify-center h-fit mt-4'>
                     Already have an account?{' '}
                    <Link to='/login' className='text-gray-800 hover:text-sky-800 font-medium'>
                        Sign-in
                    </Link>
                </p>
            </form>
        </>
    )
}

export default Register