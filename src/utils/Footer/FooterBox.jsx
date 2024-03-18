import React from 'react'
import './footerstyle.css'
import { Link } from 'react-router-dom'

const FooterBox = () => {
    return (
        <>
            <section className='footer-box'>
                <div className="container">
                    <div className="row footer-bar-bottom">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <Link to='/'>
                                <div className="footer-logo">
                                    <img src="assets/images/logo.png" alt="" />
                                </div>
                            </Link>
                            <p className="common-text-footer">
                                Best solution for your it startup business, consecteturadipiscing elit. Scelerisque amet odio velit, auctor nam elit nulla.
                            </p>

                            <ul className="social-icons">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-facebook-messenger"></i></a></li>
                                <li><a href="#"><i class="fab fa-github"></i></a></li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                            <h1 className="footer-heading">Company</h1>
                            <ul className='footer-list'>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Core Services</Link></li>
                                <li><Link href="#">Refund Policy</Link></li>
                                <li><Link href="#">FAQ's</Link></li>
                                <li><Link to='blog'>Reviews</Link></li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                            <h1 className="footer-heading">Support</h1>
                            <ul className='footer-list'>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to=''>Support</Link></li>
                                <li><Link to=''>Privacy Policy</Link></li>
                                <li><Link to=''>FAQ's</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-12">
                            <h1 className="footer-heading">Useful Links</h1>
                            <ul className='footer-list'>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">How It Works?</a></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 single-footer-widget">
                            <h1 className="footer-heading">Newsletter</h1>
                            <p className="common-text-footer">Best solution for your it startup business, consecteturadipiscing elit</p>

                            <form className="newsletter-form">
                                <input className="input-newsletter" placeholder="Your Email" required type="text" name="EMAIL" />
                                <button type="submit">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <h6 className='footer-copyright'>Copyright © 2024 All Rights Reserved by <a href="#">Bitsclan IT Solutions</a></h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterBox