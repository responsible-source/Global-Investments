import React from 'react'
import { useState } from 'react'
import { Globe } from '@phosphor-icons/react/dist/ssr'
import { Link } from 'react-router-dom'
import Forminput from '../Forminput'
import { signUp } from '../../../apis'
import axios from 'axios'


const  Signup = () => {

  const handleSubmit = async (e) =>{
    try{
      e.preventDefault();
      const res = await signUp({...values});
      console.log(res);
      if(res.status === "error"){
         throw new Error("error")
      }
    }
    catch(e){

    }
  } 

  
  const[values, Setvalues] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const inputs = [
    {
      id:1,
      name: 'fullname',
      type: 'text',
      placeholder: 'Enter Full Name',
      label: 'Full Name',
    },
    {
      id:2,
      name: 'username',
      type: 'text',
      placeholder: 'Enter Username',
      label: 'Username',
      errorMessage: 'Username should be 3-16 letters and should not contain special characters',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id:3,
      name: 'email',
      type: 'email',
      placeholder: 'Kindly Enter Email',
      label: 'Email',
      errorMessage: 'Enter a valid email address',
      pattern: '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ',
      required: true
    },
    {
      id:4,
      name: 'password',
      type: 'password',
      placeholder: 'Enter Password',
      label: 'Enter Password',
      errorMessage: 'Password should be 8-12 characters and include at least 1 letter, 1 number and it should include a special character',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]){8,20}$`,
      required: true
    }, 
    {
      id:5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: "Password don't match",
      pattern: values.password,
      required:true
    },
    {
      id: 6,
      name: 'country',
      type: 'text', // Use 'select' for dropdown lists
      label: 'Country',
      required: true
    }
  ]

  const onChange = (e) =>{
      Setvalues({...values,[e.target.name] : e.target.value })
      console.log(values)
  }

 
  return (
    <div className='px-10 md:px-20 bg-darkBlack h-[1200px] w-[100%]'>
      <div className='wrapper bg-darkBlack'>
        <div className='flex pt-5'>
        <Globe size={40} className='text-Green pt-1' />
        <Link to='/' className='text-Green font-Encode text-[30px]'>Global Tradez</Link>
        </div>

        <div className='grid mx-auto mt-[50px] bg-white w-[100%] md:w-[70%] rounded-lg'>
          <h3 className='text-Green font-Encode font-semibold text-[25px] text-center pt-14'>Welcome, Investor</h3>
        <form onSubmit={handleSubmit} action="#" className='py-10 mx-10'>
          {
            inputs.map( input => (
              <Forminput
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={onChange} />
            ))
          }  

      {/* <div className='flex flex-col'>
          <label>Account Type</label> 
          <select className='border-2 border-darkBlack p-3'>
            <option>First Timer</option>
            <option>Pro Trader</option>
          </select> 
      </div> */}
          <button className='bg-darkBlack text-white py-3 px-12 mt-5 flex items-center justify-center mx-auto hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:block'>Submit</button>

          <p className='text-center text-[14px] pt-8'>Already have an account ?<Link to='/login' className='text-Green pl-3'>Login</Link></p>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signup