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
        <nav class="navbar navbar-expand" style={styles.background}>
            <div class="container d-flex justify-content-between">
                <h1 class="col-4 border">Partner for Good.</h1>
                <div class="container d-flex border justify-content-evenly col-6" >
                    <NavLink to='/' style={styles.links}> Who we are</NavLink>
                    <NavLink to='/addCause' style={styles.links}> Add your cause</NavLink>
                    <NavLink to='/login' style={styles.links}> Login</NavLink>
                </div>
            </div>

        </nav>
    )
}