import React from 'react'
import './downloadstyle.css'

const Downloadbutton = () => {
    return (
        <>
            <div className="banner-buttons">
                <button className='app-store-button' data-aos="fade-up">
                    <img src="assets/images/apple-store.png" alt="" />
                    <div className="banner-btn-text">
                        <p>Download on the</p>
                        <h4>Google Play</h4>
                    </div>
                </button>

                <button className='play-store-button' data-aos="fade-up">
                    <img src="assets/images/play-store.png" alt="" />
                    <div className="banner-btn-text">
                        <p>Get It On</p>
                        <h4>Apple Store</h4>
                    </div>
                </button>
            </div>
        </>
    )
}

export default Downloadbutton