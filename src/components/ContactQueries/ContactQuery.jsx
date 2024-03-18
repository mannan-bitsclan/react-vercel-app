import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contactquerystyle.css'

const ContactQuery = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className="space-section">
                <div className="container">
                    <div className="contact-info-inner sapce-control-mobile">
                        <h2>Have any question in mind please call or mail us</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                                <div className="single-contact-info-box">
                                    <div className="icon bg1">
                                        <i className="fas fa-headphones-alt"></i>
                                    </div>
                                    <h3>
                                        <a href="tel:+321895-980008">(+321) 895-980 008</a>
                                    </h3>
                                    <h3>
                                        <a href="tel:+321895-980008">(+321) 895-980 008</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                                <div className="single-contact-info-box">
                                    <div className="icon">
                                        <i className="fas fa-globe-europe"></i>
                                    </div>
                                    <h3>
                                        <a href="mailto:hello@texap.com">hello@texap.com</a>
                                    </h3>
                                    <h3>
                                        <a href="mailto:info@texap.com">info@texap.com</a>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
                                <div className="single-contact-info-box">
                                    <div className="icon bg2">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <h3>121 King St, Melbourne VIC 3000, Australia.</h3>
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactQuery