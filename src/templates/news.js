import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PropTypes from 'prop-types';
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug:  { eq: $slug } }) {
            frontmatter {
                title
                date
                featuredImage
            }
            html
        }
    }
`

const NewsPage = ({data}) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <div className="arrow-back">
        <Link to="/news" style={{textDecoration: 'none', color: '#6A6A6A', width: 240}} >
          <span>{'>'}</span>
          <span>News</span>
        </Link>
      </div>
      <div id="news">
        <div className="date-label">
          <div className="category">ニュース</div>
          <div className="date">{frontmatter.date}</div>
        </div>
        <p className="news-title">{frontmatter.title}</p>
        <img  className="news-image" src={frontmatter.featuredImage} />
      </div>
      <div className="news-content" dangerouslySetInnerHTML={{__html: html}}>
      </div>
      <style jsx={true}>{`
        #news {
          margin: 3rem 10% 0 10%;
        }
        .arrow-back {
          margin: 2rem 10% 0 10%;
        }
        .arrow-back span {
          font-size: 14px;
          margin-right: 0.5rem;
        }
        #news .category {
          width: 70px;
          height: 25px;
          background-color: #5CBBFF;
          color: white;
          border-radius: 4px;
          text-align: center;
          font-size: 13px;
          line-height: 25px;
        }
        #news img {
          margin-top: 12px;
          width: 100%;
          // height: 150px;
        }
        #news .date {
          margin: 0.6rem 0;
          font-size: 16px;
        }
        .news-title {
          font-size: 2rem;
          line-height:  3rem;
        }
        .news-content {
          margin: 0 10%;
        }
      `}</style>
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default NewsPage
