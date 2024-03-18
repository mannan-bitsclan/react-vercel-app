import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './softwareintigrationstyle.css'
import Heading from '../Mainheading/Heading'
import Buttonprimary from '../Buttons/Buttonprimary'

const SoftwareIntigration = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className='space-section'>
                <div className="container">
                    <div className="row reverse-mobile">
                        <div className="col-md-6">
                            <Heading subheading={"SOFTWARE INTEGRATIONS"} mainheading={"Easy & Perfect Solution With Latest Software Integrations"} />
                            <p data-aos="fade-up" className='common-text'>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                            <p data-aos="fade-up" className="common-text">Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.</p>
                            <div className="col-lg-4 col-md-7 mt-4">
                                <Buttonprimary btnPrimaryText={"Get Started"} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="about-us-content-image space-bottom-mobile">
                                <img src="assets/images/intigration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SoftwareIntigration