import React from 'react';
import { Link } from 'react-router-dom';
import { Globe } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto flex flex-col items-center justify-between md:flex-row">

    <div class="mb-2 md:mb-0">
    <div className='text-Green'>
           <Link className='text-[14px] md:text-[18px] font-Encode flex'><Globe className='text-[18px] md:text-[24px]'/>Global Tradez</Link>
            </div>
    </div>

    <div class="mb-2 md:mb-0 text-center">
      <p class="text-sm font-Encode">
        Contact us: <a href="mailto:contact@example.com" class="underline">financialglobalmanagement@gmail.com</a>
      </p>
    </div>

    
    <div class="text-center md:text-right">
      <p class="text-sm font-Encode">&copy; 2024 Global Tradez. All rights reserved.</p>
    </div>
  </div>
</footer>

    // <div className='bg-darkBlack'>
    //     <div className='wrapper text-gray-50 px-5 pt-10 text-[14px] font-semibold font-Encode'>
    //         <div className='pb-3'>
    //             <h1> Copyright &copy; 2002 Global Tradez.</h1>
    //         </div>

    //         <div className='leading-7 pb-5'>
    //             <p>All rights reserved. This material may not be reproduced, distributed, transmitted, cached, or otherwise used, except with the prior written permission of Global Tradez.</p>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Footer