import React from 'react'
import img1 from '../../img/Bitcoin.jpeg'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


const Bitcoin = () => {
  return (
    <div className='h-auto md:h-[800px]'>
      <div className=' text-darkBlack pt-10 px-10 md:px-20'>
            <Link className='flex' to='/deposit'>
            <ArrowLeft size={20} />
            </Link>
        </div>
       <div className='px-5 md:px-20 mt-20'>
       <div className='flex flex-col'>
            <img src={img1} alt="" className='w-[100%] h-[300px] md:h-[600px]' />
            <p className='pt-5 px-5 text-[14px] md:text-[24px] text-center'>bc1qrtrrp4mvhmdtj4pyn6jtezpcpxqf2gtntunq3l</p>
        </div>

        <div className='bg-darkBlack text-white rounded-lg mt-8 px-5 py-3'>
          <p>Send only Bitcoin (BTC) to this address.</p>
          <p>Sending any other coins may result in permanent loss.</p>
        </div>
       </div>
    </div>
  )
}

export default Bitcoin