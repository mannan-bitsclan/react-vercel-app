import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Buttonsecondry = ({ btnSecondryText }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <a href="#" data-aos="fade-up" className='btn-secondry-light'>{btnSecondryText}</a>
        </>
    )
}

export default Buttonsecondry