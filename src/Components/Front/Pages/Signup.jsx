import React from 'react';
import { useState } from 'react';
import { Globe } from '@phosphor-icons/react/dist/ssr';
import { Link, useNavigate } from 'react-router-dom';
import Forminput from '../Forminput';
import axios from '../../../axios';


const SIGNUP_URL = '/register'

const  Signup = () => {
  const [values, Setvalues] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: ''
  });

  const [errors, setErrors] = useState({});

  // let[errmsg, Seterrmsg] = useState(false);

  const setMsg = () => {
    setTimeout(() =>{
        setErrors("")
    },15000);
};

  const navigate = useNavigate();
 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(values.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePassword(values.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one number, and one special character.';
    }

    if (values.password !== values.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } 
    const form = new FormData(e.target);
    const formValue = Object.fromEntries(form.entries());
    // let {first_name, last_name, username, email, password, country} = formValue;
    
    console.log(values);
    
    try{
        const response = await axios.post(SIGNUP_URL, JSON.stringify(values),{
          headers:{'Content-Type':'application/json'},
          withCredentials:true,
        });
        console.log(response);
        const Newuser = response.data.data;
        // console.log(Newuser);
        localStorage.setItem("Newuser",JSON.stringify(Newuser))
        // Setvalues("");
        if(response.data.status === 'success'){
            navigate('/welcome')
        }
        
    }
    catch(err){
      console.log(err)
        console.log(err.response.data.message)
        let errMessage = err.response.data.message
        // Seterrmsg(true);
        // Seterrmsg(errMessage)
    //  if(err.message === 'Request failed with status code 400'){
    //   Seterrmsg(true)
    //  }
    }
  } 

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    Setvalues({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  

  
//   let[values, Setvalues] = useState({
//     first_name: "",
//     last_name: "",
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     country: "",
//   });

//   const onChange = (e) =>{
//     Setvalues({...values,[e.target.name] : e.target.value })
    
// }

//   const inputs = [
//     {
//       id:1,
//       name: 'first_name',
//       type: 'text',
//       placeholder: 'Enter First Name',
//       label: 'First Name',
//     },
//     {
//       id:2,
//       name: 'last_name',
//       type: 'text',
//       placeholder: 'Enter Last Name',
//       label: 'Last Name',
//     },
//     {
//       id:3,
//       name: 'username',
//       type: 'text',
//       placeholder: 'Enter Username',
//       label: 'Username',
//       errorMessage: 'Username should be 3-16 letters and should not contain special characters',
//       pattern: '^[A-Za-z0-9]{3,16}$',
//       required: true
//     },
//     {
//       id:4,
//       name: 'email',
//       type: 'email',
//       placeholder: 'Kindly Enter Email',
//       label: 'Email',
//       errorMessage: 'Enter a valid email address',
//       pattern: '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ',
//       required: true
//     },
//     {
//       id:5,
//       name: 'password',
//       type: 'password',
//       placeholder: 'Enter Password',
//       label: 'Enter Password',
//       errorMessage: 'Password should be 8-12 characters and include at least 1 letter, 1 number and it should include a special character',
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]){8,20}$`,
//       required: true
//     }, 
//     {
//       id:6,
//       name: 'confirmPassword',
//       type: 'password',
//       placeholder: 'Confirm Password',
//       label: 'Confirm Password',
//       errorMessage: "Password don't match",
//       pattern: values.password,
//       required:true
//     },
//     {
//       id: 7,
//       name: 'country',
//       type: 'text', // Use 'select' for dropdown lists
//       label: 'Country',
//       required: true
//     }
//   ]

  

 
  return (
    <div className='px-5 py-10 md:px-20 bg-darkBlack h-auto w-[100%]'>
      <div className='wrapper bg-darkBlack'>
        <div className='flex pt-5'>
        <Globe  className='text-Green pt-1 text-[24px] md:text-[40px]' />
        <Link to='/' className='text-Green font-Encode text-[18px] md:text-[30px]'>Global Tradez</Link>
        </div>

        <div className='grid mx-auto mt-[50px] bg-white w-[100%] md:w-[70%] rounded-lg'>
          <h3 className='text-Green font-Encode font-semibold text-[25px] text-center pt-14'>Welcome, Investor</h3>
        {/* <p className='text-center text-[18px] text-Red mt-5'>{errmsg}</p> */}
        <form onSubmit={handleSubmit} className='px-2 mt-5'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First Name"
              value={values.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Last Name"
              value={values.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              id="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
              id="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'border-red-500' : ''}`}
              id="confirmPassword"
              type='password'
              value={values.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
              Country
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              value={values.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AUS">Australia</option>
              <option value="IND">India</option>
              <option value="NGA">Nigeria</option>
            <option value="DEU">Germany</option>
            <option value="FRA">France</option>
            <option value="BRA">Brazil</option>
            <option value="CHN">China</option>
            <option value="JPN">Japan</option>
            <option value="MEX">Mexico</option>
            <option value="ITA">Italy</option>
            <option value="ESP">Spain</option>
            <option value="RUS">Russia</option>
            <option value="ZAF">South Africa</option>
            <option value="KOR">South Korea</option>
            <option value="SAU">Saudi Arabia</option>
            <option value="ARG">Argentina</option>
            <option value="TUR">Turkey</option>
            <option value="EGY">Egypt</option>
            <option value="IDN">Indonesia</option>
            <option value="SGP">Singapore</option>
            <option value="SWE">Sweden</option>
            <option value="CHE">Switzerland</option>
            <option value="NLD">Netherlands</option>
            <option value="POL">Poland</option>
            <option value="NOR">Norway</option>
            <option value="DNK">Denmark</option>
            <option value="BEL">Belgium</option>
            <option value="PHL">Philippines</option>
            <option value="THA">Thailand</option>
            <option value="MYS">Malaysia</option>
            <option value="VNM">Vietnam</option>
            <option value="NZL">New Zealand</option>
            <option value="GRC">Greece</option>
            <option value="IRL">Ireland</option>
            <option value="ISR">Israel</option>
            <option value="PRT">Portugal</option>
            <option value="HUN">Hungary</option>
            <option value="FIN">Finland</option>
            <option value="AUT">Austria</option>
            <option value="CHL">Chile</option>
            <option value="ROU">Romania</option>
            <option value="COL">Colombia</option>
            <option value="ZWE">Zimbabwe</option>
            <option value="KAZ">Kazakhstan</option>
            <option value="PAK">Pakistan</option>
            <option value="BGD">Bangladesh</option>
            <option value="KEN">Kenya</option>
              {/* Add more countries as needed */}
            </select>
          </div>
           
            <button  type='submit' className='bg-darkBlack text-white py-3 px-12 mt-5 flex items-center justify-center mx-auto hover:bg-Green hover:text-darkBlack transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:block'>Submit</button>

          <p className='text-center text-[14px] py-8'>Already have an account ?<Link to='/login' className='text-Green pl-3'>Login</Link></p>
        </form>
        {/* <form onSubmit={handleSubmit} action="#" className='py-10 mx-10'> */}
          {/* {
            inputs.map( input => (
              <Forminput
                key={input.id} 
                {...input} 
                value={values[input.name]} 
                onChange={onChange} />
            ))
          }   */}

      {/* <div className='flex flex-col'>
          <label>Account Type</label> 
          <select className='border-2 border-darkBlack p-3'>
            <option>First Timer</option>
            <option>Pro Trader</option>
          </select> 
      </div> */}
          
        {/* </form> */}
        </div>
      </div>
      
    </div>
  )
}

export default Signup