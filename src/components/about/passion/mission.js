import React  from 'react';

import missionImage from '../../../images/about/passion/mission.png'
import AboutSectionTitle from "../../common/about-section-title"
const MissionSection = () => {
  return (
    <div>
      <div id="mission">
        <div className="top-image">
        </div>
        <AboutSectionTitle enTitle="Mission" jpTitle="私たちの役割"/>
        <h3 className="global-text">志を発掘しつながりを広げ、未来をデザインできる仕掛けをつくる</h3>
        <p className="global-text">
          「難民」という背景を超えて、誰もが「自分らしさ」を活かしながら、<br />
          未来を創り変えていける状態をつくります。<br />
          私たちの役割は、彼らの友人・家族として、志と可能性あふれる彼らの、<br />
          夢に向かう道のりに伴走することです。
        </p>
        <img src={missionImage} />
      </div>
      <div id="vision">
        <AboutSectionTitle enTitle="Vision" jpTitle="私たちの実現したい社会"/>
        <h3 className="global-text">自らの境遇にかかわらず、ともに未来を築ける社会</h3>
        <p className="global-text">
          自分の国に民主主義が戻ってくること<br />
          児童労働のない産業構造に変えること<br />
          今度の選挙が誰も死なずに終わること<br />
          若者たちが自由に発言できる世界がくること<br />
          国境を超えた経済圏を作ることで弾圧を超えて届けたい相手にサービスが届くこと<br />
          より良い社会の実現に向けて、誰もがアクターとして価値を生み出せる状態になること<br />
          <br />
          故郷の未来を背負って命を紡ぎに日本にきた彼らの想いの先には、私たちは直接会うことのない数多の人々がいます。彼ら一人ひとりが描くビジョンを応援することは、その先に何百という人を応援することにつながるのです。<br /><br />
          私たちと一緒に、新しい社会を築きませんか？
        </p>
      </div>
      <style jsx>{`
        #mission {
          margin-top: 100px;
          text-align: center;
        }
        #mission > h3 {
          width: 80%;
          margin: 0 auto;
          margin-top: 40px;
        }
        #mission > p {
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #mission > img {
          display: block;
          width: 80%;
          max-width: 750px;
          height: 480px;
          margin: 0 auto;
          margin-top: 100px;
        }
        #vision {
          margin-top: 100px;
          text-align: center;
        }
        #vision > h2 {
          font-family: "League Spartan";
        }
        #vision > h3 {
          margin-top: 40px;
        }
        #vision > p {
          width: 80%;
          max-width: 800px;
          margin: 0 auto;
          margin-top: 50px;
        }
      `}</style>
    </div>
  )
}


export default MissionSection;
