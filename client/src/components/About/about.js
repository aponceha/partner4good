import React from 'react';
import './about.css';

const styles = {
    background: {
        background: 'rgb(246, 232, 226)',
        overflow: 'scroll'
    }
}

export default function About() {
    return (
        <div class="h-100" style={styles.background}>
            <h2>Who We Are</h2>
        </div>
    )
}