import React from 'react'
import UserNavbar from '../UserNavbar'
import { AlignBottom, Certificate, CurrencyCircleDollar, Percent, } from '@phosphor-icons/react'
import FinlogixWidget from '../FinlogixWidget'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../../axios'


let User_Profile = '/userprofile'

const UserDashboard = () => {
  let data = JSON.parse(localStorage.getItem('userDetails'));
  // console.log(data)
  let accountType = data.account_type
  const token = JSON.parse(localStorage.getItem("token"));
  let [money, Setmoney] = useState("0")

  useEffect(() => {
    const getDetails = async () =>{
      try{
        const response = await axios.get(User_Profile,{
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":"application/json"
          }
        })
        console.log(response)
        let balance = response.data.data.account_balance
        console.log(balance)
        Setmoney(balance)
      }
      catch(err){
      console.log(err)
      }
    }
    getDetails()
  }, [])
    return (
      <>
          <UserNavbar  />
          <div className='bg-darkBlack h-auto md:h-screen lg:h-[800px] w-[100%]'>
            <div className='px-10 md:px-20 w-[100%] '>
            <h3 className='pt-5 text-[24px] font-Encode text-white'>Welcome, Investor {`${data.username}`}</h3>
            <div className='flex gap-2 bg-Green rounded-md w-[250px] p-2 mt-2'>
            <AlignBottom size={24} />
            <h2 className='text-darkBlack font-Encode text-[18px]'>Investment Center</h2>
            </div>
  
            <div className='flex bg-Grey rounded-md gap-4 text-darkBlack w-[250px] md:w-[350px] p-2 mt-3'>
            <Certificate size={40}/>
            <div className='flex flex-col'>
            {
              accountType ? (<h3 className='text-[18px] md-[text-20px]'>level 2 account</h3>):(<h3 className='text-[18px] md-[text-20px]'>level 1 account</h3>)
               
            }
            <p  className='text-[12px] md-[text-16px]'>Carry out Transactions To Upgrade Your Account And To Enjoy Investment Benefits</p>
            </div>
            </div>
  
  
            <div className='flex flex-col md:flex-row mt-20 w-[100%] gap-8'>
              <div className='bg-gray-300 rounded-md w-[100%] md:w-[45%] '>
                <div className='flex bg-Green rounded-md text-darkBlack px-2 py-3'>
                <CurrencyCircleDollar className='text-[32px]' />
                <p className=' text-[20px] md:text-[20px]'>Available Balance</p>
                </div>
                <div className='py-5'>
                <p className='text-[18px] font-Encode font-semibold pl-5'>$ {`${money}`}</p>
                </div>
              </div>
  
              <div className='bg-gray-300 rounded-md w-[100%] md:w-[45%] '>
                <div className='flex bg-darkBlack rounded-md text-Green px-2 py-3'>
                <Percent size={32} />
                <p className='text-[20px]'>Account Status</p>
                </div>
                <div className='py-5'>
                {
                    accountType ? (<h3 className='text-cemter pl-5 font-semibold font-Encode text-[18px] md-[text-20px]'>Verified</h3>):(<h3 className='text-cemter pl-5 font-semibold font-Encode text-[18px] md-[text-20px]'>Not Verified</h3>)
               
                }
                </div>
              </div>
            </div>
            {/* <FinlogixTape /> */}
            <FinlogixWidget />
            </div>
          </div>
          
  
      </>
    )
  
}

export default UserDashboard