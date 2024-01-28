import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../../Animations/Profit-Anime.json'


const Continuation = () => {
  return (
    <div>
        <div className='wrapper bg-white h-[900px] md:h-[800px] mt-0 pt-20 px-10 md:px-20'>
            <div className='Entitle1 flex flex-col-reverse md:flex-row gap-4'>
            <div className='animation pt-[90px] md:pt-0 md:w-[40%]'>
                    <Lottie animationData={animationData} loop={true} />
                </div>
                <div className='texts md:w-[60%]'>
                    <h3 className='text-Green text-[20px] md:text-[25px]  font-Encode'>Guaranteed Trading Profits</h3>
                    <h1 className='text-[24px] md:text-[30px] text-darkBlack font-Encode py-3'>Access To Trading Experts That Helps Control Trades And Stop Loss For Free.</h1>
                    <p className='py-1 text-[18px] md:text-[20px] mb-10 text-darkBlack'>
                        Get Access to our exclusive app that allows you to meet with experts to handle your trades and stop loss. Our experts have generated millions of dollars in profits for our registered clients.
                    </p>
                    <Link to='/signup' className='bg-Green py-3 px-8 rounded-md hover:bg-darkBlack hover:text-Green'>Get Started</Link>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Continuation