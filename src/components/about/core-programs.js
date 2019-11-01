import React from 'react';
import YellowButton from "../common/yellow.button"
import AboutSectionTitle from "../common/about-section-title"

import programs01 from '../../images/about/program-1.png'
import programs02 from '../../images/about/program-2.png'


const CoreProgramsSection = () => {
  return (
    <section id="programs">
      <AboutSectionTitle enTitle="Partner" jpTitle="協働企業"/>
      <p className="description">
        私たちは民間企業との協働を通じ「はたらく」を作ります。
      </p>
      <div className="items">
        <div className="item">
          <img src={programs01} />
            <h5>研修事業</h5>
            <p>
              逆境を乗り越え生きてきた難民の講師たちから、生きる強さを学ぶ企業研修です。職場のモチベーション向上、リーダーシップ、多様性などに繋がります。
            </p>
        </div>
        <div className="item">
          <img src={programs02} />
            <h5>就労伴走事業</h5>
            <p>
              就労伴走事業は、日本に難民として逃れてきた人たちが、「人材」として企業で活躍する道を作るために、彼らが仕事に就くまでの伴走をしています。
            </p>
        </div>
      </div>
      <div className="description">
        <YellowButton title="more" link="/programs"/>
      </div>
      <style jsx>{`
        #programs {
          margin-top: 100px;
        }
        .description {
          width: 80%;
          margin: 1rem auto;
          text-align: center;
          margin-top: 3rem;
        }
        #programs > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 80%;
          max-width: 1100px;
          margin: 0 auto;
        }
        #programs > .items > .item {
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #programs > .items > .item > img {
          width: 100%;
          border-radius: 4px;
        }
        #programs > .items > .item > h5 {
          margin-top: 20px;
        }
        #programs > .items > .item > p {
          margin-top: 10px;
        }
        #programs > a.button {
          margin-top: 50px;
          background-color: #FFBF00;
        }
      `}</style>
    </section>
  )
}


export default CoreProgramsSection;
