import React from 'react';

import backgroundImage from '../../../images/about/passion/actual-bg.jpg';
import actualImage01 from '../../../images/about/passion/actual-1.png';
import actualImage02 from '../../../images/about/passion/actual-2.png';
import actualImage03 from '../../../images/about/passion/actual-3.jpg';


const ActualSection = () => {
  return (
    <div id="actual">
      <div className="filter">
        <h2 className="global-text">実は、彼らは可能性を秘める存在でした。</h2>
        <div className="items">
          <div className="item">
            <img src={actualImage01} />
            <h3 className="global-text">未来のリーダーたち</h3>
            <p className="global-text">
              WELgeeが関わる難民の方の8割はアフリカ出身者です。遠く離れた日本へと来ることができるのは、高額な航空券を購入することのできる資金のある人や、親類や友人の協力を得られるような人に限られます。事実、医者や法律家、教師、事業家など社会的地位が高い職歴の人も多いです。
            </p>
          </div>
          <div className="item">
            <img src={actualImage02} />
            <h3 className="global-text">溢れる人間力</h3>
            <p className="global-text">
              母国で自分の正義のために声を上げ、逆境を乗り越えてきた彼らは、抜群の人間力と忍耐力、優しさを備えています。WELgeeが関わる難民の方の半分以上が高等教育を受けており、学ぶ意欲が高く、社会や他者に貢献したいという姿勢が印象的な人も多いです。
            </p>
          </div>
          <div className="item">
            <img src={actualImage03} />
            <h3 className="global-text">世界を伝える存在</h3>
            <p className="global-text">
              日本人にとって、難民は私たちが知らない歴史や世界の姿を伝えてくれるメッセンジャーでもあります。独裁政権から逃れた難民の方が、民主主義の重要さを伝えたり、教育機会が狭き門の国で学んだ難民が、教育の重要性を語ったり。彼らは私たちが世界とつながる架け橋となる存在です。
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #actual {
          background-image: url("${backgroundImage}");
          background-size: cover;
          background-position: center;
        }
        #actual > .filter {
          background-color: rgba(255,255,255,0.8);
          padding: 100px 0;
        }
        #actual > .filter > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        #actual > .filter > .items > .item {
          width: 100%;
          max-width: 280px;
          margin-top: 50px;
        }
        #actual > .filter > .items > .item > img {
          width: 250px;
          height: 250px;
          border-radius: 125px;
        }
        #actual > .filter > .items > .item > h3 {
          margin-top: 20px;
        }
        #actual > .filter > .items > .item > p {
          margin-top: 20px;
        }
      `}</style>
    </div>
  )
}


export default ActualSection;

