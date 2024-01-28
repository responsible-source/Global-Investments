import React from 'react'
import Img1 from '../../img/pay1.png'
import Img2 from '../../img/pay2.png'
import Img3 from '../../img/pay3.png'
import Img4 from '../../img/pay4.jpg'
import Img5 from '../../img/pay5.png'
import Img6 from '../../img/pay6.png'
import Img7 from '../../img/pay7.png'
import Img8 from '../../img/pay8.png'


const Partners = () => {
  return (
    <div className='container'>
        <h1 className='font-Encode font-bold pb-10 text-center text-Green'>Supported Funding Methods...</h1>
        <div className='img-wrapper px-10 md:px-20 '>
            <div className='grid grid-flow-row md:grid-flow-col grid-cols-2 gap-10'>
                <div>
                <img src={Img1} alt="" className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img2} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img3} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img4} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img5} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img6} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img7} alt=""  className='w-[120px] h-10' />
                </div>

                <div>
                <img src={Img8} alt=""  className='w-[120px] h-10' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Partners