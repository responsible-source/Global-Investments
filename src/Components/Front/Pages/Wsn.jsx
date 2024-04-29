import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'

const Wsn = () => {
  return (
    <div className='wrapper bg-darkBlack h-[950px] md:h-[600px]'>
        <div className='px-10 md:px-20 pt-10'>
        <div>
            <Link to='/withdrawal'>
            <ArrowLeft size={32} className='text-white' />
            </Link>
        </div>
            <h3 className='text-center mt-[100px] text-Green text-[24px] font-Encode pb-16'>Withdrawal Security Number</h3>
            <div>
                <input type="number" placeholder='Enter WSN Carefully' className='w-[100%] h-[50px] border border-gray-500 p-4' />
            </div>

            <Link to='/congratulations' className='flex mx-auto bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[30%] md:w-[15%] text-center  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Withdraw</Link>
        </div>
    </div>
  )
}

export default Wsn