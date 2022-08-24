import { graphql } from 'gatsby';
import React from 'react'
import BlogPosts from '../components/Blogs/BlogPosts';
import Layout from '../components/Layout/Layout';

const BlogPostCategoryTemplate = ({ data, pageContext }) => {
    console.log(pageContext);
    const blogs = data.wpgraphql.categories.nodes;
  return (
    <>
      <Layout>
      {/* <Seo title={pageContext.slug}/> */}
        <section>
          <BlogPosts blogs={blogs} />
        </section>
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($slug: [String]) {
    wpgraphql {
      categories(where: {slug: $slug}) {
        nodes {
          name
          slug
          posts {
            nodes {
              author {
                node {
                  lastName
                  firstName
                  name
                }
              }
              content
              excerpt
              id
              date
              slug
              title
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPostCategoryTemplate