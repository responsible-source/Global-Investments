import React from 'react'
import { Link } from 'react-router-dom'
import { CurrencyBtc, Check, Bank, CurrencyCircleDollar, Warehouse } from '@phosphor-icons/react/dist/ssr'

const Pricing = () => {
  return (
    <div className='container mt-12 px-10 md:px-20 mb-12'>
    <h3 className='text-center text-Green text-[40px] font-Encode'>Investment Plans</h3>
        <div className='card-wrapper mt-9 grid md:grid-cols-3 '>
            <div className='card flex flex-col  items-center justify-center mx-auto border-4 border-Green rounded-lg mt-5 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
            <CurrencyBtc size={45} className='bg-Green text-white rounded-lg mt-3' />
            <h3 className='py-2 text-Green font-Encode text-[30px] text-center'>Investment Newbie</h3>
            <h4 className='font-Encode py-3'><span className='text-[20px]'>5%</span> <span className='text-[12px]'>for</span> <span className='text-[28px]'>2 days</span></h4>
            <div className='packages'>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Minimum investment: $100</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Maximum investment: $1000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Principles: Non-Included</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Referral Bonus: 2% </p>
            </div>
            </div>
            
            <Link className='bg-Green py-2 px-6 rounded-lg pb-2 mx-auto mb-3 hover:bg-darkBlack hover:text-Green '>Buy Plan</Link>
            </div>

            <div className='card flex flex-col items-center justify-center mx-auto border-4 border-Green rounded-lg mt-5 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
            <Bank size={45} className='bg-Green text-white rounded-lg mt-3' />
            <h3 className='py-2 text-Green font-Encode text-[30px] text-center'>Pro Passive Builder</h3>
            <h4 className='font-Encode py-3'><span className='text-[20px]'>10%</span> <span className='text-[12px]'>for</span> <span className='text-[28px]'>10 days</span></h4>
            <div className='packages'>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Minimum investment: $300</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Maximum investment: $5000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Principles: Included</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Referral Bonus: 2% </p>
            </div>
            </div>
            
            <Link className='bg-Green py-2 px-6 rounded-lg pb-2 mx-auto mb-3  hover:bg-darkBlack hover:text-Green'>Buy Plan</Link>
            </div>

            <div className='card flex flex-col items-center justify-center mx-auto border-4 border-Green rounded-lg mt-5 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <Warehouse size={45} className='bg-Green text-white rounded-lg mt-3' />
            <h3 className='py-2 text-Green font-Encode text-[30px] text-center'>Mortgage Coverage</h3>
            <h4 className='font-Encode py-3'><span className='text-[20px]'>20%</span> <span className='text-[12px]'>for</span> <span className='text-[28px]'>30 days</span></h4>
            <div className='packages'>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Minimum investment: $1000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Maximum investment: $10,000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Principles: Included</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Referral Bonus: 2% </p>
            </div>
            </div>
            
            <Link className='bg-Green py-2 px-6 rounded-lg pb-2 mx-auto mb-3  hover:bg-darkBlack hover:text-Green'>Buy Plan</Link>
            </div>

            <div className='card flex flex-col items-center justify-center mx-auto border-4 border-Green rounded-lg mt-5 px-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <CurrencyCircleDollar size={45} className='bg-Green text-white rounded-lg mt-3' />
            <h3 className='py-2 text-Green font-Encode text-[30px] text-center'>WealthBuilder Plus</h3>
            <h4 className='font-Encode py-3'><span className='text-[20px]'>50%</span> <span className='text-[12px]'>every</span> <span className='text-[28px]'>30days</span></h4>
            <div className='packages'>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Minimum investment: $10,000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Maximum investment: $100,000</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Principles: Included</p>
            </div>
            <div className='flex gap-2 pb-3'>
            <Check size={15} />
            <p className='text-[12px]'>Referral Bonus: 2% </p>
            </div>
            </div>
            
            <Link className='bg-Green py-2 px-6 rounded-lg pb-2 mx-auto mb-3  hover:bg-darkBlack hover:text-Green'>Buy Plan</Link>
            </div>


        </div>
    </div>
  )
}

export default Pricing