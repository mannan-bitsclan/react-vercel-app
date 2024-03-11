import React from 'react'
import Heading from '../Mainheading/Heading'
import './keyfeaturestyle.css'
import Buttonprimary from '../Buttons/Buttonprimary'

const Keyfeatures = () => {

    const keyFeature = [
        {
            title: "High Resolution",
            icon: "fas fa-eye",
        },
        {
            title: "Retina Ready Screen",
            icon: "fas fa-boxes",
            bg: "bg2"
        },
        {
            title: "Easy Editable Data",
            icon: "fas fa-leaf",
            bg: "bg3"
        },
        {
            title: "Fully Secured",
            icon: "fas fa-user-shield",
            bg: "bg4"
        },
        {
            title: "Cloud Storage",
            icon: "fas fa-cloud",
            bg: "bg5"
        },
        {
            title: "Responsive Ready",
            icon: "fas fa-chart-pie",
            bg: "bg6"
        },
        {
            title: "User Friendly",
            icon: "fas fa-users",
            bg: "bg4"
        },
        {
            title: "Award Winning App",
            icon: "fas fa-award",
            bg: "bg5"
        },
        {
            title: "Privacy Protected",
            icon: "fas fa-unlock-alt",
            bg: "bg6"
        },
        {
            title: "Lifetime Update",
            icon: "fas fa-sun",
        },
        {
            title: "Lightweight App",
            icon: "fas fa-lightbulb",
            bg: "bg2"
        },
        {
            title: "Top Rating App",
            icon: "fas fa-star",
            bg: "bg3"
        },
    ]


    return (
        <>
            <section className='space-section grey-background'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto text-center">
                            <Heading subheading={"KEY FEATURES"} mainheading={"Most Probably Included Best Features Ever"} />
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            keyFeature.map((content, index) => {
                                return (
                                    <>
                                        <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6" key={index}>
                                            <div className="single-features-item">
                                                <div className={`icon ${content.bg}`}>
                                                    <i className={content.icon}></i>
                                                </div>
                                                <h3>{content.title}</h3>
                                                <p className='common-text'>Just log in with your mail account from play store and using whatever you want for your able business purpose.</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-2 col-md-4">
                            <Buttonprimary btnPrimaryText={"Start Free Trial"} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Keyfeatures