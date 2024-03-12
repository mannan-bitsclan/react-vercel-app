import React, { useEffect } from 'react'
import './herosection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Downloadbutton from '../Downloadbuttons/Downloadbutton';


const Herosection = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section className='background-color-box'>
                <div className="container">
                    <div className="row reverse-mobile">
                        <div className="col-md-6">
                            <img src="assets/images/shape-5.png" className="banner-shape-image" alt="" />
                            <div className="text-box">
                                <h1 data-aos="fade-up">ANDROID APP DEVELOPMENT COMPANY</h1>
                                <p data-aos="fade-up">In the hustle and bustle of modern life, keeping track of our belongings can be a daunting task.From important documents to sentimental items, managing our possessions efficiently is crucial for maintaining organization and peace of mind.</p>
                                <div className="images-text-box">
                                    <div className="images-box" data-aos="fade-up">
                                        <img src="assets/images/user4.jpg" alt="" />
                                        <img src="assets/images/user4.jpg" alt="" />
                                        <img src="assets/images/user4.jpg" alt="" />
                                        <img src="assets/images/user4.jpg" alt="" />
                                    </div>
                                    <span data-aos="fade-up">4K+ used this App</span>
                                </div>

                                {/* <Downloadbutton /> */}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="banner-image">
                                <img src="assets/images/shape-3.png" alt="" className="top-image" />
                                <img src="assets/images/banner-2.png" alt="" />
                                <img src="assets/images/shape-4.png" alt="" className="bottom-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection