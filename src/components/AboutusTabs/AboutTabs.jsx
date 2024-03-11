import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './abouttabsstyle.css'

const AboutTabs = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [activeTab, setActiveTab] = useState(0);

    const manageClick = (index) => {
        setActiveTab(index);
    };


    const tabs = [
        {
            title: 'user1.jpg',
            content: "Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.",
            name: "James Smith",
            position: "Web Developer"
        },
        {
            title: 'user2.jpg',
            content: "Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.",
            name: "Sarah Taylor",
            position: "Web Designer"
        },
        {
            title: 'user3.jpg',
            content: "Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business. Cloud based storage for your data backup just log in with your mail.",
            name: "Andy John",
            position: "Developer"
        },
        {
            title: 'user4.jpg',
            content: "The texap cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy of your business purpose text.",
            name: "David Warner",
            position: "Web Developer"
        },
        {
            title: 'user5.jpg',
            content: "Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.",
            name: "Alina Smith",
            position: "CEO"
        },
        {
            title: 'user6.jpg',
            content: "Instant free download from store cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.",
            name: "Licy Tie",
            position: "Web Developer"
        },
        {
            title: 'user7.jpg',
            content: "Most provabily best you can trust on it, just log in with your mail account from play store and using whatever you want for your business. Cloud based storage for your data backup just log in with your mail.",
            name: "Any Jones",
            position: "Web Designer"
        },
    ];

    return (
        <>
            <section className='grey-background-box'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content" data-aos="fade-up">
                                <div className="tab-content-box">
                                    <p>{tabs[activeTab].content}</p>
                                    <h6><span>{tabs[activeTab].name}</span> - {tabs[activeTab].position}</h6>
                                </div>
                            </div>

                            <div className="tab-buttons" data-aos="fade-up">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        className={index === activeTab ? 'active' : ''}
                                        onClick={() => manageClick(index)}
                                    >
                                        <img src={`assets/images/${tab.title}`} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTabs