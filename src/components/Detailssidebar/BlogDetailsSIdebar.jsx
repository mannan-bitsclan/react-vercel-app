import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blogsidebarstyle.css'

const BlogDetailsSIdebar = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="widget-area">
                <div className="widget widget_search" data-aos="fade-up">
                    <form className="search-form">
                        <label>
                            <input className="search-field" placeholder="Search..." type="search" />
                        </label>
                        <button type="submit">
                            <i className="fas fa-search" />
                        </button>
                    </form>
                </div>


                <div className="widget widget_posts_thumb" data-aos="fade-up">
                    <h3 className="widget-title">Popular Posts</h3>
                    <article className="item">
                        <a className="thumb" href="/blog/details/">
                            <span className="fullimage cover" role="img" style={{ backgroundImage: 'url("assets/images/blog1.jpg")' }} />
                        </a>
                        <div className="info">
                            <h4 className="title usmall">
                                <a href="/blog/details/">Being The Best-Selling Smart Phone This Year</a>
                            </h4>
                            <span className="date">
                                <i className="fas fa-calendar-week"></i> Jan 15, 2023</span>
                        </div>
                    </article>
                </div>

                <div className="widget widget_categories" data-aos="fade-up">
                    <h3 className="widget-title">Categories</h3>
                    <ul>
                        <li>
                            <a href="/blog/with-right-sidebar/">Business<span className="post-count">(2)</span></a>
                        </li>
                        <li>
                            <a href="/blog/with-right-sidebar/">Privacy <span className="post-count">(5)</span></a>
                        </li>
                        <li>
                            <a href="/blog/with-right-sidebar/">Technology <span className="post-count">(6)</span></a>
                        </li>
                        <li>
                            <a href="/blog/with-right-sidebar/">Tips <span className="post-count">(2)</span></a>
                        </li>
                        <li>
                            <a href="/blog/with-right-sidebar/">Log in <span className="post-count">(1)</span></a>
                        </li>
                        <li>
                            <a href="/blog/with-right-sidebar/">Uncategorized <span className="post-count">(1)</span></a>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud" data-aos="fade-up">
                    <h3 className="widget-title">Tags</h3>
                    <div className="tagcloud">
                        <a href="/blog/with-right-sidebar/">Advertisment</a>
                        <a href="/blog/with-right-sidebar/">Business</a>
                        <a href="/blog/with-right-sidebar/">Life</a>
                        <a href="/blog/with-right-sidebar/">Lifestyle</a>
                        <a href="/blog/with-right-sidebar/">Fashion</a>
                        <a href="/blog/with-right-sidebar/">Ads</a>
                        <a href="/blog/with-right-sidebar/">Inspiration</a>
                        <a href="/blog/with-right-sidebar/">Blog</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogDetailsSIdebar