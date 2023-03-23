import React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
    }
};

export default function Nav() {
    return (
        <nav class="navbar navbar-expand" style={styles.background}>
            <div class="container-fluid d-flex justify-content-evenly">
                <NavLink to='/'> About Me</NavLink>
                <NavLink to='/partners'> Partners</NavLink>
                <NavLink to='/contact'> Contact</NavLink>
                <NavLink to='/login'> Login</NavLink>
            </div>
        </nav>
    )
}