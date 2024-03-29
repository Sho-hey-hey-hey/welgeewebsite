import React from 'react'
import homeTopImage from "../images/top-img.jpg";
import HomeBanner from "../components/home/home-banner";
import HomeNews from "../components/home/news";
import Welgee from '../components/home/welgee';
import HomePassion from "../components/home/passion";
import Layout from "../components/layout"
import JoinUsSection from "../components/common/joini-us"
const Home = () => (
  <Layout>
    <div className="container">
      <img src={homeTopImage} className="topImg"/>
      <div className="newsBox">
        <HomeBanner/>
        <HomeNews />
        <Welgee />
      </div>
      <HomePassion />
      <JoinUsSection />
      <style jsx={true}>{`
        container {
          justify-content: center;
        }
        .topImgBox {
       
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
      `}</style>
    </div>
  </Layout>
)

export default Home
