import { Link } from "gatsby"
import moment from "moment"
import React from "react"
import slugify from "slugify"
import BlogsCategory from "../Category/BlogCategory"
import defaultImg from '../../Assets/images/hellowordpress.jpg'

const BlogPosts = ({ blogs }) => {
  let blogData = []
  blogs.map(item => {
    return blogData = item.posts.nodes
  })

  return (
    <>
      <div style={{ "marginBottom" : "8px"}}>
      <div className="container">
        <div className="row">
          <BlogsCategory />
          <div className="col-sm-9">
            <div className="blog-post-area">
              <h2 className="title text-center">Latest From our Blog</h2>
              {blogData.map(blog => {
                console.log(blog)
                const { author, date, slug, title, excerpt, id } = blog
                const { firstName, lastName } = author.node
                const slugTitle = slugify(slug, { lower: true })
                return (
                  <div className="single-blog-post">
                    <h3>{title}</h3>
                    <div className="post-meta">
                      <ul>
                        <li>
                          <i className="fa fa-user"></i> {firstName + lastName}
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
                      <img src={defaultImg} alt={"default"} />
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
      </div>
    </>
  )
}

export default BlogPosts
