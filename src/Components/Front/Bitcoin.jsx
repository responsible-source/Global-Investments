import React,{ useState }  from 'react'
import img1 from '../../img/Bitcoin.jpeg'
import { ArrowLeft, Copy } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'


const Bitcoin = () => {
  const [copied, setCopied] = useState(false);

  const walletAddress = "bc1qrtrrp4mvhmdtj4pyn6jtezpcpxqf2gtntunq3l";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };
  return (
    <div className='h-screen'>
      <div className=' text-darkBlack pt-10 px-10 md:px-20'>
            <Link className='flex' to='/deposit'>
            <ArrowLeft size={20} />
            </Link>
        </div>
       <div className='px-5 md:px-20 mt-20'>
       <div className='flex flex-col'>
            <img src={img1} alt="" className='w-[100%] h-60 md:h-96 object-contain' />
            <div className='flex justify-center items-center pt-5 px-5 text-center'>
            <p className='mr-2 text-[12px] md:text-[14px]'>{walletAddress}</p>
            <Copy 
              size={24} 
              className='cursor-pointer text-gray-600 hover:text-black' 
              onClick={copyToClipboard} 
            />
             {copied && <p className='text-green-500 font-Encode pl-2 text-[10px]'>Copied!</p>}
          </div>
           
        </div>

        <div className='bg-darkBlack text-white rounded-lg mt-8 px-5 py-3'>
          <p>Send only Bitcoin (BTC) to this address.</p>
          <p>Sending any other coins may result in permanent loss.</p>
        </div>
       </div>
    </div>
  )
}

export default Bitcoin
