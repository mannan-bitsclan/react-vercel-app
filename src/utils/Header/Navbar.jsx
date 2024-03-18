import React, { useState, useEffect } from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/images/black-logo.png" className='header-logo' alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav header-links ms-auto me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/AboutUs' className="nav-link active">About Us</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/services' className="nav-link active">Services</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/blog' className="nav-link active">Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/contact' className="nav-link active">Contact Us</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>

                        <div className="get-started-btn">
                            <a href="#">Get Stated</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar