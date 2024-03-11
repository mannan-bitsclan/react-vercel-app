import React from 'react'
import BlogCard from '../components/Blog/BlogCard'
import AboutBanner from '../components/SecondBanner/AboutBanner'

const Blog = () => {
    return (
        <>
            <AboutBanner heading={"Blog"} />
            <section className='space-section'>
                <div className="container">
                    <div className="row">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog