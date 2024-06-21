import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../../axios';
import AdminNavbar from '../AdminNavbar';
import EditUser from './EditUser';

const TX_DETAILS = '/transactions'

const UserTxs = () => {
    const [ Data, Setdata ] = useState([]);

    useEffect( () =>{
       const handleUsers = async () =>{
        try{
            const token = JSON.parse(localStorage.getItem("token"));
            const response = await axios.get(TX_DETAILS,{
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const TxDetails = response.data.data;
            console.log(TxDetails);
            Setdata(TxDetails);
        }catch(err){
            console.log(err.message)
        }
       }
       handleUsers();
    },[])
  return (
    <div>
    <div className='my-3'>
    <AdminNavbar />
    </div>
     <table className='w-full border-collapse border border-gray-300'>
      <thead className='font-Encode text-[10px] md:text-[14px] bg-gray-100'>
        <tr>
        <th className="border border-gray-300 py-2 px-4">S/N</th>
        <th className="border border-gray-300 py-2 px-4">UserName</th>
        <th className="border border-gray-300 py-2 px-4">Transaction Type</th>
          <th className="border border-gray-300 py-2 px-4">Amount</th>
          <th className="border border-gray-300 py-2 px-4">Date Initiated</th>
          <th className="border border-gray-300 py-2 px-4">Date Approved</th>
          <th className="border border-gray-300 py-2 px-4">Bank Name</th>
          <th className="border border-gray-300 py-2 px-4">Account Name</th>
          <th className="border border-gray-300 py-2 px-4">Account Number</th>
          <th className="border border-gray-300 py-2 px-4">Routing Number/SWIFT Code</th>
          <th className="border border-gray-300 py-2 px-4">Token</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((data,index) =>(
          <tr key={data.id}>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{index + 1}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{`${data.username}`}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.transaction_type}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.amount}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.date_initiated}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.date_approved}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.bank_name}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.account_name}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.account_number}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.routing_number}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{data.token}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]"><EditUser /></td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  )
}

export default UserTxs