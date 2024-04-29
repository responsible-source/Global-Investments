import React from 'react'
import UserNavbar from '../UserNavbar'
import { CaretRight, Bank, CurrencyBtc } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const Withdrawal = () => {
  return (
    <div>
        <UserNavbar />
        <div className='px-10 md:px-20 mt-16'>
        <div className='flex flex-col'>
           <div className='flex justify-between border-b-2 border-Grey'>
            <div className='flex pb-2 '>
              <Bank size={24} />
              <p>Bank Withdrawal</p>
            </div>
            <Link to='/bankwithdrawal' className='pb-2'>
          <CaretRight size={28} />
          </Link>
           </div>

           <div className='flex justify-between border-b-2 border-Grey mt-10'>
            <div className='flex pb-2 '>
            <CurrencyBtc size={24} />
              <p>Bitcoin</p>
            </div>
            <Link to='/cryptowithdrawal' className='pb-2'>
          <CaretRight size={28} />
          </Link>
           </div>
        </div>
        </div>
    </div>
  )
}

export default Withdrawal