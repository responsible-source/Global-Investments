import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../../img/Testimonial1.jpeg'
import Img2 from '../../img/Testimonial2.jpeg'
import Img3 from '../../img/Testimonial3.jpeg'
import Img4 from '../../img/Testimonial4.jpeg'
import Img5 from '../../img/Testimonial5.jpeg'
import Img6 from '../../img/Testimonial6.jpeg'
import Img7 from '../../img/Testimonial7.jpeg'
import Img8 from '../../img/Testimonial8.jpeg'

const Testimonials = () => {
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (
    <div className='px-5 md:px-20 mt-20 bg-darkBlack h-[800px] md:h-[600px] w-[100%]'>
        <h1 className='text-center text-Green text-[30px] font-Encode pt-10' >What Our Clients Are Saying...</h1>
        <div className='card-wrapper grid grid-cols-2 gap-10  mt-20 w-[600px] md:w-[2000px] justify-center items-center mx-auto px-[50px] md:px-[100px]'> 
        <Slider {...settings}>

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img1} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto pt-5' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Paul Hammers</h3>
            <p className='pt-5 text-center text-[14px] mb-5 font-Encode'>I think the platform is really easy to use, it has helped me create a staedy income for myself, thanks to my agent also. but i think the platform also need to hasten up on withdrawls, my last withdrawals took me about 7-8 hours before i recieved it.</p>
        </div>

        {/* <div className='card bg-white flex flex-col justify-center items-center h-[150px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img2} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto pt-5' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Jefferson Clearverly</h3>
            <p className='pt-5 text-center mb-5 font-Encode'>This Platform has been really helpful to my family and i just want to say i really appreciate the positivity this platform has brought into my life.</p>
        </div> */}

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img3} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Steve Williams</h3>
            <p className='pt-5 text-center mb-5 text-[14px] font-Encode'>This is a really Great platform, and its easy to use but you should not take up to 24 hours to deposit my profits, you guys need to work on your timing please. thank you for everything tho. *smiles*</p>
        </div>

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img4} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Clyde Vincent</h3>
            <p className='pt-5 text-center mb-5 font-Encode text-[14px]'>For a well secured , well managed, and good customer relation. Global Tradez is the best plug for that. I just cleared my Debts thank you global tradez.</p>
        </div>

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img5} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Kene Azike</h3>
            <p className='pt-5 text-center mb-5 font-Encode text-[14px]'>I'm an international student in canada and i just paid my school fees thanks to you guys. im going to get me a dodge soon</p>
        </div>

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md' >
            <img src={Img6} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Chin Zhang</h3>
            <p className='pt-5 text-center mb-5 font-Encode text-[14px]'>As an international client, i appreciate global tradez commitment to understanding local markets and tailoring solutions to my needs.</p>
        </div>

        <div className='card bg-white flex flex-col justify-center items-center h-[450px] md:h-[350px] w-[100%] px-1 md:px-10 py-5 rounded-md'>
            <img src={Img7} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Rose Martinez</h3>
            <p className='pt-5 text-center mb-5 font-Encode text-[14px]'>global tradez hands-on approach has helped me navigate market fluctuations and stay on track towards my financial targets</p>
        </div>

        {/* <div className='card bg-white flex flex-col justify-center items-center px-1 md:px-10 py-5 rounded-md'>
            <img src={Img8} alt="image1" className='h-40 w-40 rounded-full flex items-center justify-center mx-auto' />
            <h3 className='pt-3 text-center font-Encode font-bold'>Raj Singh</h3>
            <p className='pt-5 text-center mb-5 font-Encode'>As an indian living out here in canada this platform has really me through different phases. i have been able to establish a stable savings plan and pay alot of fees from this. thank you</p>
        </div> */}
        
        </Slider>
        </div>
    </div>
  )
}

export default Testimonials