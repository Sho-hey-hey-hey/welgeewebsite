import React from 'react'

const NewsComponent = props => {
  const { news } = props;
  console.log("+++++", news)
  return (
    <div id="news">
      <div className="item">
        <div className="category">ニュース</div>
        <a href="/news/news-11.html">
          <img
            src={news.featuredImage} /></a>
        <div className="date">{news.date}</div>
        <div className="title">{news.title}</div>
      </div>
      <style jsx={true}>{`
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

export default NewsComponent
