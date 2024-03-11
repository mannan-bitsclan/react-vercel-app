import React from 'react'
import Navbar from '../utils/Header/Navbar'
import FooterBox from '../utils/Footer/FooterBox'
import AboutBanner from '../components/SecondBanner/AboutBanner'
import GetinTouch from '../components/ContactgetinTouch/GetinTouch'
import ContactMap from '../components/ContactMap/ContactMap'
import ContactQuery from '../components/ContactQueries/ContactQuery'

const Contact = () => {
    return (
        <>
            {/* <Navbar /> */}
            <AboutBanner heading={"Contact Us"} />
            <GetinTouch />
            <ContactMap />
            <ContactQuery />
            {/* <FooterBox /> */}
        </>
    )
}

export default Contact