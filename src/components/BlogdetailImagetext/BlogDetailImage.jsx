import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blogdetailtextstyle.css'
import BlogCard from '../Blog/BlogCard'

const BlogDetailImage = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="blog-detail-image" data-aos="fade-up">
                <img src="assets/images/blog1.jpg" alt="" />
                <a className="image-tag">Branding</a>
            </div>

            <div className="entry-meta" data-aos="fade-up">
                <ul>
                    <li>
                        <i className="fas fa-calendar-week"></i>
                        March 14, 2023
                    </li>
                    <li>
                        <i className="fas fa-clock"></i>
                        <a href="#">(4) Comments</a>
                    </li>
                </ul>
            </div>

            <h1 className="detail-heading" data-aos="fade-up">Branding involves developing strategy to create a pin point of differentiation the marketing</h1>
            <p className="common-text" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sequi, numquam voluptatibus similique amet autem necessitatibus. Officiis, quisquam ipsa in dolore culpa expedita maxime eligendi aperiam minima suscipit animi neque.</p>
            <p className="common-text" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quis mollitia eius numquam libero provident similique vero voluptas quo? Obcaecati quis nulla quae adipisci distinctio assumenda provident illo aliquid reprehenderit alias quam minima, aliquam asperiores blanditiis necessitatibus nostrum eius hic iste fugiat sunt aperiam ipsum consectetur voluptate laborum! Nisi, modi.
            </p>

            <ul className="wp-block-gallery columns-3" data-aos="fade-up">
                <li className="blocks-gallery-item">
                    <figure>
                        <img alt="image" loading="lazy" width={865} height={645} decoding="async" data-nimg={1} src="assets/images/blog1.jpg" style={{ color: 'transparent' }} />
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img alt="image" loading="lazy" width={865} height={645} decoding="async" data-nimg={1} src="assets/images/blog1.jpg" style={{ color: 'transparent' }} />
                    </figure>
                </li>

                <li className="blocks-gallery-item">
                    <figure>
                        <img alt="image" loading="lazy" width={865} height={645} decoding="async" data-nimg={1} src="assets/images/blog1.jpg" style={{ color: 'transparent' }} />
                    </figure>
                </li>
            </ul>
            <h2 className="sub-heading-details" data-aos="fade-up">Four major elements that we offer:</h2>
            <p className="common-text" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum at quas, itaque error accusamus praesentium modi vitae eveniet necessitatibus eum in architecto? Sit exercitationem quis beatae accusamus neque. Maiores reiciendis amet dolore quod officiis voluptatem earum deserunt ipsam error praesentium.</p>

            <ul className='details-list-text' data-aos="fade-up">
                <li>Scientific skills for getting a better result</li>
                <li>Communication skills to getting in touch</li>
                <li>A career overview opportunity available</li>
                <li>A good work environment for work</li>
            </ul>

            <div className="article-footer" data-aos="fade-up">
                <div className="post-author-meta" >
                    <div className="d-flex align-items-center">
                        <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} src="assets/images/user6.jpg" style={{ color: 'transparent' }} />
                        <div className="title">
                            <span className="name">By <a href="/blog/">EnvyTheme</a></span>
                            <span className="date">March 17, 2023</span>
                        </div>
                    </div>
                </div>
                <div className="article-share">
                    <ul className="social">
                        <li><span>Share:</span></li>
                        <li><a href="https://www.facebook.com/" className="facebook" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" className="twitter" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" className="linkedin" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" className="instagram" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="related-post" data-aos="fade-up">
                <h2 className="sub-heading-details">Related Post</h2>
            </div>

            <div className="container mt-4 p-0" data-aos="fade-up">
                <div className="row blog-detail-cards">
                    <BlogCard />
                </div>
            </div>

            <div className="related-post" data-aos="fade-up">
                <h2 className="sub-heading-details">2 Comments:</h2>
            </div>

            <div className="comments-area">
                <ol className="comment-list">
                    <li className="comment">
                        <div className="comment-body">
                            <footer className="comment-meta" data-aos="fade-up">
                                <div className="comment-author vcard">
                                    <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} className="avatar" src="assets/images/user1.jpg" style={{ color: 'transparent' }} />
                                    <b className="fn">John Jones</b>
                                </div>
                                <div className="comment-metadata">
                                    <span>January 01, 2023 at 10:59 am</span>
                                </div>
                            </footer>
                            <div className="comment-content" data-aos="fade-up">
                                <p className='common-text'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </div>
                        </div>
                    </li>
                </ol>

                <ol className="children" >
                    <li className="comment">
                        <div className="comment-body" >
                            <footer className="comment-meta" data-aos="fade-up">
                                <div className="comment-author vcard">
                                    <img alt="user" loading="lazy" width={300} height={300} decoding="async" data-nimg={1} className="avatar" src="assets/images/user1.jpg" style={{ color: 'transparent' }} />
                                    <b className="fn">John Jones</b>
                                </div>
                                <div className="comment-metadata">
                                    <span>January 01, 2023 at 10:59 am</span>
                                </div>
                            </footer>
                            <div className="comment-content" data-aos="fade-up">
                                <p className='common-text'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>

            <div className="related-post">
                <h2 data-aos="fade-up" className="sub-heading-details">Leave A Reply</h2>
                <p data-aos="fade-up" className='common-text'><i>Your email address will not be published.Required fields are marked *</i></p>
            </div>

            <form action="" className='contact-form'>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                            <div className="form-group">
                                <input placeholder="Your name*" className="form-control" required name="name" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6" data-aos="fade-up">
                            <div className="form-group">
                                <input placeholder="Your email*" className="form-control" required name="name" />
                            </div>
                        </div>

                        <div className="col-lg-12" data-aos="fade-up">
                            <div className="form-group">
                                <input placeholder="Website" className="form-control" required name="name" />
                            </div>
                        </div>

                        <div className="col-lg-12" data-aos="fade-up">
                            <div className="form-group">
                                <textarea placeholder="Your Comment..." className="form-control text-area-height"></textarea>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <p data-aos="fade-up" className="comment-form-cookies-consent"><input id="comment-cookies-consent" type="checkbox" defaultValue="yes" name="comment-cookies-consent" /><label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>

                            <p data-aos="fade-up" className="form-submit"><input id="submit" className="submit" type="submit" value="Post A Comment" name="submit" /></p>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default BlogDetailImage