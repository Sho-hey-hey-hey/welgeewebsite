const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
  
    const slug = path.basename(node.fileAbsolutePath, '.md')
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  
    createNodeField({
      node,
      name: `contentType`,
      value: parsedFilePath.dir,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const newsPostTemplate = path.resolve('./src/templates/news.js')
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              contentType
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/news/${node.fields.slug}`,
      component: newsPostTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
