import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
    },
    links: {
        color: 'white'
    }
};

export default function Nav() {
    return (
        <nav className="nav background" >
            <div className="navDiv">
                <h1 className="navH1">Partner for Good.</h1>
                <div className="navLinks" >
                    <NavLink to='/' className = "links" > Who we are</NavLink>
                    <NavLink to='/addCause' className = "links" > Add your cause</NavLink>
                    <NavLink to='/login' className = "links"> Login</NavLink>
                </div>
            </div>

        </nav>
    )
}