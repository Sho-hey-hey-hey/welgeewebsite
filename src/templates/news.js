import React from 'react'
import { graphql } from "gatsby"
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
      <div id="news">
        <div className="date-label">
          <div className="category">ニュース</div>
          <div className="date">{frontmatter.date}</div>
        </div>
        <p className="news-title">{frontmatter.title}</p>
        <img src={frontmatter.featuredImage} />
      </div>
      <div dangerouslySetInnerHTML={{__html: html}}>
      </div>
      <style jsx={true}>{`
        #news {
          margin-top: 100px;
        }
        #news > .items {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 80%;
          max-width: 950px;
          margin: 0 auto;
        }
        #news > .items > .item {
          width: 250px;
          margin: 0 auto;
          margin-top: 30px;
        }
        #news > .items > .item > .category {
          width: 70px;
          height: 25px;
          background-color: #5CBBFF;
          color: white;
          border-radius: 4px;
          text-align: center;
          font-size: 13px;
          line-height: 25px;
        }
        #news > .items > .item > a > img {
          margin-top: 12px;
          width: 250px;
          height: 150px;
        }
        #news > .items > .item > .date {
          margin-top: 5px;
          font-size: 14px;
        }
        #news > .items > .item > .title {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.5;
        }
        #news > a.button {
          background-color: #FFDE59;
          color: white;
          margin-top: 50px;
        }
      `}</style>
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default NewsPage
