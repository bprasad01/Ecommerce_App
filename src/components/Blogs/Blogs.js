import { Link } from 'gatsby';
import moment from 'moment';
import React from 'react'
import slugify from 'slugify';
import defaultImage from '../../Assets/images/hellowordpress.jpg'
import BlogsCategory from '../Category/BlogCategory';

const Blogs = ({blogs}) => {
    console.log(blogs);
  return (
    <>
        <div className="container">
        <div className="row">
          <BlogsCategory />
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Latest From our Blog</h2>
              {blogs.map(blog => {
                const {
                  author,
                  id,
                //   featuredImage,
                  date,
                  title,
                  excerpt,
                  slug,
                } = blog
                const { name } = author.node
                // const { altText, sourceUrl } = featuredImage.node
                const slugTitle = slugify(slug, { lower: true })
                return (
                  <div className="single-blog-post">
                    <h3>{title}</h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i> {name}
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> 1:33 pm
                        </li>
                        <li>
                          <i className="fa fa-calendar"></i>{" "}
                          {moment(date).format("MMM Do YY")}
                        </li>
                      </ul>
                      <span>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-half-o"></i>
                      </span>
                    </div>
                    <Link to="">
                      <img src={defaultImage} alt={"Blogs"} />
                    </Link>
                    <p>{excerpt}</p>

                    <Link
                      key={id}
                      className="btn btn-primary"
                      to={`/blog/${slugTitle}`}
                    >
                      Read More
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs