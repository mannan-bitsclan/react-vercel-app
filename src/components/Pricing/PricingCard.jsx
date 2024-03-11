import React from 'react'
import './pricingcardstyle.css'

const PricingCard = ({ catogory, tag, price, liveSport }) => {
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-6 space-top-mobile">
                <div className="single-app-pricing-box with-border-radius">
                    <div className="title">
                        <h3>{catogory}</h3>
                        <p>Powerful &amp; awesome elements</p>
                    </div>
                    <span className="popular">{tag}</span>
                    <div className="price">
                        ${price} <span>/Month</span>
                    </div>
                    <a className="default-btn d-block text-center" href="/sign-in/">Purchase Plan</a>
                    <ul className="features-list">
                        <li><i className="fas fa-check"></i> Up to 10 Website</li>
                        <li><i className="fas fa-check"></i> Lifetime free Support</li>
                        <li><i className="fas fa-check"></i> 10 GB Dedicated Hosting free</li>
                        <li><i className="fas fa-check"></i> 24/7 Support</li>
                        <li><i className="fas fa-check"></i> SEO Optimized</li>
                        <li>{liveSport && <i className="fas fa-times"></i>} {liveSport}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PricingCard