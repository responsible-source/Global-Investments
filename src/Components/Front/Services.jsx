import React from 'react'
import Img1 from '../../img/Seamless-Transfers.svg'
import Img2 from '../../img/Secured-profits.svg'
import Img3 from '../../img/Autobot.svg'
import Img4 from '../../img/Bitcoin-p2p.svg'
import Img5 from '../../img/world-updates.svg'
import Img6 from '../../img/Online-chat-support.svg'

const Services = () => {
  return (
    <div className='bg-darkBlack mt-20 md:mt-0'>
        <div className='wrapper px-10 md:px-20'>
            <h1 className='text-center text-Green text-[40px] font-Encode py-5 '>Our Services</h1>
            <div className='card-container pb-10'>
                <div className='card-wrapper grid md:grid-cols-3 grid-rows-1  gap-5'>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto py-2' src={Img1} alt="withdrawal" />
                        <h3 className='text-center pt-4 font-bold font-Encode text-[18px]'>Easy Withdrawals</h3>
                        <p className='text-center py-3 font-Encode'>Enjoy Seamless and fast Withdrawals from your Globaltradez account to your domestic banking app. </p>
                    </div>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto py-2' src={Img2} alt="withdrawal" />
                        <h3 className='text-center py-2 font-bold font-Encode text-[18px] '>Maximum Security</h3>
                        <p className='text-center py-3 font-Encode
                        '>Global tradez offers one of the most secured way of trading and the sweet part is, we take the risk for you. </p>
                    </div>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto' src={Img3} alt="withdrawal" />
                        <h3 className='text-center pt-4 md:py-2 font-bold font-Encode text-[18px]'>Auto Trading Bots</h3>
                        <p className='text-center py-3 font-Encode'>Global tradez enables automated prmium softwares to guarantee trading profits.</p>
                    </div>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto' src={Img4} alt="withdrawal" />
                        <h3 className='text-center pt-4 md:py-2 font-bold font-Encode text-[18px]'>Crypto Wallet</h3>
                        <p className='text-center py-3 font-Encode'>Global tradez provides a safe and well secured crypto wallet.</p>
                    </div>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto' src={Img5} alt="withdrawal" />
                        <h3 className='text-center pt-4 md:py-2 font-bold font-Encode text-[18px]'>Updates On The Go</h3>
                        <p className='text-center py-3 font-Encode'>Global tradez keeps you updated in all trending markets in the industry.</p>
                    </div>
                    <div className='card grid items-center justify-center mx-auto px-6 py-7 bg-white text-darkBlack rounded-md mt-2'>
                        <img className='w-100% h-[200px] items-center mx-auto' src={Img6} alt="withdrawal" />
                        <h3 className='text-center pt-4 md:py-2 font-bold font-Encode text-[18px]'>Chat Support System</h3>
                        <p className='text-center py-3 font-Encode'>A 24/7 chat support sysytem to serve your needs any time of the day.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services