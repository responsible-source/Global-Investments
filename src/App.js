import React, { useState, useEffect } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Bitcoin from './Components/Front/Bitcoin';
import Accounts from './Components/Front/Pages/Accounts';
import BankWithdraw from './Components/Front/Pages/BankWithdraw';
import Congratulations from './Components/Front/Pages/Congratulations';
import CryptoWithdrawal from './Components/Front/Pages/CryptoWithdrawal';
import Deposit from './Components/Front/Pages/Deposit';
import Home from './Components/Front/Pages/Home';
import Login from './Components/Front/Pages/Login';
import Welcome from './Components/Front/Pages/Welcome';
import Signup from './Components/Front/Pages/Signup';
import UserDashboard from './Components/Front/Pages/UserDashboard';
import Withdrawal from './Components/Front/Pages/Withdrawal';
import Profile from './Components/Front/Pages/Profile';
import Wsn from './Components/Front/Pages/Wsn';
import Usdt from './Components/Front/Usdt';
import Admindashboard from './Components/Front/Pages/Admindashboard';
import EditUser from './Components/Front/Pages/EditUser';
import UserTxs from './Components/Front/Pages/UserTxs';
import History from './Components/Front/History';






const App = () => {
  const [loading, Setloading] = useState(false);

  useEffect(() =>{
    Setloading(true);

    setTimeout(()=>{
      Setloading(false)
    }, 8000)
  },[])

  const override = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };


  return (
   <div className='App'>
    {
      loading ?
      <SyncLoader
        color={'#01bf71'}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      :
      <Router>
     <Routes>
       <Route path='/' element={<Home />} exact />
       <Route path='/welcome' element={<Welcome />} />
       <Route path='/signup' element={<Signup />} />
       <Route path='/login' element={<Login />} />
       <Route path='/userdashboard' element={<UserDashboard />} />
       <Route path='/deposit' element={<Deposit />} />
       <Route path='/withdrawal' element={<Withdrawal />}/>
       <Route path='/profile' element={<Profile />}/>
       <Route path='/accounts' element={<Accounts />}/>
       <Route path='/bitcoin' element={<Bitcoin />}/>
       <Route path='/usdt' element={<Usdt />}/>
       <Route path='/bankwithdrawal' element={<BankWithdraw />}/>
       <Route path='/cryptowithdrawal' element={<CryptoWithdrawal />}/>
       <Route path='/congratulations' element={<Congratulations />}/>
       <Route path='/wsn' element={<Wsn />}/>
       <Route path='/admindashboard' element={<Admindashboard />}/>
       <Route path='/edituser' element={<EditUser />}/>
       <Route path='/usertxn' element={<UserTxs />}/>
       <Route path='/history' element={<History />}/>
     </Routes>
    </Router>
    }
     
   </div>
  )
}

export default App