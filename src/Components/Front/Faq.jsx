import React from 'react'
import { Plus } from '@phosphor-icons/react';

const Faq = ({toggle,isOpen }) => {
  return (
    <div className='container px-10 md:px-20  bg-darkBlack'>
        <h1 className='text-center text-Green font-bold font-Encode text-[40px] pt-[30px] '>FAQ</h1>
        <div className='wrapper py-[60px] '>
            <div className='card text-white border-2 border-Green mb-6'>
                <div className='flex items-center justify-between pb-3 p-5'>
                <h3 className='font-Encode'>How Can I Start</h3>
                <Plus size={25} onClick={toggle} />
                </div>
                <div className='p-5 font-Encode' style={{display: isOpen ? 'block' : 'none'}}>
                    <p>Starting an investment package with global tradez is really easy, kindly contact one of our registered managers to lead you through the process or kindly contact the chat support. </p>
                </div>
            </div>

            <div className='card text-white border-2 border-Green mb-6'>
                <div className='flex items-center justify-between pb-3 p-5'>
                <h3 className='font-Encode'>Can I Withdraw Into My Bank Account ?</h3>
                <Plus size={25} onClick={toggle} />
                </div>
                <div className='p-5 font-Encode' style={{display: isOpen ? 'block' : 'none'}}>
                    <p> Yes! for our clients that live in the USA, UK, Canada, Australia, New Zealand and Germany it is possible to withdraw directly into your domestic bank account </p>
                </div>
            </div>

            <div className='card text-white border-2 border-Green'>
                <div className='flex items-center justify-between pb-3 p-5'>
                <h3 className='font-Encode'>How Can i Contact With You ?</h3>
                <Plus size={25} onClick={toggle} />
                </div>
                <div className='p-5 font-Encode' style={{display: isOpen ? 'block' : 'none'}}>
                    <p> Contacting us is very simple. Just use the chat icon at the bottom right of the website.</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Faq