import React, { useState} from 'react'
import VideoBg from '../../Video/Video.mp4'
import { Link } from 'react-router-dom'
import { ArrowCircleRight, ArrowRight } from '@phosphor-icons/react'
import  Lottie  from 'lottie-react'
import animationData from '../../Animations/HomeSection-Animation.json'
import '../../Components/Front/Navbar.css'

const Hero = () => {
   
    const [hover, Sethover] = useState(true)

    const toggle = () =>{
        Sethover(!hover)
    }
  return (
    
    <div className='relative w-[100%] h-auto'>
        <div className='top-0 right-0 left-0 bottom-0 w-100% w-[100%] h-[750px] md:h-[700px] '>
        <video src={VideoBg} autoPlay loop muted className='object-cover object-center w-[100%] h-full' />
        </div>
       
        
        <div className='absolute top-0 left-0 w-[100%] h-full flex flex-col md:flex-row items-center justify-center md:px-20 px-10'>
            <div className='text-white font-Encode'>
            <h1 className='text-2xl md:text-3xl'>BINARY OPTIONS, CFDs & FOREX TRADING MADE EASY</h1>
            <p className='text-1.8xl pt-3'>The Simplest and Most Powerful Trading Platform</p>
            <p className='text-[12px] pt-2 pb-5'>Sign Up for a new account and recieve 10% cashback on your first deposit to your trading account</p>
            <Link className='flex items-center gap-5 w-[160px] bg-Green text-darkBlack rounded-md p-2' to='/signup' onMouseEnter={toggle} onMouseLeave={toggle} >Get Started {hover ? <ArrowCircleRight size='25px' /> : <ArrowRight size='25px' /> }</Link>
            </div>
            <div>
                <Lottie animationData={animationData} loop={true}/>
            </div>
        </div>
    </div>
  )
}

export default Hero