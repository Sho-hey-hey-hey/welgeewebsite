import React, {useState} from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import NewsComponent from "../components/news"


const NewsPage  = () => {
  const [category, toggleCategory] = useState('All')
  const newsPage = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      id
                      frontmatter {
                          title
                          date
                          tags
                          featuredImage
                      }
                      fields {
                          slug
                          contentType
                      }
                  }
              }
          }
      }
  `)
  
  const filterNews = (items, constraints) => {
    return items.filter(item =>
      constraints.every(constraint =>
          item.node.frontmatter.tags.some(obj => obj === constraint)
      )
    );
  }
  const categories = ['Event', 'Media', 'Report']
  const allNews = newsPage.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="header">
        <h1>News</h1>
        <ul>
          {categories.map((cat, i) => (
            <li key={i} onClick={() => toggleCategory(cat)}>{cat}</li>
          ))}
          
        </ul>
      </div>
      <div className="news-page">
        {category === 'All' && allNews.map((news, i) => <NewsComponent key={i} node={news.node} />)}
        {categories.map(cat => cat === category && filterNews(allNews, [category]).map((news, i) => <NewsComponent key={i} node={news.node} />))}
  
      </div>
      <style jsx>{`
        .header {
          margin: 2rem 0;
        }
        .news-page {
          display: flex;
          flex-wrap: wrap;
          margin: 0 10%;
        }
        li {
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}

export default NewsPage;
