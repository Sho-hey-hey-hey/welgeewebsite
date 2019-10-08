import React from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import NewsComponent from "../components/news"

const NewsPage  = () => {
  const newsPage = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      id
                      frontmatter {
                          title
                          date
                          featuredImage
                      }
                  }
              }
          }
      }
  `)
  console.log('datatata', newsPage)
  const allNews = newsPage.allMarkdownRemark.edges
  console.log("Hellow", allNews)
  return (
    <Layout>
      <div>
        {allNews.map((news, i) => <NewsComponent key={i} news={news.node.frontmatter} />
        )}
      </div>
    </Layout>
  )
}

export default NewsPage;
