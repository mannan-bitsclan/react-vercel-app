import React from 'react'
import './brandsliderstyle.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
    };

    return (
        <>
            <section className='space-section slider-back-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className='brands-slider-text'>Trusted by world famous companies:</h1>
                        </div>

                        <div className="col-md-12">
                            <Slider {...settings}>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner1.png" alt="Image 1" />
                                </div>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner2.png" alt="Image 2" />
                                </div>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner5.png" alt="Image 3" />
                                </div>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner6.png" alt="Image 1" />
                                </div>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner1.png" alt="Image 2" />
                                </div>
                                <div className='slider-images-brand'>
                                    <img src="assets/images/partner2.png" alt="Image 3" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandsSlider