import React from 'react'
import { ArrowLeft, Globe } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BANK_TXN = '/transactions'


const BankWithdraw = () => {
  const [ amount, Setamount ] = useState('');
  const [ bank_name, SetbankName ] = useState('');
  const [ account_name, SetacctName ] = useState('');
  const [ account_number, SetacctNum ] = useState('');
  const [ recipient_address, SetrecpAddress ] = useState('');
  const [ routing_number, SetroutNum ] = useState('');
  const [ errMsg, Seterrmsg ] = useState(false);
  const [ invalid, Setinvalid ] = useState(false);
  const [loading, setLoading] = useState(false); 

  const setMsg = () => {
    setTimeout(() =>{
      Seterrmsg("");
      Setinvalid("");
    },17000)
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);
    
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { amount, bank_name, account_name, account_number, recipient_address, routing_number } = formData;

    try{
      console.log(formData)
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(token);
      const response = await axios.post(BANK_TXN, JSON.stringify({ amount, bank_name, account_name, account_number, recipient_address, routing_number }),{
        headers:{
          Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        }
      });
      // console.log(response.data.data)
      const txId = response.data.data.id;
      localStorage.setItem("txId",txId )
      const bankAmount = response.data.data.amount;
      console.log(bankAmount)
      localStorage.setItem("bankAmount", bankAmount);
      if(response.data.status === 'success'){
        navigate('/wsn')
      }
      // const status = response.data.data
    }catch(err){
      console.log(err)
      const errMessage = err.response.data.message;
      Seterrmsg(true);
      Seterrmsg(errMessage)
      // if(err.message === 'Request failed with status code 400'){
      //   Seterrmsg(true);
       
      // }
      // if(err.message === 'Request failed with status code 422'){
      //   Setinvalid(true);
      // }
    }finally {
      setLoading(false); // Reset loading state regardless of success or failure
  }
  }
  return (
     <div className='px-10 md:px-20 bg-darkBlack h-auto md:h-screen lg:h-auto w-full'>
      <div className='pb-20'>
      <div className='pt-9 flex'>
        <Link to='/withdrawal'>
        <ArrowLeft size={32} className='text-white' />
        </Link>
        <div className='flex  mx-auto text-Green font-Encode'>
        <Globe className='text-[32px] md:text-[40px]' />
        <h3 className='text-[24px] md:text-[32px]'>Global Tradez</h3>
        </div>
        </div>
            <div className='items-center justify-center pt-20'>
            <form onSubmit={handleSubmit} action="#" className='block'>
            <p className='text-Red text-[14px] font-Encode text-center pb-3'>{errMsg}</p> : <p></p>
                    
            {/* {invalid ? <p className='text-Red text-[14px] font-Encode text-center pb-3'>Fill In Valid Details</p> : <p></p>} */}
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Amount</label>
                    <input type="number" placeholder='$' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' name='amount' value={amount} onChange={(e) => Setamount(e.target.value)} />
                    </div>

                   <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Bank Name</label>
                    <input type="text" placeholder='Enter Bank Name' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' autoComplete='off' name='bank_name' value={bank_name} onChange={(e) => SetbankName(e.target.value)} />
                    </div>

                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Account Name</label>
                    <input type="text" placeholder='Enter Account Name' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' autoComplete='off' name='account_name' value={account_name} onChange={(e) => SetacctName(e.target.value)} />
                    </div>

                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Account Number</label>
                    <input type="number" placeholder='Enter Account Number' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' name='account_number' value={account_number} onChange={(e) => SetacctNum(e.target.value)} />
                    </div>

                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Recipient Address</label>
                    <input type="text" placeholder='Enter Account Number' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' name='recipient_address' value={recipient_address} onChange={(e) => SetrecpAddress(e.target.value)} />
                    </div>

                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Routing Number/SWIFT code</label>
                    <input type="text" placeholder='Enter Routing Number' className='block w-[100%] md:w-[90%] h-[40px] border border-gray-500 p-3' name='routing_number' value={routing_number} onChange={(e) => SetroutNum(e.target.value)} /> 
                    </div>
                    <button onClick={setMsg} type='submit' className='bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[30%] text-center flex mx-auto  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>
                    {loading ? (
                                <div className="loader"> {/* Ensure this loader is styled in your CSS */} </div>
                            ) : (
                                "Transfer"
                            )}
                    </button>
                </form>
               
            </div>
      </div>
       
     </div>
  )
}

export default BankWithdraw;