import React from 'react'
import AboutBanner from '../components/SecondBanner/AboutBanner';
import BlogDetailImage from '../components/BlogdetailImagetext/BlogDetailImage';
import BlogDetailsSIdebar from '../components/Detailssidebar/BlogDetailsSIdebar';

const Blogdetail = () => {

  return (
    <>
      <AboutBanner heading={"Blog Details"} />
      <section className='space-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 col-12">
              <BlogDetailImage />
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 col-12">
              <BlogDetailsSIdebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogdetail