import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../Animations/congratulations.json';
import { Link } from 'react-router-dom';


const Congratulations = () => {
  return (
    <div className='wrapper px-1 md:px-20'>
        <div className='flex flex-col pt-20'>
            <h3 className='text-center text-[32px] font-Encode'>Congratulations</h3>
            <div>
                <Lottie animationData={animationData} loop={true} />
            </div>
            <div className='flex flex-col px-5 md:px-10 font-Encode text-[20px] text-center'>
                <p>You have successfully Transferred <h3 className='text-Green block pt-2'>"Amount"</h3> to <h3 className='text-Green text-[14px] block pt-2'>"Address"</h3> </p>
                <p className='pt-2'>Transaction is currently Pending, dispensing might take up to 2hrs</p>
            </div>
            <div className='pb-5'>
                <Link to='/userdashboard' className='flex items-center justify-center mx-auto text-center bg-darkBlack rounded-md text-white mt-6 p-3 w-[20%] hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Congratulations