import React from 'react'
import Hero from './components/Hero'
import Motive from './components/Motive'
import Impact from './components/Impact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import VerifyOtp from './pages/VerifyOtp'

const App = () => {
  return (
    <div>
      <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
      </Routes>

      </Router>
    </div>
  )
}

export default App