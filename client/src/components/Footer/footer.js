import React from 'react';
import './footer.css';


export default function Footer() {
    return (
        <div className="footerDiv" id="footer">
            <h4 className="footerH4">Footer</h4>
            <nav className="navFooter">
                <address className="footerLinks">
                    {/* <i className="fab fa-github fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" className="text-decoration-none" style={styles.links}>GitHub</a> */}
                </address>
                <address className="footerLinks">
                    {/* <i className="fab fa-linkedin fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href=""className="text-decoration-none" style={styles.links}>LinkedIn</a> */}
                </address>
                <address className="footerLinks">
                    {/* <i className="fab fa-stackoverflow fa-lg m-3" style="color:slategray"></i> */}
                    {/* <a href="" className="text-decoration-none" style={styles.links}>stackoverflow</a> */}
                </address>
            </nav>
        </div>
    )
}