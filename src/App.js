import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Front/Pages/Home';
import Login from './Components/Front/Pages/Login';
import Signup from './Components/Front/Pages/Signup';


const App = () => {
  return (
    <>
    <Router>
     <Routes>
       <Route path='/' element={<Home />} exact />
       <Route path='/signup' element={<Signup />} />
       <Route path='/login' element={<Login />} />
     </Routes>
    </Router>
    </>
  )
}

export default App