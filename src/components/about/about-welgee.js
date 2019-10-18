import React from 'react';
import SectionTitle from "../helper/section-title"
import homeTopImage from "../../images/top-img.jpg"

const AboutWelgee = () => {
  return (
    <div>
      <div className="description-box">
        <SectionTitle jpTitle="WELgeeとは？" enTitle="Who is WELgee?" />
        <p className="welgee-description">
          私たちは、日本にやって来た難民の若者たちと<br />
          誰もが活躍できる未来を作っています。<br />
          <br />
            紛争、弾圧、治安悪化などから、祖国を逃れざるを得ない難民の数は世界で6000万人超。<br />
            祖国を失い、逃れた国でも、未来を奪われた難民たちが、ここ日本にもいます。<br />
            しかし実は彼らは、私たちと同世代の<br />
            夢見るITエンジニア、正義感に溢れるジャーナリスト、優しい牧師さん…<br />
            ユニークな個性の宝の山でした。
        </p>
      </div>
      <img src={homeTopImage} className="image"/>
      <p className="welgee-description">
        「機会さえあれば、誰だって活躍できる」<br />
        <br />
          一方的な”支援”ではなく、一緒に作るわたしたちの未来。<br />
          彼らの国が平和になったときに、祖国を再建する担い手として、<br />
          第二の活躍を描ける未来をつくります。
      </p>
      <style jsx>{`
        .description-box {
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          margin-top: 100px;
        }
        .welgee-description {
          margin-top: 50px;
          text-align: center;
          line-height: 2rem;
          font-size: 18px;
        }
        .image {
          width: 100%;
          height: 500px;
          margin-top: 100px;
          background-size: cover;
          background-position: center;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}

export default AboutWelgee;
