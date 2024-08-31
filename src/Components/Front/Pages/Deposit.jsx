import React from 'react'
import UserNavbar from '../UserNavbar'
import { CaretRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

const Methods = [
  {
    id:1,
    name: "Paypal",
    icon: <CaretRight size={32} />
  }, 
  {
    id:2,
    name: "Interac",
    icon: <CaretRight size={32} />
  },
  {
    id:3,
    name: "Zelle",
    icon: <CaretRight size={32} />
  },
  {
    id:3,
    name: "Cashapp",
    icon: <CaretRight size={32} />
  },
]

const Deposit = () => {
  return (
    <div>
      <UserNavbar />
      <div className='px-10 md:px-20 mt-10'>
        <div className='flex justify-between items-center text-center py-5 border-b-2'>
          <p>Bitcoin</p>
          <Link to='/bitcoin'>
          <CaretRight size={32} />
          </Link>
        </div>
        <div className='flex justify-between items-center text-center py-5 border-b-2'>
          <p>USDT<p className='text-[12px]'>TRC20</p></p>
          <Link to='/usdt'>
          <CaretRight size={32} />
          </Link>
        </div>
        <div>
          {
            Methods.map((item) => {
              return <div key ={item.id}>
                <div className='flex justify-between items-center text-center py-5 border-b-2'>
                  {item.name}
                  <Link to='/accounts'>
                  {item.icon}
                  </Link>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Deposit