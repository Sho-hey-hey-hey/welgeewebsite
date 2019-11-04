import React from 'react';
import backgroundImage from '../../images/about/issue-bg.jpg'
import YellowButton from "../common/yellow.button"
import AboutSectionTitle from "../common/about-section-title"

const IssueSection = () => {
  return (
    <div id="issue">
      <AboutSectionTitle enTitle="Issue" jpTitle="取り組む課題"/>
      <div className="img">
        <div className="filter">
          <h1>
            「爆弾は降ってこない。<br />
            でも人間として<br />
            生きている心地がしない」
          </h1>
        </div>
      </div>
      <div className="contents">
        <p>
          WELgeeの取り組む課題は、難民として日本に逃れてきた人が自らの未来をデザインできる環境にないこと。社会との隔絶や、不安定な法的地位、そして唯一の希望である難民認定申請も、高い確率で不認定となってしまう現状があります。
        </p>
        <YellowButton link="/about/passion#issue" title="more"/>
      </div>
      <style jsx>{`
        #issue {
          margin-top: 100px;
        }
        #issue > h2 {
          font-family: "League Spartan";
        }
        #issue > p {
          margin-top: 50px;
        }
        #issue > .img {
          margin-top: 50px;
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
        }
        #issue > .img > .filter {
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          padding: 100px 20px;
        }
        .filter > h1 {
          color: white;
          text-align: center;
          line-height: 4.5rem;
          font-size: 3rem;
          font-weight: bold;
        }
        #issue > .contents {
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          margin-top: 50px;
          text-align: center;
          line-height: 2;
        }
      `}</style>
    </div>
  )
}

export default IssueSection;
