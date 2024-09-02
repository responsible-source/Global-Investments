import React from 'react';
import Lottie from 'lottie-react'
import animationData from '../../../Animations/Welcome.json'
import { Link } from 'react-router-dom';


const Welcome = () => {
  let data = JSON.parse(localStorage.getItem("Newuser"));
  return (
    <div className='bg-darkBlack h-auto w-[100%]'>
      <div className='flex flex-col justify-center items-center py-12 mx-auto h-auto'>
        <div className=' text-white text-center space-y-4 my-[40px]'>
        <h3 className='text-[20px] font-Encode font-semibold px-10 uppercase'>CONGRATULATIONS!!! INVESTOR {`${data.username}`} </h3>
        <div className='max-w-sm h-80 object-contain mx-auto'>
                <Lottie animationData={animationData} loop={true}/>
          </div>
        <p className='text-[16px] font-Encode'>Your Account Has Been Successfully Registered</p>
        <p className='font-Encode'>Make your first deposit with 24 hours and get 20% bonus</p>
        <Link to='/login' className='bg-Green text-white w-[40%] py-3 px-12 mt-5 flex items-center justify-center mx-auto rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:block'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome