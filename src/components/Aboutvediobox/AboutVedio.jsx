import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutvediostyle.css'

const AboutVedio = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className="space-section pb-0">
                <div className="video-area" data-aos="fade-up">
                    <div className="container">
                        <div className="video-box">
                            <img alt="video-image" className='vedio-image' loading="lazy" src="assets/images/video-img2.jpg" />
                            <div className="video-btn popup-youtube">
                                <i className="fas fa-play" />
                            </div>
                            <div className="shape">
                                <img alt="shape1" loading="lazy" className="shape1" src="assets/images/shape1.png" />
                                <img alt="shape2" loading="lazy" className="shape2" src="assets/images/shape2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutVedio