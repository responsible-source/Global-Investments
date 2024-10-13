import React, {useState} from 'react';
import { List, X, Globe, House, CreditCard, Bank, UserCircle, ClockCountdown } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
;



const UserNavbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  let data = JSON.parse(localStorage.getItem('userDetails'));

  const firstName = data.first_name
  const lastName = data.last_name

  
  return (
    <div className='container'>
      <div className='navbar px-10 pt-5'>
      <List onClick={showSidebar} className='text-darkBlack text-[24px] md:text-[32px]'/>
       </div>
      <div style={{left: sidebar ? '0' : '-100%'}} className='sidebar w-1/2 md:w-1/4 h-screen bg-darkBlack  text-white fixed top-0 duration-500'>
<div className='wrapper'>
      <div className='px-10 py-5'>
            <X onClick={showSidebar} className='text-[24px] md:text-[32px]' />
      </div>
          <div className='flex pl-5 pt-6 gap-2 text-white'>
              <Globe className='text-[20px] md:text-[28px]' />
              <h3 className='text-[16px] md:text-[18px] font-Encode'>Global Tradez</h3>
          </div>
              <Link to='/profile' className='flex gap-2 pl-5 pt-5'>
              <UserCircle className='text-[20px] md:text-[28px]' />
              <h4 className='text-[14px] md:text-[16px] font-Encode capitalize'>{`${firstName} ${lastName}`}</h4>
              </Link>
                  <div className='mt-4 pl-5 mb-10'>
                   <div className='flex gap-2 '>
                    <House className='text-[20px] md:text-[28px]' />
                    <Link className='text-[14px] md:text-[18px]' to='/userdashboard'>Dashboard </Link>
                   </div>
                   <div className='flex gap-2 py-5 '>
                   <CreditCard className='text-[20px] md:text-[28px]'  />
                    <Link className='text-[14px] md:text-[18px]' to='/deposit'>Deposit</Link>
                   </div>
                   <div className='flex gap-2 '>
                   <Bank className='text-[20px] md:text-[28px]' />
                    <Link className='text-[14px] md:text-[18px]' to='/withdrawal'>Withdrawal </Link>
                   </div>
                   <div className='flex gap-2 py-5'>
                   <ClockCountdown className='text-[20px] md:text-[28px]' />
                    <Link className='text-[14px] md:text-[18px]' to='/history'>History</Link>
                   </div>
                  </div>

                  <div className=' text-center px-[10px] '>
                  {/* <SignOut className='text-[24px] md:text-[32px]' /> */}
                    <Logout />
                  </div>

                  
</div>
      </div>
    </div>
  )
}

export default UserNavbar