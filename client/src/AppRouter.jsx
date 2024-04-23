


import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Users from './components/Users/Users.jsx'
import NavBar from './components/NavBar.jsx'
import Weather from './components/Weather.jsx'
import Header from './components/Header.jsx'

import User from './components/Users/User.jsx'

function AppRouter() {

  return (
    <>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:userName' element={<User />} />
          <Route path='/weather' element={<Weather />} />
         
        </Routes>
    </>
  )
}

export default AppRouter