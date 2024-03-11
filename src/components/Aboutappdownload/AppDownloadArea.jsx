import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './appdownloadareastyle.css'

const AppDownloadArea = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="app-download-area">
                <div className="container">
                    <div className="app-download-inner">
                        <div className="row align-items-center reverse-mobile">
                            <div className="col-lg-6 col-md-12">
                                <div className="app-download-content">
                                    <span className="sub-title">DOWNLOAD APP</span>
                                    <h2>Let's Get Your Free Copy From Apple and Play Store</h2>
                                    <p>Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.</p>
                                    <div className="btn-box">
                                        <a href="https://play.google.com/store/apps" className="playstore-btn" target="_blank">
                                            <img alt="image" loading="lazy" width={27} height={30} decoding="async" data-nimg={1} src="assets/images/play-store.png" style={{ color: 'transparent' }} />
                                            Get It On
                                            <span>Google Play</span>
                                        </a>
                                        <a href="https://www.apple.com/app-store/" className="applestore-btn" target="_blank">
                                            <img alt="image" loading="lazy" width={34} height={35} decoding="async" data-nimg={1} src="assets/images/apple-store.png" style={{ color: 'transparent' }} />
                                            Download on the<span>Apple Store</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-lg-6 col-md-12">
                                <div className="app-download-image">
                                    <img alt="app-img" loading="lazy" width={957} height={1083} decoding="async" data-nimg={1} src="assets/images/app-img3.png" style={{ color: 'transparent' }} />
                                </div>
                            </div>
                        </div>
                        <div className="lines">
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AppDownloadArea