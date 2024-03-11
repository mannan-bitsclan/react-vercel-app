import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './getintouchstyle.css'
import Buttonprimary from '../Buttons/Buttonprimary'

const GetinTouch = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 text-center m-auto mb-5">
                            <h1 className='get-touch-heading' data-aos="fade-up">Get in Touch</h1>
                            <p className="common-text" data-aos="fade-up">
                                The IT industry offers a sea of options, from platforms, programming languages methodologies, technologies, tools, and more.
                            </p>
                        </div>

                        <div className="col-md-9 m-auto">
                            <form action="" className='contact-form'>
                                <div className="container p-0">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                                            <div className="form-group">
                                                <input placeholder="Your name" className="form-control" required name="name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                                            <div className="form-group">
                                                <input placeholder="Your email" className="form-control" required name="name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                                            <div className="form-group">
                                                <input placeholder="Phone Number" className="form-control" required name="name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                                            <div className="form-group">
                                                <input placeholder="Subject" className="form-control" required name="name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12" data-aos="fade-up">
                                            <div className="form-group">
                                                <textarea placeholder="Write your message..." className="form-control text-area-height"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type='submit' className="form-btn-box">
                                                <Buttonprimary btnPrimaryText={"Send Message"} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetinTouch