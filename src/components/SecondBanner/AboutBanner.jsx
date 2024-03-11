import React from 'react'
import './aboutstyle.css'
import BreadCrumps from '../Beaadcrumps/BreadCrumps'

const AboutBanner = ({ heading }) => {
    return (
        <>
            <section className='second-banner-background' style={{ backgroundColor: "#eef5fc" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className='second-banner-heading'>{heading}</h1>
                            <BreadCrumps />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutBanner