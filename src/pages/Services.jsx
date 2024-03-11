import React from 'react'
import AboutBanner from '../components/SecondBanner/AboutBanner'
import Keyfeatures from '../components/KeyFeatures/Keyfeatures'
import AppDownloadArea from '../components/Aboutappdownload/AppDownloadArea'

const Services = () => {
    return (
        <>
            <AboutBanner heading={"Services"} />
            <Keyfeatures />
            <div style={{ height: '50px' }}></div>
            <AppDownloadArea />
            <div style={{ height: '50px' }}></div>
        </>
    )
}

export default Services