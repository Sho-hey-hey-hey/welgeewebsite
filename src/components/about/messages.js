import React from 'react';
import AboutSectionTitle from "../common/about-section-title"
import YellowButton from "../common/yellow.button"

import supporter01Image from '../../images/about/supporter-1.jpg'
import supporter02Image from '../../images/about/supporter-2.jpg'
import supporter03Image from '../../images/about/supporter-3.jpg'

const MessagesSection = () => {
  return (
    <section id="messages">
      <AboutSectionTitle enTitle="Messages" jpTitle="応援の声" />
        <div className="items">
          <div className="item">
            <img src={supporter01Image} />
            <h3>船橋 力さん</h3>
            <p>
              文部科学省<br />
              官民協働海外留学創出プロジェクトトビタテ！留学JAPANディレクター
            </p>
        </div>
        <div className="item">
          <img src={supporter02Image} />
            <h3>関根健次さん</h3>
            <p>
              ユナイテッドピープル株式会社<br />
              代表取締役
            </p>
        </div>
        <div className="item">
          <img src={supporter03Image} />
            <h3>菅 大介さん</h3>
            <p>
              株式会社チェリオコーポレーション<br />
              専務取締役
            </p>
        </div>
      </div>
      <div className="yellow-button">
        <YellowButton title="more" link="/about/supporters"/>
      </div>
      <style jsx>{`
        #messages {
          margin-top: 100px;
        }
        #messages > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }
        #messages > .items > .item {
          width: 100%;
          max-width: 330px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #messages > .items > .item > img {
          display: block;
          width: 250px;
          margin: 0 auto;
          border-radius: 125px;
        }
        #messages > .items > .item > h3 {
          margin-top: 30px;
        }
        #messages > .items > .item > p {
          margin-top: 30px;
          font-weight: bold;
        }
        #partners {
          margin-top: 100px;
        }
        #partners > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          width: 80%;
          max-width: 1080px;
          margin: 0 auto;
        }
        #partners > .items > img {
          margin: 0 auto;
          margin-top: 40px;
          width: 190px;
        }
        .yellow-button {
          width: 80%;
          margin: 1rem auto;
          text-align: center;
          margin-top: 3rem;
        }
      `}</style>
    </section>
  )
}

export default MessagesSection;
