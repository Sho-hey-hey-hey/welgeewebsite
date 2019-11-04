import React from 'react';
import AboutSectionTitle from "../../common/about-section-title"

import backgroundImg from '../../../images/about/passion/issue.png'
import issueChartImage from '../../../images/about/passion/issue-img1.png'
import issueFlagImage from '../../../images/about/passion/issue-img2.png'

const IssueSection = props => {
  return (
    <section id="issue">
      <AboutSectionTitle enTitle="Issue" jpTitle="取り組む課題"/>
      <p>
        難民として日本に逃れてきた人が<br />
        自らの未来をデザインできる環境にないこと。
      </p>
      <div className="contents1">
        <div className="filter">
          <p className="global-text">
            今、2秒に1人が国を追われている。<br />
            <br />
              世界で紛争や迫害により、強制的に家や故郷を追われた人の数は第二次世界大戦後、最大の6850万人。UNHCRの統計では世界では2秒に1人が自分の住んでいる故郷から逃れざるを得ない状況にあります。
          </p>
        </div>
      </div>
      <div className="contents2">
        <p className="global-text">
          難民になるということは、日々築いてきた人間関係、キャリア、財産、社会的地位、家族や親戚、友人、恋人と過ごす日常が、突然失われること。希望を求め逃れた人たちは、私たちの住むここ日本にもいます。
          <br />
          <br />
          日本では、この難民認定申請数が急増しており、2017年には約2万件になりました。
        </p>
        <img src={issueChartImage} />
      </div>
      <div className="contents3">
        <p className="global-text">
          難民として逃れて来た彼らの唯一の希望は、難民として認定を受けることです。難民認定を受けると、受け入れ国の国民に準する権利を保障されるようになります。しかし、日本の難民認定率は、G7+韓国のの８ヶ国の中でも最低水準の0.3%です。
        </p>
        <img src={issueFlagImage} />
      </div>
      <style jsx>{`
        #issue {
          margin-top: 100px;
        }
        #issue > hr {
          width: 60px;
          border: 1px solid #FC627A;
        }
        #issue > p {
          text-align: center;
          font-size: 24px;
          font-weight: bold;
        }
        #issue > .contents1 {
          width: 100vw;
          background-image: url("${backgroundImg}");
          background-size: cover;
          background-position: center;
          margin-top: 50px;
        }
        #issue > .contents1 > .filter {
          width: 100%;
          height: 100%;
          background-color: rgba(255,255,255,0.65);
          padding-top: 100px;
          padding-bottom: 100px;
        }
        #issue > .contents1 > .filter > p {
          width: 90%;
          max-width: 500px;
          margin: 0 auto;
          font-size: 18px;
          text-align: center;
        }
        #issue > .contents2 {
          width: 100vw;
          padding: 50px 0;
          background-color: rgba(201, 201, 201, 0.2);
        }
        #issue > .contents2 > p {
          width: 90%;
          max-width: 500px;
          margin: 0 auto;
          font-size: 18px;
          text-align: left;
        }
        #issue > .contents2 > img {
          display: block;
          width: 90%;
          max-width: 500px;
          height: 300px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #issue > .contents3 > p {
          width: 90%;
          max-width: 500px;
          margin: 50px auto;
          text-align: left;
        }
        #issue > .contents3 > img {
          display: block;
          width: 90%;
          max-width: 500px;
          height: 300px;
          margin: 0 auto;
          margin-top: 50px;
        }
      `}</style>
    </section>
  )
}

export default IssueSection
