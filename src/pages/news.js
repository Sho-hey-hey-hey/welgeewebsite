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
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)
  const allNews = newsPage.allMarkdownRemark.edges
  return (
    <Layout>
      <div className="news-page">
        {allNews.map((news, i) => <NewsComponent key={i} node={news.node} />
        )}
      </div>
      <style jsx>{`
        .news-page {
          display: flex;
          flex-wrap: wrap;
          margin: 0 10%;
        }
      `}</style>
    </Layout>
  )
}

export default NewsPage;
