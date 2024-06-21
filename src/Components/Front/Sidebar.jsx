import React from 'react';
import { X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Sidebar = ({toggle, isOpen}) => {
  return (
    <div style={{opacity: isOpen ? "100" : '0', top: isOpen ? '0' : '-100', display: isOpen ? 'block' : 'none' }} className='sticky'>
        <aside className='top-0 left-0 mx-auto text-center w-full h-[100vh] bg-darkBlack text-white'>

        <div className='px-20 pt-10'>
            <X onClick={toggle} size={45}/>
        </div>

        <ul className='mt-20 space-y-14 text-[24px] font-Encode'>
            <li>
                <Link className='hover:text-Green transition duration-700 ease-in-out' to='/'>Home</Link>
            </li>
            <li>
                <Link className='hover:text-Green transition duration-700 ease-in-out' to='/about'>About</Link>
            </li>
            <li>
                <Link className='hover:text-Green transition duration-700 ease-in-out' to='/services'>Services</Link>
            </li>
            <li>
                <Link className='hover:text-Green transition duration-700 ease-in-out pb-20' to='/pricing'>Plans</Link>
            </li>

            <div className='flex items-center justify-center gap-3 '>
            <li>
            <Link className='bg-Green px-3 py-3 rounded-md hover:bg-white hover:text-darkBlack transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' to='/signup'>Sign Up</Link>
            </li>

            <li>
            <Link className='bg-Green px-5 py-3 rounded-md hover:bg-white hover:text-darkBlack transition duration-700 ease-in-out transform hover:-translate-y-1 hover:scale-110 ' to='/login'>Login</Link>
            </li>
            </div>
            
        </ul>
        
        </aside>
    </div>
  )
}

export default Sidebar