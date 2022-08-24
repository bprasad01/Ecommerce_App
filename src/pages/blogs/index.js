import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Blogs from '../../components/Blogs/Blogs'
import Layout from '../../components/Layout/Layout'

export const query = graphql`
  query {
    wpgraphql {
      posts {
        nodes {
          id
          slug
          title
          excerpt
          date
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`

const BlogPage = () => {
    const data = useStaticQuery(query);
    console.log(data);
    const blogs = data.wpgraphql.posts.nodes
    console.log(blogs);
  return (
    <>
        <Layout>
            <Blogs blogs={blogs}/>
        </Layout>
    </>
  )
}

export default BlogPage