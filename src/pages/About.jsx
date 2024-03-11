import React from 'react'
import Navbar from '../utils/Header/Navbar'
import FooterBox from '../utils/Footer/FooterBox'
import AboutBanner from '../components/SecondBanner/AboutBanner'
import AboutUsContent from '../components/Aboutuscontent/AboutUsContent'
import AppProgressContent from '../components/AboutAppprogress/AppProgressContent'
import SoftwareIntigration from '../components/Aboutsoftwareintigation/SoftwareIntigration'
import BrandsSlider from '../components/BrandsSlider/BrandsSlider'
import OurExpertires from '../components/AboutExperties.jsx/OurExpertires'
import AppDownloadArea from '../components/Aboutappdownload/AppDownloadArea'
import ReviewCard from '../components/Reviewsection/ReviewCard'
import AboutTabs from '../components/AboutusTabs/AboutTabs'
import AboutVedio from '../components/Aboutvediobox/AboutVedio'

const About = () => {
    return (
        <>
            <AboutBanner heading="About Us"/>
            <AboutUsContent />
            <AppProgressContent />
            <AppDownloadArea />
            <div style={{ height: '50px' }}></div>
            <ReviewCard />
            <AboutTabs />
            <AboutVedio />
            <OurExpertires />
            <BrandsSlider />
            <SoftwareIntigration />
        </>
    )
}

export default About