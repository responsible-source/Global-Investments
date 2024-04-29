import React from 'react'
import { ArrowLeft, Globe } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const CryptoWithdrawal = () => {
  return (
     <div className='px-5 md:px-20 bg-darkBlack h-[950px] md:h-[600px] w-full'>
        <div className='pt-9 flex'>
        <Link to='/withdrawal'>
        <ArrowLeft size={32} className='text-white' />
        </Link>
        <div className='flex  mx-auto text-Green font-Encode'>
        <Globe className='text-[32px] md:text-[40px]' />
        <h3 className='text-[24px] md:text-[32px]'>Global Tradez</h3>
        </div>
        </div>
            <div className='items-center justify-center pt-32'>
            <form action="#" className='block'>
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Amount</label>
                    <input type="number" placeholder='$' className='block p-3 w-[30%] md:w-[10%] h-[40px] border border-gray-500' />
                    </div>
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Wallet Address</label>
                    <input type="text" placeholder='Enter Wallet Address Carefully' className='block p-3 w-[100%] md:w-[90%] h-[40px] border border-gray-500' />
                    </div>
                </form>
                <Link to='/wsn' className='bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[15%] text-center  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Send Coin</Link>
            </div>
     </div>
  )
}

export default CryptoWithdrawal