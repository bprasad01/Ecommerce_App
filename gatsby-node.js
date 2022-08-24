const path = require("path")
const slugify = require("slugify")

exports.onCreateWebpackConfig = ({ actions }) => {
    const { setWebpackConfig } = actions
    setWebpackConfig({
      externals: {
        jquery: "jQuery", // important: 'Q' capitalized
      },
    })
  }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const singleBlogPostTemplate = path.resolve(`src/templates/singleblogpost-template.js`)
  const blogPostCategoryTemplate = path.resolve(`src/templates/blogPostCategory-template.js`)


  const result = await graphql(`
      query GetSingleBlogPost {
        wpgraphql {
          posts {
            nodes {
              title
              slug
            }
          }
        }
      },
  `)

  const blogsRes = await graphql(`
  query GetBlogByCategory{
    wpgraphql {
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
  `)

  const blogs = result.data.wpgraphql.posts.nodes
  const blogsCategory = blogsRes.data.wpgraphql.categories.nodes

  blogs.forEach(blog => {
    createPage({
      path: `/blog/${blog.slug}`,
      component: singleBlogPostTemplate,
      context: {
        // passing slug for template to use get post
        slug: blog.slug,
      },
    })
  })

  blogsCategory.forEach(blogCategory => {
    createPage({
      path: `/blogcategory/${blogCategory.slug}`,
      component: blogPostCategoryTemplate,
      context: {
        // passing slug for template to use get post
        slug: blogCategory.slug,
      },
    })
  })
}