import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../../Animations/congratulations.json';
import { useNavigate } from 'react-router-dom';
import axios from '../../../axios';



const LOGOUT_URL ='/logout'

const Congratulations = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
       try{
        
        const token = JSON.parse(localStorage.getItem("token"));
        // console.log(token)

        if(!token){
            throw new Error('no token found')
        }
        // console.log(token);

        const response = await axios.post( LOGOUT_URL, {}, {
            headers: {
                // Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                // 'Content-Type': 'application/json',
               
            }
        });
        // console.log(response.data.message)
        localStorage.removeItem("token");
        navigate("/login");
        // console.log(response.data.data);
        // localStorage.removeItem("token");
        // if(localStorage.getItem("token") === null){
        //     navigate("/login");
        // } 
       }catch(err){
        console.log(err)
       }
    }
  return (
    <div className='wrapper px-1 md:px-20'>
        <div className='flex flex-col pt-20'>
            <h3 className='text-center text-[32px] font-Encode'>Congratulations</h3>
            <div>
                <Lottie animationData={animationData} loop={true} />
            </div>
            <div className='flex flex-col px-5 md:px-10 font-Encode text-[20px] text-center'>
                <p className='pt-2'>Your Withdrawal Request is being processed, dispensing might take up to 2hrs</p>
            </div>
            <div className='pb-5'>
                <button onClick={handleLogout} className='flex items-center justify-center mx-auto text-center bg-darkBlack rounded-md text-white mt-6 p-3 w-[20%] hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block'>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Congratulations