import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import './testimonialsliderstyle.css';

// import required modules
import { EffectCube, Navigation } from 'swiper/modules';


const TestimonialSlider = () => {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: true,
                    shadowOffset: 0,
                    shadowScale: 0,
                }}
                navigation={true}
                modules={[EffectCube, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="single-feedback-wrap-item">
                        <div className="rating">
                            <h5>Theme Customization</h5>
                            <div><i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>

                        <p>Sportify Developer prioritizes collaboration and innovation, fostering a vibrant ecosystem where developers can share ideas, collaborate on projects, and learn from one another.</p>

                        <div className="client-info">
                            <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} src="assets/images/user1.jpg" style={{ color: 'transparent' }} />
                            <div className="title"><h3>Deanna Hodges</h3><span>Spotify Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-feedback-wrap-item">
                        <div className="rating">
                            <h5>Theme Customization</h5>
                            <div><i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>

                        <p>Sportify Developer prioritizes collaboration and innovation, fostering a vibrant ecosystem where developers can share ideas, collaborate on projects, and learn from one another.</p>

                        <div className="client-info">
                            <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} src="assets/images/user4.jpg" style={{ color: 'transparent' }} />
                            <div className="title"><h3>Deanna Hodges</h3><span>Spotify Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-feedback-wrap-item">
                        <div className="rating">
                            <h5>Theme Customization</h5>
                            <div><i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>

                        <p>Sportify Developer prioritizes collaboration and innovation, fostering a vibrant ecosystem where developers can share ideas, collaborate on projects, and learn from one another.</p>

                        <div className="client-info">
                            <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} src="assets/images/user3.jpg" style={{ color: 'transparent' }} />
                            <div className="title"><h3>Deanna Hodges</h3><span>Spotify Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="single-feedback-wrap-item">
                        <div className="rating">
                            <h5>Theme Customization</h5>
                            <div><i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>

                        <p>Sportify Developer prioritizes collaboration and innovation, fostering a vibrant ecosystem where developers can share ideas, collaborate on projects, and learn from one another.</p>

                        <div className="client-info">
                            <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} src="assets/images/user2.jpg" style={{ color: 'transparent' }} />
                            <div className="title"><h3>Deanna Hodges</h3><span>Spotify Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default TestimonialSlider