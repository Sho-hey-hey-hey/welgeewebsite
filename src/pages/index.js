import React from 'react'
import homeTopImage from "../images/top-img.jpg";
import Banner from "../components/home/banner";
import Welgee from '../components/home/welgee';
import HomePassion from "../components/home/passion";
import Layout from "../components/layout"
import JoinUsSection from "../components/common/joini-us"
import { graphql, useStaticQuery } from "gatsby"
import NewsComponent from "../components/news"
import SectionTitle from "../components/common/section-title"
import ProgramSection from "../components/home/program"
import PartnerSection from "../components/about/partener"

import bannerImg from '../images/campaign.png'

const Home = () => {
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
  const latestTwoNews = newsPage.allMarkdownRemark.edges.slice(0, 3)
  return (
  <Layout>
    <div className="container">
      <img src={homeTopImage} className="topImg"/>
      <div className="newsBox">
        <Banner image={bannerImg}/>
        <div id="news">
          <SectionTitle jpTitle="お知らせ" enTitle="News"/>
          <div className="items">
            {latestTwoNews.length > 0 && latestTwoNews.map((news, i) => (
              <NewsComponent key={i} node={news.node}/>
            ))}
          </div>
        </div>
        <Welgee />
      </div>
      <HomePassion />
      <ProgramSection />
      <PartnerSection />
      <JoinUsSection />
      <style jsx>{`
        container {
          justify-content: center;
        }
        .topImg {
          width: 100%;
          object-fit: cover;
          height: 45rem;
        }
        .newsBox {
          width: 70%;
          margin: auto;
          margin-bottom: 5rem;
        }
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
      `}</style>
    </div>
  </Layout>
)
}

export default Home
