import React from 'react';

import backgroundImage from '../../../images/about/passion/problem-top.jpg'
const ProblemsSection = () => {
  return (
    <div>
      <div id="problems">
        <div className="top">
          <div className="filter">
            <h1 className="global-text">「今日も、ただ生きただけ」</h1>
          </div>
        </div>
        <div className="contents">
          <h2 className="global-text">難民を待ち受ける三つの壁</h2>
          <div className="items">
            <div className="item">
              <h3 className="global-text">01</h3>
              <h4>先の見通せない未来</h4>
              <p className="global-text">
                難民認定申請者は「難民申請をしている」という理由のみで、日本の在留資格が与えられています。今ある就労許可もいつか剥奪されるかもしれない、そもそもいつか在留資格を失うかもしれない。のかがわからない、祖国にいる子供といつ再会できるのか、いつになったら不安が取り除かれるのか、見通しのつかない未来の中で、身も心も腐ってゆきます。
              </p>
            </div>
            <div className="item">
              <h3 className="global-text">02</h3>
              <h4>日本社会からの隔絶</h4>
              <p className="global-text">
                もともと日本に来る予定も想定もしていなかったなか難民として逃れた彼らは、ほとんどの場合、日本に知り合いはいません。日本の漢字表記に戸惑い、所持金はホテル代ですぐに尽きます。24時間営業の飲食店で夜を過ごし日中は街を歩き続ける生活を、一か月以上送る人もいます。誰とも繋がることもできずに、精神的に追い込まれてしまう方も少なくありません。
              </p>
            </div>
            <div className="item">
              <h3 className="global-text">03</h3>
              <h4>就職の困難さ</h4>
              <p className="global-text">
                日本語も話せず、その上頼れる日本人の知人・友人がいないとなると、日本の企業文化や雇用にあたっての常識に知識もなく、就職活動をせざるを得なくなります。職業の選択肢がない彼らは、雇用契約書や保険加入もない、危険できつい労働環境に行き着くことも多々あります。
              </p>
            </div>
          </div>
          <p className="global-text">
            結果的に、逃れた日本でも、希望ある未来を描くことができず、孤独感と将来の見えなさに、押しつぶされてしまう人も少なくなりません。
          </p>
        </div>
      </div>
      <div id="but">
        <h2 className="global-text">
          しかし、難民としての彼らにあるのは、<br />
          「悲惨さ」だけなのでしょうか？
        </h2>
      </div>
      <style jsx>{`
        #problems > .top {
          width: 100vw;
          background-image: url("${backgroundImage}");
          background-size: cover;
          background-position: center;
        }
        #problems > .top > .filter {
          background-color: rgba(0,0,0, 0.7);
          width: 100%;
          height: 100%;
          padding: 200px 10px;;
        }
        #problems > .top > .filter > h1 {
          color: white;
        }
        #problems > .contents {
          background-color: rgba(0, 0, 0, 0.6);
          padding-top: 100px;
          padding-bottom: 50px;
        }
        #problems > .contents > h2 {
          color: white;
          font-weight: normal;
        }
        #problems > .contents > .items {
          width: 90%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 0 auto;
        }
        #problems > .contents > .items > .item {
          width: 70%;
          max-width: 360px;
          background-color: #EAEAEA;
          padding: 40px 25px;
          margin-top: 50px;
        }
        #problems > .contents > .items > .item > h3 {
          font-size: 40px;
        }
        #problems > .contents > .items > .item > h4 {
          font-size: 24px;
          text-align: center;
        }
        #problems > .contents > .items > .item > p {
          color: #333333;
          text-align: left;
        }
        #problems > .contents > p {
          color: white;
          width: 70%;
          font-size: 20px;
          max-width: 500px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #but {
          background-color: #C9C9C9;
          padding: 50px 0;
        }
        #but > h2 {
          color: white;
          font-weight: normal;
          font-size: 2rem;
          line-height: 3rem;
        }
      `}</style>
    </div>
  )
}

export default ProblemsSection;
