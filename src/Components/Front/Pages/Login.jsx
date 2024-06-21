import React, { useState, useEffect, useRef } from 'react';
// import 'react-toastify/dist/ReactToastify.css';
import { Globe } from '@phosphor-icons/react/dist/ssr'
import { Link, useNavigate } from 'react-router-dom'
import { Envelope, Lock } from '@phosphor-icons/react/dist/ssr'
// import { useState,useRef } from 'react'
import { login } from '../../../apis'
import UserDashboard from './UserDashboard';
// import { AuthContext } from '../../../contexts/AuthProvider';
// import { useContext } from 'react';
import axios from '../../../axios';



const LOGIN_URL = '/login'



const Login = () => {
    // const {Setauth} = useContext(AuthContext)
    let navigate = useNavigate();
    const userRef = useRef()
    const[email, Setemail] = useState('');
    const[password, Setpassword] = useState('');
    // let [loading, setLoading] = useState(false);
    // let [successful, Setsucessful] = useState(false);
    let [successfully, Setsucessful] = useState(false);
    let [errmsg, Seterrmsg] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const setMsg = () => {
        setTimeout(() =>{
            Seterrmsg("")
        },13000);
    };
 
 const handleSubmit = async (e)=>{
    e.preventDefault();
    // Setsucessful(true);
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    let { email, password } = formData;

    try{
        const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }),{
            headers:{"Content-Type": "application/json"},
            withCredentials:true
        });
        // console.log(response.data[2])
        const user = response.data.data;
        // console.log(user);
        const role = user.role;
        console.log(role)
        const token = user.token;
        // console.log(token);
        localStorage.setItem("userDetails", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(token));
        if(role === 0){
            navigate("/admindashboard")
        }else{
            navigate("/userdashboard");
        }
        
        // await localStorage.setItem("token", user.token);
        // localStorage.setItem("userDetails", user)
        // const accessToken = response.data.data.token;
        // const roles = response.data.data.role;
        // Setauth({email, password, roles, accessToken});
        
        
        
    }catch(err){
        if(err.message === "Request failed with status code 401"){
            Seterrmsg(true);
            Setemail("");
            Setpassword("");
            
        }
        else if(err.message === "Request failed with status code 422"){
        Seterrmsg(true)
        }
        else{
            console.log(err.message);
        }
        
        // if(!err.response){
        //     console.log("Welcome")
        // }else if(err.response.status === 400){
        //     console.log("Missing Username or Password")
        // }else if(err.response.status === 401){
        //     console.log("UnAuthorized")
        // }else{
        //     console.log("Login Failed")
        // }
    };
    
}

  return (
    <div>
            <div className='w-[100%] bg-darkBlack h-screen md:h-auto md:pb-5 '>
            <div className='wrapper  px-10 md:px-20'>
            <div className='flex pt-5'>
            <Globe size={40} className='text-Green pt-1' />
            <Link to='/' className='text-Green font-Encode text-[30px]'>Global Tradez</Link>
            </div>
        
            <form onSubmit={handleSubmit} className='flex flex-col mx-auto bg-white rounded-md w-[100%] md:w-[50%] mt-20 '>
                <h3 className='text-center text-Green text-[25px ] font-Encode font-bold pt-5'>Welcome back, Investor</h3>
                {errmsg ?  <p className='text-Red font-Encode text-[18px] text-center mt-5'>Incorrect Email or Password</p> :<p></p>}
                <div className='relative px-5 mt-10'>
                    <label className='block text-[18px] font-Encode'>Email</label>
                    < input className='border-2 border-darkBlack w-[100%] p-3 rounded-md font-Encode pl-14' type="email" value={email} ref={userRef} name='email' placeholder='Kindly Enter Email' onChange={(e) => Setemail(() => e.target.value)} autoComplete='on'  />
                    <Envelope className='absolute inset-1 top-[40px] left-[30px]' size={25} />
                </div>
        
                <div className='relative px-5 mt-5'>
                    <label className='block text-[18px] font-Encode'>Password</label>
                    <input  className='border-2 border-darkBlack w-[100%] p-3 rounded-md font-Encode pl-14' type="password" value={password} name='password' placeholder='Kindly Enter Password' onChange={(e) => Setpassword(e.target.value)}  />
                    <Lock className='absolute inset-1 top-[40px] left-[30px]' size={25} />
                </div>
        
                <div className='pb-5'>
                    <button onClick={setMsg()}  type='submit' className='flex items-center justify-center mx-auto text-center bg-darkBlack rounded-md text-white mt-6 p-3 w-[50%] hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Login</button>
                </div>
        
                <button className='text-center py-5'>Don't have an account ? <Link className='text-Green' to='/signup'>Sign up</Link></button>
        
            </form>
            </div>
            </div>
    
</div>
  )
}

export default Login;






