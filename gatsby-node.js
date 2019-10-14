const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
  
    const slug = path.basename(node.fileAbsolutePath, '.md')
    console.log('***************')
    console.log('++++++', slug)
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `)
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/news.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         slug: node.fields.slug,
//       },
//     })
//   })
// }
