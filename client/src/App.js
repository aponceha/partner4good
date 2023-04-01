import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import About from './pages/About/About';
// import Partners from './pages/Partners/Partners';
// import AddCause from './pages/AddCause/AddCause';
import Login from './pages/Login/Login';
// import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/footer';
import Nav from './components/Nav/nav';
import './App.css';


export default function App() {

    return (
        <div className="App" >
            <div className="">
                <Nav />
                <AnimatePresence>
                        <Routes>
                            <Route path='/' element={<About />} />
                            <Route path='/login' element={<Login />} />
                            {/* <Route path='/profile' element={<Profile />} />
                            <Route path='/partners' element={<Partners />} />
                            <Route path='/addcause' element={<AddCause />} />
                            <Route path='/contact' element={<Contact />} /> */}
                        </Routes>
                </AnimatePresence>
                <Footer />
            </div>
        </div>
    )
}