import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import AdminNavbar from '../AdminNavbar';
let USER_URL = '/users'
let AMOUNT = '/useracctbal'




const Admindashboard = () => {
  const [userData, Setuserdata] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ amount, Setamount ] = useState('');
  const [ id, Setid ] = useState('');

  useEffect( () => {
      const handleUsers = async () =>{
       try{
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(USER_URL,{
          headers:{
            Authorization: `Bearer ${token}`,
          }
        })
        const userDetails = response.data.data;
        // console.log(userDetails);
        Setuserdata(userDetails);
        
       }catch(err){
        console.log(err)
       }
      };

      handleUsers();
  },[])

  const handleActionClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleAmount = async(e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { id, amount } = formData;
    try{
      console.log(formData)
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(AMOUNT, JSON.stringify({id, amount}),{
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      Setamount("");
      Setid("")
    }catch(err){
      console.log(err)
    }
  } 

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  

  return (
   <div>
    <div className='my-3'>
    <AdminNavbar />
    </div>
     <table className='w-full border-collapse border border-gray-300'>
      <thead className='font-Encode text-[10px] md:text-[14px] bg-gray-100'>
        <tr>
        <th className="border border-gray-300 py-2 px-4">S/N</th>
        <th className="border border-gray-300 py-2 px-4">Full Name</th>
          <th className="border border-gray-300 py-2 px-4">Email</th>
          <th className="border border-gray-300 py-2 px-4">Country</th>
          <th className="border border-gray-300 py-2 px-4">Account Balance</th>
          <th className="border border-gray-300 py-2 px-4">Bank Withdrawal Amount</th>
          <th className="border border-gray-300 py-2 px-4">Bank Name</th>
          <th className="border border-gray-300 py-2 px-4">Account Name</th>
          <th className="border border-gray-300 py-2 px-4">Account Number</th>
          <th className="border border-gray-300 py-2 px-4">Recipient Address</th>
          <th className="border border-gray-300 py-2 px-4">Routing Number/SWIFT Code</th>
          <th className="border border-gray-300 py-2 px-4">Coin Withdrawal Amoutn</th>
          <th className="border border-gray-300 py-2 px-4">Wallet Address</th>
          <th className="border border-gray-300 py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user,index) =>(
          <tr key={user.id}>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{index + 1}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{`${user.first_name} ${user.last_name}`}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.email}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.country}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.account_balance}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.bank_wthd_amount}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.bank_name}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.account_name}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.account_number}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.recipient_address}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.routing_number}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.bit_wthd_amount}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]">{user.wallet_address}</td>
            <td className="border border-gray-300 py-2 px-4 text-[12px]"><button onClick={() => handleActionClick(user)} className='bg-Green text-white rounded-md px-6 py-3 cursor-pointer'>Action</button></td>
          </tr>
        ))}
      </tbody>
    </table>

{isModalOpen && (
        <div className="fixed z-10 inset-0 flex items-start justify-center p-4">
          <div className="bg-gray-500 bg-opacity-75 transition-opacity fixed inset-0"></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md w-full">
            <div className="bg-white p-6">
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Information
              </h3>
              <div className="mt-2">
                <form className='flex-col' onSubmit={handleAmount} action="#">
                <p className="text-sm text-gray-500 text-[24px]">{selectedUser.id}</p>
               <div >
               <input type='number' name='id' value={id} placeholder='User Id' className='w-100% ml-2 pl-2 border-2 border-darkBlack rounded-md' onChange={(e) => Setid(e.target.value)} />
               </div>

               <div className='my-2'>
               <input type='number' name='amount' value={amount} placeholder='New Amount' className='w-100% ml-2 pl-2 border-2 border-darkBlack rounded-md' onChange={(e) => Setamount(e.target.value)} />
               </div>

                <button type='submit' className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mt-4 bg-Green text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'>Update</button>
                </form>
               
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-Green text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
   </div>
  )
}

export default Admindashboard