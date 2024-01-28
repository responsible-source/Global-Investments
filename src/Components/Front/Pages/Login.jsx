import React from 'react'
import { Globe } from '@phosphor-icons/react/dist/ssr'
import { Link } from 'react-router-dom'
import { Envelope, Lock } from '@phosphor-icons/react/dist/ssr'



const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }


  return (
    <div className='container w-[100%] bg-darkBlack h-[1000px] md:h-[800px] '>
        <div className='wrapper  px-10 md:px-20'>
        <div className='flex pt-5'>
        <Globe size={40} className='text-Green pt-1' />
        <Link to='/' className='text-Green font-Encode text-[30px]'>Global Tradez</Link>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col mx-auto bg-white rounded-md w-[100%] md:w-[50%] mt-20 pb-20 '>
            <h3 className='text-center text-Green text-[25px] font-Encode font-bold pt-5'>Welcome back, Investor</h3>
            <div className='relative px-5 mt-10'>
                <label className='block text-[18px] font-Encode'>Email</label>
                <input className='border-2 border-darkBlack w-[100%] p-3 rounded-md font-Encode pl-14' type="email" placeholder='Kindly Enter Email' />
                <Envelope className='absolute inset-1 top-[40px] left-[30px]' size={25} />
            </div>

            <div className='relative px-5 mt-5'>
                <label className='block text-[18px] font-Encode'>Password</label>
                <input className='border-2 border-darkBlack w-[100%] p-3 rounded-md font-Encode pl-14' type="password" placeholder='Kindly Enter Password' />
                <Lock className='absolute inset-1 top-[40px] left-[30px]' size={25} />
            </div>

            <div>
                <Link className='flex items-center justify-center mx-auto text-center bg-darkBlack rounded-md text-white mt-6 p-3 w-[50%] hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Login</Link>
            </div>

            <p className='text-center pt-5'>Don't have an account ? <Link className='text-Green' to='/signup'>Sign up</Link></p>

        </form>
        </div>
    </div>
  )
}

export default Login;