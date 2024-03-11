import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './buttonstyle.css'

const Buttonprimary = ({ btnPrimaryText }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <a href="#" data-aos="fade-up" className='btn-background-dark'>{btnPrimaryText}</a>
        </>
    )
}

export default Buttonprimary