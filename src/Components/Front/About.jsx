import React from 'react'
import Img1 from '../../img/AboutAd.jpeg';

const About = () => {
  return (
    <div className='About container px-10 md:px-20 mt-0 bg-white h-600px w-100%'>
        <div className='Wrapper flex flex-col md:flex-row gap-5 font-Encode py-20'>
            <div className='md:w-[40%]'>
                <img src={Img1} alt="company" className='w-100% h-full' />
            </div>
            <div className='md:w-[60%] leading-8'>
                <h1 className='text-Green text-center text-[40px] font-Encode pb-10'>ABOUT US...</h1>
                <p>Global tradez aims to simplify and enhance the experience of investing in cryprocurrencies. Our aim is to create a passive income for our clients through the crypto market. we enable users to enter the crypto market with zero learning and curve required, and we help construct diversified portfolios with the aim to maximize returns while maintaininhg your preferred risk profile
                 </p>
                 <p className='pt-2'>
                    Global Tradez is a global investment hedge fund offering clients access to a nimble and powerful service for investing in Cryptocurrencies, Stocks, Bonds, Shares and Metaverse
                 </p>
                 <p className='pt-2'>
                    With More than 16 years of market experience and headquatered in California, Global Tradez now has over 1,000 staff across more than 30 global offices
                 </p>
                 <p className='pt-2'>
                    Global Tradez is more than a broker. it provides a trusted investment ecosystem that enables clients to achieve their own success, in a simpler manner.
                 </p>
                 <p className='pt-2'>
                    Be empowered to better capitalise on winning market opportunities when you trade smarted @globaltradez.com
                 </p>

            </div>
        </div>
    </div>
  )
}

export default About