import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { List, X, Globe } from '@phosphor-icons/react'
import { useEffect } from 'react';


const Navbar = () => {
    const [isMenuOpen, Setismenuopen] = useState(false);
    const [issticky, Setissticky] = useState(false);

    const toggleMenu = () =>{
        Setismenuopen(!isMenuOpen)
    }

 useEffect(()=>{
    const handleScroll = () =>{
        if(window.scrollY > 100){
            Setissticky(true);
        }
        else{
            Setissticky(false)
        }; 
        window.addEventListener('scroll', handleScroll)
        
        return () =>{
            window.addEventListener('scroll', handleScroll)
        }
    }
 })

    const navItems = [
        {
            id:1,
            name:"Home",
            path:'/'
        },
        {
            id:2,
            name:"About",
            path:'/about'
        },
        {
            id:3,
            name:"Plans",
            path:'/plans'
        },
        {
            id:4,
            name:"Testimonials",
            path:'/testimonials'
        },
    ]


  return (
    <header className='bg-darkBlack'>
        <nav className='py-3 px-10 md:px-20'>
           <div className='flex justify-between items-center'>
           <div className='text-Green'>
           <Link className='text-2xl font-Encode flex'><Globe size={28}/>Global Tradez</Link>
            </div>

            {
                <ul className='md:flex space-x-12 hidden text-white text-[18px] font-Encode'>
                    {navItems.map((item) =>(
                        <li key={item.id}><Link to={item.path} spy={true} smooth={true} offset={-100}>{item.name}</Link></li>
                    ))}
                </ul>
                
            }
 
            <div className='md:flex md:gap-1 hidden'>
            {/* <button className='bg-Green p-2 rounded-md transition-all duration-300 hover:bg-darkBlack hover:text-Green'><Link>Get Started</Link></button> */}
            <Link to='/signup' className='bg-Green text-darkBlack px-6 py-2 rounded-md font-Encode transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hidden md:block'>Get Started</Link>
            </div>

            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {isMenuOpen ? (<X size={32} className='text-white' />) : (<List size={32} className='text-white' />)}
                </button>
            </div>
           </div>


            {/* menubar for mobile device */}
            <div className={`space-y-4 mt-5 bg-white px-4 ${isMenuOpen ? 'block top-0 left-0 right-0' : 'hidden'}`}>
                {
                    <ul className=''>
                    {navItems.map((item) =>(
                        <li className='py-3' key={item.id}><Link to={item.path} spy={true} smooth={true} offset={-100}>{item.name}</Link></li>
                    ))}
                </ul>
                }

                <div className='flex gap-2 pb-3'>
                    <Link to='/login' className='bg-Green text-darkBlack rounded-md px-4 py-3'>Login</Link>
                    <Link to='/signup' className='bg-Green text-darkBlack rounded-md px-4 py-3'>SignUp</Link>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar




















// import React from 'react'
// import { List,Globe} from '@phosphor-icons/react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'

// const Navbar = ({toggle}) => {
  
//   return (

//     <nav className=' bg-darkBlack flex items-center justify-between text-white md:px-20 px-10 p-5'>
//       <Link className='text-2xl font-Encode flex'><Globe size={28}/>Global Tradez</Link>
//       <button className='nav-btn'>
//           <List onClick={toggle} size={32}/>
//         </button> 
//       <ul className='list flex space-x-6 md:text-[18px] font-Encode'>
//         <li>
//           <Link to='/' className='hover:text-Green' >Home</Link>
//         </li>
//         <li>
//           <Link to='/about' className='hover:text-Green' >About</Link>
//         </li>
//         <li>
//           <Link to='/services' className='hover:text-Green' >Services</Link>
//         </li>
//         <li>
//           <Link to='/pricing' className='hover:text-Green' >Pricing</Link>
//         </li>
//       </ul>
//       <Link to='/signup' className='bg-Green text-darkBlack px-6 py-2 rounded-md font-Encode transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hidden md:block'>Get Started</Link>
      
//     </nav>
//   )
// }

// export default Navbar