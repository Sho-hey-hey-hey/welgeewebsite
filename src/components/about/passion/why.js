import React from 'react';

import backgroundImage from '../../../images/about/passion/why-bg.jpg'
const  WhySection = () => {
  return (
    <div id="why">
      <div className="filter">
        <h2 className="global-text">なぜ日本の難民認定率が低いのか？</h2>
        <div className="items">
          <div className="item">
            <h3 className="global-text">01 難民条約の厳格な解釈</h3>
            <p className="global-text">
              難民条約は、本来東西冷戦の中で東ヨーロッパの共産主義の国から、西ヨーロッパの自由主義の国に逃れる「政治難民」や「亡命者」の保護のために1951年に策定された国際条約であり、厳密に言うと破綻国家の中から逃れる難民や紛争難民は定義に入りません。難民の定義を改める必要性から、UNHCR（国連難民高等弁務官事務所）は国際保護のガイドラインを策定しました。ガイドラインには法的な拘束力をもつものではないのですが、各国ではこのガイドラインに沿って認定するスタンスをとっています。対して日本政府は、遵守する必要がないとして、新たな定義が適応されないまま、難民条約が厳格に適用されているという現状があります。
            </p>
          </div>
          <div className="item">
            <h3 className="global-text">02 立証の難しさ</h3>
            <p className="global-text">
              日本では、立証の際には、主観的な恐怖や事情のほかに、迫害の恐怖を抱くような客観的事情が必要になりますが、。着の身着のまま逃れた難民は迫害などに関する客観的な証拠を持ち合わせていないことが多いため、立証が難しいのです。一方他国では、「難民の資格を有しない者が難民認定手続を悪用して在留するよりも、真の難民が迫害のおそれのある国に送還される方がはるかに悪い」という価値観に基づき、難民性の立証の裏付けとなる証拠が少ない申請者に対しても、申請者の置かれている状況を最大限考慮して難民認定が行われています。
            </p>
          </div>
        </div>
        <p className="global-text">
          難民として申請をした人たちは、原則として、その結果が出るまで、適法に日本にいることができます。しかし、極めて不安定な法的地位の彼らには、その間も様々な壁があります。<br />
          <br  />
            例えばドイツでは、難民認定申請者に対して、在留資格や就労許可だけでなく、生活保護・住居・言語研修など、最低限の生活が政府によって保障されます。しかし、日本ではこのような生活の保障はほとんど皆無です。<br  />
            <br />
              将来の見通しのつかない日々の中で、若者たちの心が腐っていく現状があります。
        </p>
      </div>
      <style jsx>{`
        #why {
          margin-top: 100px;
          background-image: url("${backgroundImage}");
          background-size: cover;
          background-position: center;
        }
        #why > .filter {
          width: 100%;
          height: 100%;
          background-color: rgba(255,255,255,0.7);
          padding-top: 50px;
          padding-bottom: 100px;
        }
        #why > .filter > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 80%;
          margin: 0 auto;
        }
        #why > .filter > .items > .item {
          width: 80%;
          max-width: 490px;
          margin-top: 50px;
        }
        #why > .filter > .items > .item > h3 {
          text-align: left;
          margin-bottom: 0;
        }
        #why > .filter > .items > .item > p {
          background-color: #EAEAEA;
          padding: 45px 25px;
          text-align: left;
          margin-top: 0;
        }
        #why > .filter > p {
          width: 90%;
          max-width: 500px;
          margin: 50px auto;
          text-align: left;
          color: #333333;
        }
      `}</style>
    </div>
  )
}

export default WhySection;
