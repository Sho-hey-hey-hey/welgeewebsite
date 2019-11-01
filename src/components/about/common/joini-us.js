import React from 'react'
import YellowButton from "../../helper/yellow.button"

import donationItemImage from '../../../images/join-donation.jpg'
import internItemImage from '../../../images/join-intern.jpg'
import SectionTitle from "../../helper/section-title"

const JoinUsSection = () => {
  return (
    <div id="join">
      <SectionTitle jpTitle="私たちの仲間になりませんか" enTitle="Join Us!"/>
      <div className="items">
        <div className="item">
          <img src={donationItemImage} />
          <h4>寄付をして応援する</h4>
          <p>
            WELgeeファミリーとして<br />
            難民の若者の未来への投資をしてみませんか？
          </p>
          <YellowButton title="more" link="/join-us/donation" />
        </div>
        <div className="item">
          <img src={internItemImage} />
          <h4>インターン・プロボノとして参加する</h4>
          <p>
            多様な仲間たちと共に<br />
            誰もが活躍できる世界を作りませんか?
          </p>
          <YellowButton title="more" link="/join-us/recruit"/>
        </div>
      </div>
      <style jsx>{`
        #join {
          margin-top: 100px;
          padding-top: 50px;
          padding-bottom: 50px;
          border-top: 1px solid #333333;
        }
        #join > h5 {
          font-family: "League Spartan";
          margin-top: 20px;
        }
        #join > .items {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 80%;
          max-width: 950px;
          margin: 0 auto;
        }
        .item {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          margin-top: 50px;
          text-align: center;
        }
        .item > img {
          width: 100%;
          border-radius: 4px;
        }
        .item > h5 {
          margin-top: 10px;
        }
        #join > .items > .item > p {
          margin-top: 10px;
          text-align: center;
          white-space: pre-wrap;
          line-height: 2rem;
        }
      `}</style>
    </div>
  )
}

export default JoinUsSection

