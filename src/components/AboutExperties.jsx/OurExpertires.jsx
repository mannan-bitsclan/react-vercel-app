import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ourexpertiesstyle.css'
import Heading from '../Mainheading/Heading'

const OurExpertires = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const experties = [
        {
            name: "James Andy",
            position: "CEO & Founder",
        },

        {
            name: "Steven Smith",
            position: "Web Developer",
        },

        {
            name: "Sarah Taylor",
            position: "Web Designer",
        },

        {
            name: "Alina Aly",
            position: "SEO Consultant",
        },
    ]


    return (
        <>
            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Heading subheading={"OUR EXPERTS"} mainheading={"Meet With Our Team Member"} />
                        </div>

                        {
                            experties.map((content, index) => {
                                return (
                                    <>
                                        <div className="col-lg-3 col-md-6 col-sm-6 mt-5" data-aos="fade-up" key={index}>
                                            <div className="single-team-member">
                                                <div className="image">
                                                    <img alt="image" loading="lazy" width={252} height={252} decoding="async" data-nimg={1} src="assets/images/team3.jpg" style={{ color: 'transparent' }} />
                                                </div>
                                                <div className="content">
                                                    <h3>{content.name}</h3>
                                                    <span>{content.position}</span>
                                                </div>
                                                <ul className="social-links">
                                                    <li>
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.linkedin.com/" target="_blank">
                                                            <i className="fab fa-linkedin-in"></i>
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
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurExpertires