import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutcontentstyle.css'
import Heading from '../Mainheading/Heading'
import Buttonprimary from '../Buttons/Buttonprimary'
import Buttonsecondry from '../Buttons/Buttonsecondry'

const AboutUsContent = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className='space-section'>
                <div className="container">
                    <div className="row reverse-mobile">
                        <div className="col-md-6 space-mobile-top">
                            <Heading subheading={"ABOUT US"} mainheading={"Most Probably You Are Getting Best App Ever"} />
                            <p data-aos="fade-up" className='common-text'>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                            <h3 className="about-content-mini-heading" data-aos="fade-up">Our App</h3>
                            <p data-aos="fade-up" className="common-text">Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                            <h3 data-aos="fade-up" className="about-content-mini-heading">Our Mission</h3>
                            <p data-aos="fade-up" className="common-text">Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
                            <div className="d-flex mt-4 align-items-center">
                                <Buttonprimary btnPrimaryText={"Explore More"} />
                                <Buttonsecondry btnSecondryText={"See All Feature"} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="about-us-content-image">
                                <img src="assets/images/app-img8.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsContent