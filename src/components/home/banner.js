import React from 'react'
const Banner = ({image, style}) => (
  <div style={style} className="bannerBox">
    <img src={image}/>
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

export default Banner
