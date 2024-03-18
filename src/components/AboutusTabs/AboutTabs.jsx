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
            <section className='grey-background-box space-top-remove-mobile'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content" data-aos="fade-up">
                                <div className="tab-content-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='svg-one-left' viewBox="0 0 24 24" fill="currentColor"><path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path></svg>
                                    <p>{tabs[activeTab].content}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='svg-one-right' viewBox="0 0 24 24" fill="currentColor"><path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path></svg>
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