import React from 'react';

import backgroundImage from '../../images/about/awards-bg.png'
import AboutSectionTitle from "../helper/about-section-title"
const AwardsSection = () => {
  return (
    <section id="awards">
      <div className="filter">
        <AboutSectionTitle enTitle="Awards" jpTitle="受賞歴"/>
        <div className="contents">
          <p>
            <strong>INCO主催 Woman entrepreneur of the year Award (女性起業家アワード)</strong><br />
            2018グランプリ獲得<br />
            <br />
              <strong>ForbesJAPAN主催 30under30(日本を変える30歳未満の30人) </strong><br />
              に代表渡部がソーシャルアントレプレナー部門で選出
          </p>
          <hr />
            <p>
              <strong>
                平成30年度 中央ろうきん若者応援ファンド 採用団体<br />
                平成29年 東京都教育委員会助成金・スポーツ文化館チャレンジアシスト助成金<br />
                <br />
                  東京都・青山スタートアップアクセラレーションセンター（ASAC）第３期採択<br />
                  NPO法人ETIC・Makers University第1期採択<br />
                  NPO法人ETIC・SUSANOO第４期採択<br />
                  アメリカン・エキスプレス・サービス・アカデミー参加<br />
                  NPO法人ETIC 社会起業家イニシアチブ 採択
              </strong>
            </p>
        </div>
      </div>
      <style jsx>{`
        #awards {
          background-image: url(${backgroundImage});
          background-color: gray;
          background-size: cover;
          background-position: center;
          margin-top: 100px;
        }
        .filter {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.7);
          padding-top: 70px;
          padding-bottom: 50px;
          align-items: center;
          display: flex;
          flex-direction: column;
        }
        #awards > .filter {
          background-color: rgba(255, 255, 255, 0.85);
          padding: 100px 20px;
        }
        #awards .contents {
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #awards .contents p {
          text-align: left;
          color: #707070;
          line-height: 2rem;
        }
        #awards > .filter > .contents > hr {
          width: 100%;
          max-width: 800px;
          border: 1px solid #707070;
        }
        .section-title h1{
          justify-content: center;
          display: flex;
          margin: 0;
        }
        .section-title h4{
          justify-content: center;
          display: flex;
          margin: 0.8rem 0;
        }
      `}</style>
    </section>
  )
}

export default AwardsSection
