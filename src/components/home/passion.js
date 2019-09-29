import React from 'react';
import YellowButton from "../helper/yellow.button";
import backgroundImg from '../../images/passion-bg.jpg'
import SectionTitle from "../helper/section-title";
const HomePassion = props => {
  return (
    <section id="passion">
      <div className="filter">
        <SectionTitle jpTitle="私たちの想い" enTitle="Our Passion"/>
        <p>
          日本にも、紛争・差別・迫害などから逃れ日本にやってくる<br/>
          「難民」と呼ばれる人たちがいます。<br/>
          希望をかけて逃れて来た先の日本でも追い込まれ<br/>
          「自分は役に立たない人間だ」と可能性を閉ざしている人たちがいるのが現状です。<br/>
          しかし、実は彼らは将来的な故郷の担い手たちなのです。<br/>
        </p>
        <YellowButton title="more" link="/about" />
      </div>
      <style jsx>{`
        #passion {
          background-image: url(${backgroundImg});
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
        p {
          margin: 2.5rem 0 3rem 0;
          font-size: 1.25rem;
          line-height: 2.5rem;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

export default HomePassion
