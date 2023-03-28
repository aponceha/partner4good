import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'

import About from './components/About/about';
// import Contact from './components/Contact/c';
import Footer from './components/Footer/footer';
import Nav from './components/Nav/nav';
import Partners from './components/Partners/partners';
import AddCause from './components/AddCause/addCause';
import Login from './components/Login/login';
import { motion, stagger, AnimatePresence } from 'framer-motion';

export default function App() {

    const location = useLocation();

    return (
        <div class="App" >
            <div class="vh-100">
                <Nav />
                    <AnimatePresence>
                            <Routes location={location} key={location.key}>
                                <Route path='/' element={<About />} />
                                <Route path='/partners' element={<Partners />} />
                                <Route path='/addcause' element={<AddCause />} />
                                {/* <Route path='/contact' element={<Contact />} /> */}
                                <Route path='/login' element={<Login />} />
                            </Routes>
                    </AnimatePresence>
                <Footer />
            </div>
        </div>
    )
}