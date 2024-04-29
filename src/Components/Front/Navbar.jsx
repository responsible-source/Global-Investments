import React from 'react'
import { List,Globe} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({toggle}) => {
  
  return (

    <nav className=' bg-darkBlack flex items-center justify-between text-white md:px-20 px-10 p-5'>
      <Link className='text-2xl font-Encode flex'><Globe size={28}/>Global Tradez</Link>
      <button className='nav-btn'>
          <List onClick={toggle} size={32}/>
        </button> 
      <ul className='list flex space-x-6 md:text-[18px] font-Encode'>
        <li>
          <Link to='/' className='hover:text-Green' >Home</Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-Green' >About</Link>
        </li>
        <li>
          <Link to='/services' className='hover:text-Green' >Services</Link>
        </li>
        <li>
          <Link to='/pricing' className='hover:text-Green' >Pricing</Link>
        </li>
      </ul>
      <Link to='/signup' className='bg-Green text-darkBlack px-6 py-2 rounded-md font-Encode transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hidden md:block'>Get Started</Link>
      
    </nav>
  )
}

export default Navbar