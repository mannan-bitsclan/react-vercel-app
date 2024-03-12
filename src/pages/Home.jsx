import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css'
import Navbar from '../utils/Header/Navbar'
import Herosection from '../components/Herosection/Herosection'
import Heading from '../components/Mainheading/Heading'
import Buttonprimary from '../components/Buttons/Buttonprimary'
import Buttonsecondry from '../components/Buttons/Buttonsecondry'
import Featurecard from '../components/Featurecard/Featurecard'
import FeatureIconsCard from '../components/FeatureIcons/FeatureIconsCard'
import KeyFeatureCard from '../components/Keyfeature/KeyFeatureCard';
import FeatureSliderCards from '../components/FeatuerSlider/FeatureSliderCards';
import ReviewCard from '../components/Reviewsection/ReviewCard';
import Downloadbutton from '../components/Downloadbuttons/Downloadbutton';
import PricingCard from '../components/Pricing/PricingCard';
import BrandsSlider from '../components/BrandsSlider/BrandsSlider';
import BlogCard from '../components/Blog/BlogCard';
import FooterBox from '../utils/Footer/FooterBox';
import TestimonialSlider from '../components/Testimonials/TestimonialSlider';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <Herosection />
            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 xl:mt-5 lg:mt-5">
                            <div className="text-box-feature">
                                <Heading subheading={"BEST FEATURES"} mainheading={"Most Probably Included Best Features Ever"} />
                                <p className='common-text' data-aos="fade-up">Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>
                                <p className="common-text" data-aos="fade-up">Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want chance its just began.</p>
                                <div className="d-flex align-items-center mt-4">
                                    <Buttonprimary btnPrimaryText={"Start Free Trail"} />
                                    <Buttonsecondry btnSecondryText={"See All Features"} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6" data-aos="fade-up">
                            <Featurecard />
                        </div>
                    </div>

                    <FeatureIconsCard />
                </div>
            </section>

            <section className='space-section space-remove-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-us-image">
                                <img src="assets/images/about-2.png" alt="" />
                            </div>
                        </div>

                        <div className="col-md-6 app-about-content">
                            <Heading subheading={"ABOUT US"} mainheading={"Most Probably You Are Getting Best App Ever"} />
                            <p data-aos="fade-up" className="common-text">Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.</p>

                            <ul className="list">
                                <li data-aos="fade-up">
                                    <div className="icon bg-3">
                                        <i className="fas fa-layer-group"></i>
                                    </div>
                                    <h3>Trusted and Reliable</h3>
                                    <p className='common-text'>Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business.</p>
                                </li>
                                <li data-aos="fade-up">
                                    <div className="icon bg-3">
                                        <i className="fas fa-medal"></i>
                                    </div>
                                    <h3>Cloud Storage</h3>
                                    <p className='common-text'>Just log in with your mail account from play store and using whatever you want for your business purpose.</p>
                                </li>
                            </ul>

                            <div className="d-flex align-items-center">
                                <Buttonprimary btnPrimaryText={"Start Free Trail"} />
                                <Buttonsecondry btnSecondryText={"See All Features"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='space-section grey-background'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-9 m-auto text-center">
                            <Heading subheading={"KEY FEATURES"} mainheading={`Most Probably Included Best Features Ever`} />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <KeyFeatureCard />
                    </div>

                    <div className="row mt-4">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 m-auto">
                            <Buttonprimary btnPrimaryText={"Start Free Trial"} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-9 m-auto text-center">
                            <Heading subheading={"APP SCREENS"} mainheading={`Beautifully Crafted All App Screenshots`} />
                        </div>
                    </div>

                    <div className="row mt-5" data-aos="fade-up">
                        <div className="col-md-12">
                            <FeatureSliderCards />
                        </div>
                    </div>
                </div>
            </section>

            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-up">
                            <div className="app-intro-video-box">
                                <img alt="video-img" loading="lazy" width={750} height={400} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="assets/images/video-2.jpg" />
                                <div className="video-btn popup-youtube">
                                    <i className="fas fa-play" />
                                </div>
                                <div className="intro-video-shape">
                                    <img alt="image" loading="lazy" width={159} height={96} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="assets/images/shape-3-vedio.png" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 pt-4">
                            <Heading subheading={"INTRO VIDEO"} mainheading={`Watch Our Most Watched App Video`} />
                            <p data-aos="fade-up" className='common-text'>Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began. Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.Never missyour chance its just began.</p>

                            <div className="btn-vedio-sec">
                                <Buttonprimary btnPrimaryText={"Get Started"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReviewCard />

            <section className='space-section'>
                <div className="container">
                    <div className="row reverse-mobile">
                        <div className="col-md-6 position-relative">
                            <img src="assets/images/shape-1.png" className='download-app-image' alt="" />
                            <Heading subheading={"DOWNLOAD APP"} mainheading={`Let's Get Your Free Copy From Apple and Play Store`} />
                            <p data-aos="fade-up" className="common-text">Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.</p>

                            {/* <Downloadbutton /> */}
                            <img src="assets/images/shape-2.png" className='download-app-image-2' alt="" />
                        </div>

                        <div className="col-md-6" data-aos="fade-up">
                            <div className="banner-image">
                                <img src="assets/images/download-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='space-section grey-background'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-9 text-center m-auto">
                            <Heading subheading={"CLIENT REVIEWS"} mainheading={`What Our Customer Say About Us`} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <TestimonialSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 xl:mt-5 lg:mt-5">
                            <Heading subheading={"PRICING TABLE"} mainheading={`No Hidden Charge Applied, Choose Your Plan`} />
                            <Buttonsecondry btnSecondryText={"See All Pricing Plan"} />
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <PricingCard catogory={"Small Team"} price={"49"} liveSport={"Live Support"} tag={"Most Popular"} />
                                <PricingCard catogory={"Business"} price={"69"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <BrandsSlider />

            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Heading subheading={"BLOG POST"} mainheading={"Latest Article From Our Blog"} />
                        </div>
                    </div>

                    <div className="row mt-4" data-aos="fade-up">
                        <BlogCard />
                    </div>
                </div>
            </section>

            {/* <FooterBox /> */}
        </>
    )
}

export default Home