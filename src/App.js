import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Bitcoin from './Components/Front/Bitcoin';
import Accounts from './Components/Front/Pages/Accounts';
import BankWithdraw from './Components/Front/Pages/BankWithdraw';
import Congratulations from './Components/Front/Pages/Congratulations';
import CryptoWithdrawal from './Components/Front/Pages/CryptoWithdrawal';
import Deposit from './Components/Front/Pages/Deposit';
import Home from './Components/Front/Pages/Home';
import Login from './Components/Front/Pages/Login';
import Signup from './Components/Front/Pages/Signup';
import UserDashboard from './Components/Front/Pages/UserDashboard';
import Withdrawal from './Components/Front/Pages/Withdrawal';
import Wsn from './Components/Front/Pages/Wsn';
import Usdt from './Components/Front/Usdt';





const App = () => {
  return (
    <Router>
     <Routes>
       <Route path='/' element={<Home />} exact />
       <Route path='/signup' element={<Signup />} />
       <Route path='/login' element={<Login />} />
       <Route path='/userdashboard' element={<UserDashboard />} />
       <Route path='/deposit' element={<Deposit />} />
       <Route path='/withdrawal' element={<Withdrawal />}/>
       <Route path='/accounts' element={<Accounts />}/>
       <Route path='/bitcoin' element={<Bitcoin />}/>
       <Route path='/usdt' element={<Usdt />}/>
       <Route path='/bankwithdrawal' element={<BankWithdraw />}/>
       <Route path='/cryptowithdrawal' element={<CryptoWithdrawal />}/>
       <Route path='/congratulations' element={<Congratulations />}/>
       <Route path='/wsn' element={<Wsn />}/>
     </Routes>
    </Router>
  )
}

export default App