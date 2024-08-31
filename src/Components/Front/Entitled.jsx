import  Lottie  from 'lottie-react'
import React from 'react'
import { Link } from 'react-router-dom'
import animationData from '../../Animations/Bank-Animation.json'


const Entitled = () => {
  return (
    <div className='Container h-[900px] md:h-[700px] w-100%'>
        <h1 className='bg-darkBlack text-Green font-Encode text-[28px] md:text-[40px] text-center py-5'>What Our Clients Are Entitled To...</h1>
        <div className='wrapper bg-darkBlack text-white h-[900px] md:h-[700px] mt-0 mb-0 pt-20 px-10 md:px-20'>
            <div className='Entitle1 flex flex-col md:flex-row'>
                <div className='texts'>
                    <h3 className='text-Green text-[20px] md:text-[25px] font-Encode'>SWIFT WITHDRAWAL</h3>
                    <h1 className='text-[24px] md:text-[30px] font-Encode py-3'>Easy Withdrawal Into Domestic Bank Accounts Across The Globe</h1>
                    <p className='py-1 text-[18px] md:text-[20px] mb-10'>
                        Get Access to our exclusive app that allows you to send unlimited transactions into Domestic Bank Accounts In Germany, USA, Canada, Australia, NewZealand.
                    </p>
                    <Link to='/signup' className='bg-Green py-3 px-8 rounded-md hover:bg-white hover:text-Green'>Get Started</Link>
                </div>
                <div className='animation pt-[90px] md:pt-0'>
                    <Lottie animationData={animationData} loop={true} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Entitled