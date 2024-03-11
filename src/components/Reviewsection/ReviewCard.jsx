import React from 'react'
import './reviewcardstyle.css'

const ReviewCard = () => {

    const reviewCardContent = [
        {
            icon: "fas fa-download",
            heading: "Total Downloads",
            digit: "10",
            value: "M"
        },

        {
            icon: "fas fa-star",
            heading: "Total Reviews",
            digit: "799",
            value: "K"
        },

        {
            icon: "fas fa-globe",
            heading: "Worldwide Countries",
            digit: "150",
            value: "+"
        },

        {
            icon: "fas fa-user",
            heading: "Active Users",
            digit: "5",
            value: "M"
        },
    ]

    return (
        <>
            <section className='space-section gradient-funfacts-area'>
                <div className="container">
                    <div className="row">


                        {
                            reviewCardContent.map((content, index) => {
                                return (
                                    <>
                                        <div className="col-lg-3 col-sm-6 col-md-6" key={index}>
                                            <div className="single-funfacts-card">
                                                <div className="icon">
                                                    <i className={content.icon}></i>
                                                </div>
                                                <p>{content.heading}</p>
                                                <h3>
                                                    {content.digit}<span className="sign">{content.value}</span>
                                                </h3>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReviewCard