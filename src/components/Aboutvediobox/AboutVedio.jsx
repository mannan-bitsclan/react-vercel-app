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

            <section className="space-section pb-0" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
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

            <div>
                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body p-0">
                                {/* <iframe width="900" height="500" src="https://www.youtube.com/embed/owiwCIhc0I0?si=hekeIRIddQyll1Wx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <iframe id="vimeoVideo" width="900" height="500" class="w-100" src="https://player.vimeo.com/video/891558975" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutVedio