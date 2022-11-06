import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a><img src="/images/logo.png" alt="logo" /></a>
                                    </Link>
                                    <p>Rentabilidade diária, automática e garantida. Tenha lucro diariamente com a Amazon Trader FX.</p>
                                </div>
                                
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a> 
                                    </li>
                                    <li> 
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Empresa</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/about-us">
                                            <a>Sobre</a>
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Endereço</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <span className="mr-1">Location:</span> 
                                        São Paulo
                                    </li>
                                    <li>
                                        <span className="mr-1">Email:</span> 
                                        contact@amazontraderfx.com
                                    </li>
                                    <li>
                                        <span className="mr-1">Phone:</span> 
                                        +55 (41) 9999 9999
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} Amazon Trader FX - All rights Reserved </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;