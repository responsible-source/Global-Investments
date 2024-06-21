import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import axios from '../../../axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const VALIDATE = '/tokenValid'

const Wsn = () => {
  const [ token , Settoken ] = useState();
  const [ invalid, Setinvalid ] = useState(false);

  // const setMsg = () => {
  //   setTimeout(() =>{
  //     SeterrMsg("");
  //     Setinvalid("")
  //   }, 17000)
  // }

    
  const navigate = useNavigate();
  const id  = JSON.parse( localStorage.getItem("txId"));

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { id, token } = formData;
    
    try{
      console.log(formData)
        const aToken = JSON.parse( localStorage.getItem("token"));
        // const loggedUser = localStorage.getItem("userDetails");
        // console.log(token);
        // console.log(formData);
        const response = await axios.post( VALIDATE, JSON.stringify({ id, token }),{
          headers: {
              // Accept: 'application/json',
              Authorization: `Bearer ${aToken}`,
              'Content-Type': 'application/json',
          }
      });
        // const status = response.data.data;
        // console.log(status);
        console.log(response)
        // const txId = response.data.data.id;
        // localStorage.setItem("txId",txId )
        if(response.data.status === 'success'){
          navigate('/congratulations')
        }
    }catch(err){
      console.log(err)
      console.log(err.response.data.message)
      let errMessage = err.response.data.message;
      Setinvalid(true);
      Setinvalid(errMessage);
      
     
      // if(err.message === 'Request failed with status code 400'){
      //   Setinvalid(true);
      // } 
      // if(err.message === 'Request failed with status code 422'){
      //   Setinvalid(true);
      // }
    }
  }
  return (
    <div className='wrapper bg-darkBlack h-[950px] md:h-[600px]'>
        <div className='px-10 md:px-20 pt-10'>
        <div>
            <Link to='/withdrawal'>
            <ArrowLeft size={32} className='text-white' />
            </Link>
        </div>
            <h3 className='text-center mt-[100px] text-Green text-[24px] font-Encode pb-16'>Withdrawal Security Number</h3>


            <form onSubmit={handleSubmit} action="#" className='block'>
              {/* {errMsg ? <p className='text-Red text-[14px] font-Encode text-center pb-3'>Available Balance Not Sufficient</p> : <p></p>} */}
                    
              {invalid ? <p className='text-Red text-[14px] font-Encode text-center pb-3'>{invalid}</p> : <p></p>}
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'></label>
                    <input type="number" name='id' value={id} placeholder='Transaction Id' className='block p-3 w-[30%] md:w-[10%] h-[40px] border border-gray-500'  />
                    </div>
                    <div className='pb-5'>
                    <label htmlFor="#" className='font-Encode text-white'>Wthdrawal Security number</label>
                    <input type="text" name='token' value={token} onChange={(e) => Settoken(e.target.value)} placeholder='Enter Wallet Address Carefully' className='block p-3 w-[100%] md:w-[90%] h-[40px] border border-gray-500' autoComplete='off' />
                    </div>

                    <div className='flex gap-10'>
                    <Link to='/history' className='bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[50%] text-center  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Get WSN</Link>

                    <button type='submit' className='bg-Green text-darkBlack font-Encode mt-5 p-3 rounded-md w-[50%] text-center  hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Send Amount</button>
                    </div>
                </form>
               

            {/* <form onClick={handleSubmit} action='#'>
            <div>
                <input type="number" placeholder='Transaction Id'  className='w-[100%] h-[50px] border border-gray-500 p-4' name='id' value={id} readOnly />
            </div>

            <div>
                <input type="number" placeholder='Enter WSN Carefully'  className='w-[100%] h-[50px] border border-gray-500 p-4' onChange={(e) => Settoken(e.target.value)} name='token' value={token} />
            </div>

            <button type='submit' className='flex justify-center items-center mx-auto mt-5 rounded-md w-[50%] bg-Green text-white px-6 py-3'>Withdraw</button>
            </form> */}
            
        </div>
    </div>
  )
}

export default Wsn