import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../axios';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';
import { Bank, CurrencyBtc,FolderOpen } from '@phosphor-icons/react';

const userDetail = JSON.parse(localStorage.getItem("userDetails"));
// let UserId = userDetail.id;


const USER_TXN = `/mytransactions`

const History = () => {
    const [ Details, Setdetails ] = useState([]);

    useEffect(() =>{
        const handleSubmit = async () =>{
           try{
            const token = JSON.parse( localStorage.getItem("token"));
            const response = await axios.get(USER_TXN,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type':'application/json'
                }
            })
            console.log(response)
            const userDetails = response.data.data;
           console.log(userDetails);
           Setdetails(userDetails);
          
           }catch(err){
            console.log(err)
           }
        }
        handleSubmit()
    },[])
   
  return (
    <div>
        <UserNavbar />
        <h3 className='px-10 text-[18px] font-Encode font-semibold my-5'>Withdrawal History</h3>
        <div className='mt-5 px-2 md:px-20'>
        {Details.length === 0 ? (
                    <div className='flex flex-col pt-5'>
                        <p className='text-center text-[13px] text-gray-500'>No Record Found</p>
                        <div className='max-w-sm h-80 object-contain mx-auto'>
                        <FolderOpen className='text-[40px] md:text-[80px] text-gray-500' />
                        </div>
                    </div>
                ) : (
            Details.map((user) =>(
                <div className=''>
                    <div key={user.id} className='h-[120px] md:h-[180px] w-[100%] border-solid border-2 rounded-md border-darkBlack mb-2'>
                        <div className='flex justify-between items-center gap-10 px-3 py-4 md:py-5 w-[auto] h-[100%]'>
                            <div className='flex-col'>
                                <div>{user.transaction_type ? <div className='flex gap-0'><p><CurrencyBtc className='text-[16px] md:text-[20px]'/></p><p className='text-darkBlack font-semibold text-[12px] md:text-[16px]'>Crypto Withdrawal</p></div> : <div className='flex gap-0'><p><Bank className='text-[16px] md:text-[20px]' /></p> <p className='text-darkBlack text-[12px] md:text-[16px] font-semibold'>Bank Withdrawal</p> </div>}
                                </div>
                                <div className='flex gap-1 py-2'>
                                    <p className='text-darkBlack text-[12px] md:text-[16px]' >WSN:</p>
                                    <p className='text-darkBlack text-[12px] md:text-[16px]'>{user.token}</p>
                                </div>
                                <p className='text-darkBlack text-[12px] md:text-[16px]'>{user.date_initiated}</p>
                            </div>
                            <div className='flex-col h-[100%]'>
                                <p className='text-[14px] md:text-[20px]'>-${user.amount}</p>
                                <div className=' py-1 md:py-3'>
                                {user.status === 0 && <p className='text-yellow-400 pl-2 text-[12px] md:text-[16px]'>Pending</p>}

                                {user.status === 1 && <p className='text-Green pl-2 text-[12px] md:text-[16px]'>Approved</p>} 

                                {user.status === 2 && <p className='text-Red pl-2 text-[12px] md:text-[16px]'>Failed</p>}
                                </div>
                                <Link to='/wsn' className='cursor bg-darkBlack text-white rounded-md px-3 py-2 mt-1 text-[12px] md:text-[16px]'>Resolve</Link>
                            </div>
                        </div>
                </div>
                </div>
                
                
            )))}
        </div>
    </div>
  )
}

export default History