import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import { motion, stagger, AnimatePresence } from 'framer-motion';
import { useEffect, useLocation } from 'react';
import { Link } from 'react-scroll';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
    },
    links: {
        color: 'white'
    }
};


export default function Nav(props) {


    return (
        <nav className="nav background" >
            <div className="navDiv">
                <h1 className="navH1">Partner for Good.</h1>
                <div className="navLinks" >
                    {props.page == "home" && <Link to='whoweare' className = "links" > Who we are</Link>}
                    {props.page!="home" && <NavLink to='/' className = "links" > Home </NavLink>}
                    <NavLink to='/addCause' className = "links" > Add your cause</NavLink>
                    <NavLink to='/login' className = "links"> Login</NavLink>
                </div>
            </div>

        </nav>
    )
}