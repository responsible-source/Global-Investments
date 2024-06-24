import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../axios';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';
import { Bank, CurrencyBtc } from '@phosphor-icons/react';


const userDetail = JSON.parse(localStorage.getItem("userDetails"));
// let UserId = userDetail.id;


const USER_TXN = `/transactions/{id}`

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
            {Details.map((user) =>(
                <div key={user.id} className='border-solid border-2 rounded-md border-darkBlack mb-2'>
                        <div className='flex justify-between gap-10 px-3 py-5'>
                            <div className='flex-col'>
                                <div>{user.transaction_type ? <div className='flex gap-0'><p><CurrencyBtc size={24}/></p><p className='text-darkBlack font-semibold text-[16px]'>Crypto Withdrawal</p></div> : <div className='flex gap-0'><p><Bank size={24} /></p> <p className='text-darkBlack text-[16px] font-semibold'>Bank Withdrawal</p> </div>}
                                </div>
                                <div className='flex gap-1 py-2'>
                                    <p>WSN:</p>
                                    <p>{user.token}</p>
                                </div>
                                <p>{user.date_initiated}</p>
                            </div>
                            <div className='flex-col'>
                                <p className='text-[20px]'>-${user.amount}</p>
                                <div className='py-3'>
                                {user.status === 0 && <p className='text-yellow-400 pl-2 text-[16px]'>Pending</p>}

                                {user.status === 1 && <p className='text-Green pl-2 text-[16px]'>Approved</p>} 

                                {user.status === 2 && <p className='text-Red pl-2 text-[16px]'>Failed</p>}
                                </div>
                                <Link to='/wsn' className='cursor bg-darkBlack text-white rounded-md px-3 py-2 mt-5'>Resolve</Link>
                            </div>
                        </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default History