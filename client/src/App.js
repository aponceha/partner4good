import './App.css'
import { Routes, Route } from 'react-router-dom'

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Partners from './components/Partners';
import AddCause from './components/AddCause';
import Login from './components/Login';

export default function App() {
    return (
        <div class="App" >
            <div class="vh-100">
                <Nav />
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/partners' element={<Partners />} />
                        <Route path='/addcause' element={<AddCause />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                <Footer />
            </div>
        </div>
    )
}