import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './keyfeaturecard.css'

const KeyFeatureCard = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const keyFeatureCardText = [
        {
            headingText: "High Resolution",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "far fa-eye"
        },
        {
            headingText: "Retina Ready Screen",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "fas fa-layer-group",
            colorClass: "bg-color-two",
            iconbg2: "bg2"
        },
        {
            headingText: "Easy Editable Data",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "fas fa-leaf"
        },
        {
            headingText: "Fully Secured",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "fas fa-user-shield",
            colorClass: "bg-color-two",
            iconbg2: "bg2"
        },
        {
            headingText: "Cloud Storage",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "fas fa-cloud"
        },
        {
            headingText: "Responsive Ready",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
            icon: "fas fa-chart-pie",
            colorClass: "bg-color-two",
            iconbg2: "bg2"
        }
    ]

    return (
        <>
            {
                keyFeatureCardText.map((content) => {
                    return (
                        <>
                            <div className="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up">
                                <div className={`key-features-card ${content.colorClass} style-two`}>
                                    <div className={`icon ${content.iconbg2}`}>
                                        <i className={content.icon}></i>
                                    </div>
                                    <h3>{content.headingText}</h3>
                                    <p className='common-text'>{content.text}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default KeyFeatureCard