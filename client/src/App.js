import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import Causes from './pages/Causes/Causes';
import Cause from './pages/Cause/Cause';
import MyCause from './pages/MyCause/MyCause';
import AddCause from './pages/AddCause/AddCause';
import EditCause from './pages/EditCause/EditCause';
import Footer from './components/Footer/footer';
import Nav from './components/Nav/nav';
import './App.css';

export default function App() {

    return (
        <div className="App" id="page-container" >
            <div id="content-wrap">
                <Nav />
                <AnimatePresence>
                        <Routes>
                            <Route path='/' element={<About />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<SignUp />} />
                            <Route path='/causes' element={<Causes />} />
                            <Route path='/cause/:causeId' element={<Cause />} />
                            <Route path='/my-cause' element={<MyCause />} />
                            <Route path='/addcause' element={<AddCause />} />
                            <Route path='/editcause' element={<EditCause />} />
                        </Routes>
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    )
}