import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';


const LOGOUT_URL ='/logout'

const Logout = () => {
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
    <div>
        <button onClick={handleLogout} className='flex items-center justify-center mx-auto text-center px-14 py-3 bg-Green rounded-md text-white mt-0 p-3 w-[50%] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110  md:block' >Logout</button>
    </div>
  )
}

export default Logout