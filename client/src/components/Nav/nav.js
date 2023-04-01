import React from 'react';
import './nav.css';
import { NavLink, useLocation } from 'react-router-dom';
// import { motion, stagger, AnimatePresence } from 'framer-motion';
// import { useEffect, useLocation } from 'react';
import { Link } from 'react-scroll';

// const styles = {
//     background: {
//         background: 'rgb(78, 115, 140)',
//     },
//     links: {
//         color: 'white'
//     }
// };


export default function Nav() {

    const location = useLocation();

    const isOnHome = location.pathname === '/';


    return (
        <nav className="nav background" style={{ position: isOnHome ? 'absolute' : '' }} >
            <div className="navDiv">
                <h1 className="navH1">Partner for Good.</h1>
                <div className="navLinks" >
                    <Link to='whoweare' className = "links" > Who we are</Link>
                    <NavLink to='/' className = "links" > Home </NavLink>
                    <NavLink to='/addCause' className = "links" > Add your cause</NavLink>
                    <NavLink to='/login' className = "links"> Login</NavLink>
                </div>
            </div>

        </nav>
    )
}