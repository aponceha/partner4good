import React from 'react';
import './about.css';

const styles = {
    background: {
        overflow: 'scroll'
    }
}

export default function About() {
    return (
        <div class="h-100" style={styles.background}>
            <h2>Who We Are</h2>
            <button onClick={() => window.location.href = '/#/partners'}>Partners</button>
        </div>
    )
}