import React from 'react'
import bannerImg from '../../images/campaign.png'
const HomeBanner = () => (
  <div className="bannerBox">
    <img src={bannerImg}/>
    <style jsx={true}>{`
      .bannerBox {
        margin: 5rem 0;
      }
      img {
        width: 100%;
      }
    `}</style>
  </div>
)

export default HomeBanner
