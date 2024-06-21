import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../../../axios';


const userDetail = JSON.parse(localStorage.getItem("userDetails"));
let UserId = userDetail.id;
console.log(UserId);

const EDIT_USER = `/useracctbal/${UserId}`


const EditUser = () => {
    
    const onClick =  (e) =>{
        e.preventDefault();
    }
  return (
    <div className='bg-Green text-white rounded-md px-6 py-3 cursor-pointer'>Edit</div>
  )
}

export default EditUser