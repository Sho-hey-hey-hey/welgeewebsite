import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"

const NewsComponent = props => {
  const { node } = props;
  const { frontmatter, fields } = node
  return (
    <div id="news">
      <div className="item">
        <div className="category">ニュース</div>
        <Link to={`/news/${fields.slug}`}>
          <img src={frontmatter.featuredImage} />
        </Link>
        <div className="date">{frontmatter.date}</div>
        <div className="title">{frontmatter.title}</div>
      </div>
      <style jsx={true}>{`
        #news {
          margin: 0 2rem;
        }
        .items {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 80%;
          max-width: 950px;
          margin: 0 auto;
        }
        .item {
          width: 250px;
          margin: 0 auto;
          margin-top: 30px;
        }
        .category {
          width: 70px;
          height: 25px;
          background-color: #5CBBFF;
          color: white;
          border-radius: 4px;
          text-align: center;
          font-size: 13px;
          line-height: 25px;
        }
        img {
          margin-top: 12px;
          width: 250px;
          height: 150px;
        }
        .date {
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
    </div>
  )
}

NewsComponent.propTypes = {
  node: PropTypes.shape().isRequired,
}

export default NewsComponent
