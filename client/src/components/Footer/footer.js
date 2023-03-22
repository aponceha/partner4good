import React from 'react';
import './Footer.css';

const styles = {
    background: {
        background: 'rgb(78, 115, 140)',
        color: 'rgb(246, 246, 237)'
    },
    links: {
        color: 'rgb(246, 246, 237)'
    }
};

export default function Footer() {
    return (
        <div class="fixed-bottom" style={styles.background}>
            <h4 class="text-center mb-0 mt-4">Footer</h4>
            <nav class="d-flex justify-content-center">
                <address class=" m-3">
                    {/* <i class="fab fa-github fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" class="text-decoration-none" style={styles.links}>GitHub</a> */}
                </address>
                <address class="m-3">
                    {/* <i class="fab fa-linkedin fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href=""class="text-decoration-none" style={styles.links}>LinkedIn</a> */}
                </address>
                <address class="m-3">
                    {/* <i class="fab fa-stackoverflow fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" class="text-decoration-none" style={styles.links}>stackoverflow</a> */}
                </address>
            </nav>
        </div>
    )
}