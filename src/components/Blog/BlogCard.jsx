import React from 'react'
import './blogcardstyle.css'
import { Link } from 'react-router-dom'

const BlogCard = () => {

    const blogData = [
        {
            id: 1,
            tag: "Branding",
            text: "Branding involves developing strategy to create a point of differentiation",
            date: "April 14, 2023",
            NoOfComment: "0",
            image: "blog1.jpg"
        },
        {
            id: 2,
            tag: "Agency",
            text: "Design is a plan or specification for the construction of an object",
            date: "April 13, 2023",
            NoOfComment: "4",
            image: "blog2.jpg"
        },
        {
            id: 3,
            tag: "Marketing",
            text: "Branding involves developing strategy to create a point of differentiation",
            date: "April 12, 2023",
            NoOfComment: "2",
            image: "blog3.jpg"
        },
    ]

    return (
        <>
            {
                blogData.map((content, index) => {
                    return (
                        <>
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-blog-post">
                                    <div className="image">
                                        <Link className="d-block" to="/blogDetails">
                                            <img alt="blog" src={`assets/images/${content.image}`} />
                                        </Link>
                                        <a className="tag" href="/blog/">{content.tag}</a>
                                    </div>
                                    <div className="content">
                                        <ul className="meta">
                                            <li><i className="far fa-clock" />{content.date}</li>
                                            <li><i className="far fa-comment-dots"></i><a href="/blog/details/">({content.NoOfComment}) Comment</a></li>
                                        </ul>
                                        <h3>
                                            <a href="/blog/details/">{content.text}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default BlogCard