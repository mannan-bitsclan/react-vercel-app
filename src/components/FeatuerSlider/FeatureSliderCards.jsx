import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './featureslidercard.css'

const FeatureSliderCards = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 1" />
                </div>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 2" />
                </div>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 3" />
                </div>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 1" />
                </div>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 2" />
                </div>
                <div className='slider-images'>
                    <img src="assets/images/screenshots2.png" alt="Image 3" />
                </div>
            </Slider>
        </>
    )
}

export default FeatureSliderCards