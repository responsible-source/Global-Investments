import React from 'react'
import { ArrowLeft, Globe } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../axios';
import { useState } from 'react';


const NEW_TXN = '/transactions'



const CryptoWithdrawal = () => {
  const [ amount, Setamount ] = useState('');
  const [ wallet_address, Setaddress ] = useState('');
  const [ errMsg, SeterrMsg ] = useState(false);
  const [ invalid, Setinvalid ] = useState(false);
  const [loading, setLoading] = useState(false); 

  const navigate = useNavigate()

  const setMsg = () => {
    setTimeout(() =>{
      SeterrMsg("");
      Setinvalid("")
    }, 17000)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true); 
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { amount, wallet_address } = formData;
    try{
        const token = JSON.parse( localStorage.getItem("token"));
        // const loggedUser = localStorage.getItem("userDetails");
        // console.log(token);
        // console.log(formData);
        const response = await axios.post( NEW_TXN, JSON.stringify({ amount, wallet_address }),{
          headers: {
              // Accept: 'application/json',
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
          }
      });
        // const status = response.data.data;
        // console.log(status);
        console.log(response.data.data);
        const cryptoAmount = response.data.data.amount;
        localStorage.setItem("cryptoAmount", cryptoAmount)
        const txId = response.data.data.id;
        localStorage.setItem("txId",txId )
        if(response.data.status === 'success'){
          navigate('/wsn')
        }
    }catch(err){
      console.log(err);
      const errMessage = err.response.data.message;
      SeterrMsg(true);
      SeterrMsg(errMessage);
      // if(err.message === 'Request failed with status code 400'){
      //   SeterrMsg(true);
      // } 
      // if(err.message === 'Request failed with status code 422'){
      //   Setinvalid(true);
      // }
    }finally {
      setLoading(false); // Reset loading state regardless of success or failure
  }
  
  }
  
  return (
     <div className='px-5 md:px-20 bg-darkBlack h-[950px] md:h-screen lg:h-[600px] w-full'>
        <div className='pt-9 flex'>
        <Link to='/withdrawal'>
        <ArrowLeft size={32} className='text-white' />
        </Link>
        <div className='flex  mx-auto text-Green font-Encode'>
        <Globe className='text-[32px] md:text-[40px]' />
        <h3 className='text-[24px] md:text-[32px]'>Global Tradez</h3>
        </div>
        </div>
            <div className='items-center justify-center pt-32'>
            <form onSubmit={handleSubmit} action="#" className='block'>
              <p className='text-Red text-[14px] font-Encode text-center pb-3'>{errMsg}</p> : <p></p>
                    
              {/* {invalid ? <p className='text-Red text-[14px] font-Encode text-center pb-3'>Fill In Valid Details</p> : <p></p>} */}
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Amount</label>
                    <input type="number" name='amount' value={amount} onChange={(e) => Setamount(e.target.value)} placeholder='$' className='block p-3 w-[30%] md:w-[10%] h-[40px] border border-gray-500'  />
                    </div>
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Wallet Address</label>
                    <input type="text" name='wallet_address' value={wallet_address} onChange={(e) => Setaddress(e.target.value)} placeholder='Enter Wallet Address Carefully' className='block p-3 w-[100%] md:w-[90%] h-[40px] border border-gray-500' autoComplete='off' />
                    </div>

                    <button onClick={setMsg()} type='submit' className='bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[50%] text-center  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>
                    {loading ? (
                                <div className="loader"> {/* Ensure this loader is styled in your CSS */} </div>
                            ) : (
                                "Transfer"
                            )}
                    </button>
                </form>
               
            </div>
     </div>
  )
}

export default CryptoWithdrawal