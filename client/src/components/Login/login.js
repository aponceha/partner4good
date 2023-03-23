import React from 'react';
import './login.css';

const styles = {
    background: {
        background: 'rgb(246, 232, 226)',
        overflow: 'scroll'
    }
}

export default function Login() {
    return (
        <div class="h-100" style={styles.background}>
            <h2>Login</h2>
        </div>
    )
}