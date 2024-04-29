import React from 'react'
import { Globe, ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const Accounts = () => {
  return (
    <div className='px-10 md:px-20 bg-darkBlack w-full h-[800px]'>
        <div className=' text-Green pt-10 flex'>
            <Link to='/deposit'>
            <ArrowLeft size={32} className='text-white' />
            </Link>
            <div className='flex mx-auto'>
            <Globe size={32} />
            <p className='text-[24px]'>Global Tradez</p>
            </div>
        </div>

        <div className='bg-gray-50 mt-20 w-[100%] rounded-lg'>
            <h3 className='text-center font-Encode text-[20px] py-3'>Deposit Steps</h3>
            <div className='flex px-2 gap-2 font-Encode'>
                <p>1.</p>
                <p>Contact your account manager to provide you with a receiving account</p>
            </div>
            <div className='flex px-2 gap-2 font-Encode py-4'>
                <p>2.</p>
                <p>Send a screenshot of payment deposit to your account manager for confirmation</p>
            </div>
            <div className='flex px-2 gap-2 font-Encode pb-5'>
                <p>3.</p>
                <p>Payment confirmation takes 10-20 minutes</p>
            </div>
        </div>
    </div>
  )
}

export default Accounts