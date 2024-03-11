import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './appprogressstyle.css'
import Heading from '../Mainheading/Heading'
import Buttonprimary from '../Buttons/Buttonprimary'


const AppProgressContent = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className='space-section space-remove-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="about-us-content-image">
                                <img src="assets/images/app-img2.png" alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 space-mobile-top">
                            <Heading subheading={"APP PROGRESS"} mainheading={"Set Up The Challenges and Track Your Progress"} />
                            <p data-aos="fade-up" className='common-text'>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                            <p data-aos="fade-up" className="common-text">Most provabily best for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy backup just log in with your mail account from.</p>
                            <div className="col-lg-4 col-md-8 mt-4">
                                <Buttonprimary btnPrimaryText={"Start Free Trial"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppProgressContent