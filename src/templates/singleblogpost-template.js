import React from 'react'
import { graphql, Link } from "gatsby"
import moment from "moment"
import Layout from '../components/Layout/Layout';
import socialImg from "../Assets/images/blog/socials.png"
import mediaImg from "../Assets/images/blog/man-one.jpg"
import defaultImg from '../Assets/images/hellowordpress.jpg'
import BlogsCategory from '../components/Category/BlogCategory';

const SingleBlogPost = ({ data, pageContext }) => {
    console.log(pageContext.slug);
    const blog = data.wpgraphql.postBy
  const commentData = blog.comments.nodes
  const tagsData = blog.tags.nodes
  return (
        <>
          <Layout>
            {/* <Seo title={pageContext.slug} /> */}
            <section>
              <div className="container">
                <div className="row">
                  <BlogsCategory />
                  <div className="col-sm-9">
                    <div className="blog-post-area">
                      <h2 className="title text-center">Latest From our Blog</h2>
                      <div className="single-blog-post">
                        <h3>{blog.title}</h3>
                        <div className="post-meta">
                          <ul>
                            <li>
                              <i className="fa fa-user"></i>
                              {blog.author.node.name}
                            </li>
                            <li>
                              <i className="fa fa-clock-o"></i> 1:33 pm
                            </li>
                            <li>
                              <i className="fa fa-calendar"></i>
                              {moment(blog.date).format("MMM Do YY")}
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
                          <img src={defaultImg} alt="Default" />
                        </Link>
                        <p>{blog.content}</p>
                      </div>
                    </div>
                    <div className="rating-area">
                      <ul className="ratings">
                        <li className="rate-this">Rate this item:</li>
                        <li>
                          <i className="fa fa-star color"></i>
                          <i className="fa fa-star color"></i>
                          <i className="fa fa-star color"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="color">(6 votes)</li>
                      </ul>
                      <ul className="tag">
                        <li>TAG:</li>
                        {tagsData.map(tag => {
                          const { name, slug } = tag
                          return(
                            <li>
                            <Link className="color" to={`/tags/${slug}`}>
                              {name} <span>/</span>
                            </Link>
                          </li>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="socials-share">
                      <Link to="">
                        <img src={socialImg} alt="" />
                      </Link>
                    </div>
                    <div className="media commnets">
                      <Link className="pull-left" to="#">
                        <img className="media-object" src={mediaImg} alt="Media" />
                      </Link>
                      <div className="media-body">
                        <h4 className="media-heading">Annie Davis</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="blog-socials">
                          <ul>
                            <li>
                              <Link to="">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="">
                                <i className="fa fa-dribbble"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="">
                                <i className="fa fa-google-plus"></i>
                              </Link>
                            </li>
                          </ul>
                          <Link className="btn btn-primary" to="">
                            Other Posts
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="response-area">
                      <h2>RESPONSES</h2>
                      <ul className="media-list">
                      {commentData.map(item => {
                        const { author, content, date, id } = item
                        const { avatar, name} = author.node
                        return(
                       <li className="media" key={id}>
                         <Link className="pull-left" to="#">
                           <img
                             className="media-object"
                             src={avatar.url}
                             alt="Media1"
                           />
                         </Link>
                         <div className="media-body">
                           <ul className="sinlge-post-meta">
                             <li>
                               <i className="fa fa-user"></i>{name}
                             </li>
                             <li>
                               <i className="fa fa-clock-o"></i> 1:33 pm
                             </li>
                             <li>
                               <i className="fa fa-calendar"></i> {date}
                             </li>
                           </ul>
                           <p>
                            {content}
                           </p>
                           <Link className="btn btn-primary" to="">
                             <i className="fa fa-reply"></i>Replay
                           </Link>
                         </div>
                       </li>
                        )
                      })}
                      </ul>
                    </div>
                    <div className="replay-box">
                      <div className="row">
                        <div className="col-sm-4">
                          <h2>Leave a replay</h2>
                          <form>
                            <div className="blank-arrow">
                              <label htmlFor="name">Your Name</label>
                            </div>
                            <span>*</span>
                            <input
                              type="text"
                              name="name"
                              placeholder="write your name..."
                            />
                            <div className="blank-arrow">
                              <label htmlFor="email">Email Address</label>
                            </div>
                            <span>*</span>
                            <input
                              type="email"
                              name="email"
                              placeholder="your email address..."
                            />
                            <div className="blank-arrow">
                              <label htmlFor="site">Web Site</label>
                            </div>
                            <input
                              name="site"
                              type="email"
                              placeholder="current city..."
                            />
                          </form>
                        </div>
                        <div className="col-sm-8">
                          <div className="text-area">
                            <div className="blank-arrow">
                              <label htmlFor="message">Your Name</label>
                            </div>
                            <span>*</span>
                            <textarea name="message" rows="11"></textarea>
                            <Link className="btn btn-primary" to="">
                              post comment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Layout>
        </>
      )
}

export default SingleBlogPost

export const query = graphql`
  query blogPostBySlug($slug: String) {
    wpgraphql {
      postBy(slug: $slug) {
        author {
          node {
            name
            firstName
            lastName
          }
        }
        comments {
          nodes {
            content
            date
            id
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        title
        date
        content
        id
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

