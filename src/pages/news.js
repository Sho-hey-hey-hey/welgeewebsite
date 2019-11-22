import React, {useState} from 'react'
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import NewsComponent from "../components/news"


const NewsPage  = () => {
  const [category, toggleCategory] = useState('All')
  const newsPage = useStaticQuery(graphql`
      query {
          allMarkdownRemark
          (sort: { fields: [frontmatter___date], order: DESC }) {
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
  const categories = ['Event', 'Media', 'News']
  const allNews = newsPage.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="header">
        <h1>News</h1>
        <ul>
          {categories.map((cat, i) => (
            <li key={i} className={cat} onClick={() => toggleCategory(cat)}>{cat}</li>
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
          display: flex;
          align-items: center;
        }
        .news-page {
          display: flex;
          flex-wrap: wrap;
          margin: 0 10%;
        }
        ul {
          display: flex;
          list-style: none;
          padding: 0;
        }
        li {
          margin: 0 0.5rem;
          padding: 0.2rem 0.4rem;
          cursor: pointer;
          color: white;
          border-radius: 4px;
          text-align: center;
          font-size: 14px;
          line-height: 25px;
        }
        li.Event {
          background: #FF7875;
        }
        li.Media {
          background: #2EB358;
        }
        li.News {
          background: #5CBBFF;
        }
      `}</style>
    </Layout>
  )
}

export default NewsPage;
