import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './featureiconstyle.css'

const FeatureIconsCard = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const featureCardIconText = [
    {
      text: "User Friendly",
      icon: "fas fa-mobile"
    },

    {
      text: "Award Winning App",
      icon: "fas fa-medal",
      IconClass: "bg2"
    },

    {
      text: "Privacy Protected",
      icon: "fas fa-fingerprint"
    },

    {
      text: "Lifetime Update",
      icon: "far fa-gem",
      IconClass: "bg2"
    },
  ]

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {
            featureCardIconText.map((content, index) => {
              return (
                <>
                  <div className="col-md-3 col-sm-6 col-6" data-aos="fade-up">
                    <div className="features-box-card">
                      <div className={`icon ${content.IconClass}`}>
                        <i className={content.icon}></i>
                      </div>
                      <h3>{content.text}</h3>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default FeatureIconsCard