import React from 'react'
import './featurestyle.css'

const Featurecard = () => {

    const featureCardsContent = [
        {
            IconClass: "fas fa-eye",
            heading: "High Resolution",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
        },

        {
            IconClass: "fas fa-layer-group",
            heading: "Retina Ready Screen",
            shadowClass: "with-shadow",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
        },

        {
            IconClass: "fas fa-cloud",
            heading: "Cloud Storage",
            shadowClass: "with-shadow",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
        },

        {
            IconClass: "fas fa-leaf",
            heading: "Easy Editable Data",
            text: "Just log in with your mail account from play store and using whatever you want for your able business purpose.",
        },
    ]


    return (
        <>
            <div className="feature-cards-box">
                {
                    featureCardsContent.map((content, index) => {
                        return (
                            <>
                                <div className={`features-inner-card ${content.shadowClass}`}>
                                    <div className="icon">
                                        <i className={content.IconClass}></i>
                                        <h3>{content.heading}</h3>
                                    </div>
                                    <p className='common-text'>{content.text}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Featurecard