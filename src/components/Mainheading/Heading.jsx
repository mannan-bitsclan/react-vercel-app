import React, { useEffect } from 'react'
import './heading.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ mainheading, subheading }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="heading-box">
                <h3 data-aos="fade-up">{subheading}</h3>
                <h1 data-aos="fade-up">{mainheading}</h1>
            </div>
        </>
    )
}

export default Heading