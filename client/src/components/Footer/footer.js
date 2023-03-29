import React from 'react';
import './footer.css';


export default function Footer() {
    return (
        <div class="footerDiv">
            <h4 class="footerH4">Footer</h4>
            <nav class="navFooter">
                <address class="footerLinks">
                    {/* <i class="fab fa-github fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" class="text-decoration-none" style={styles.links}>GitHub</a> */}
                </address>
                <address class="footerLinks">
                    {/* <i class="fab fa-linkedin fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href=""class="text-decoration-none" style={styles.links}>LinkedIn</a> */}
                </address>
                <address class="footerLinks">
                    {/* <i class="fab fa-stackoverflow fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" class="text-decoration-none" style={styles.links}>stackoverflow</a> */}
                </address>
            </nav>
        </div>
    )
}