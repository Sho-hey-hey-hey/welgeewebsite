import React from 'react';
import {Link} from "gatsby"
import SectionTitle from "../common/section-title"
import ProgramTitle from "../common/program-title"

import programEnlightenmentImage from '../../images/program-enlightenment.png'
import programSalonImage from '../../images/program-salon.png';
import programClassImage from '../../images/program-class.jpg';
import programShelterImage from '../../images/program-shelter.png';
import programTokiwaImage from '../../images/program-tokiwa.png';
import programEmploymentImage from '../../images/program-employment.png';
import programTrainingImage from '../../images/program-training.png';
import programChibaHouseImage from '../../images/program-chibahouse.png'


const ProgramSection = () => {
  return (
    <section id="programs">
      <SectionTitle jpTitle="事業案内" enTitle="Programs"/>
      <br />
      <p className="global-text">
        WELgeeは、難民支援ではなく、難民の方とともに3つの活動を行っています。<br />
        <br />
          日本に逃れたばかりの難民と日本人とがつながる対話の場を作る「Talk with(ともに語る)」事業<br />
          日本人と共生し、難民の自立と自己実現の準備期間を支える「Live with(ともに暮らす)」事業<br />
          そして、働くを通じて自らの専門性と経験を生かす「Work with(ともに働く)」事業です。
      </p>
      <div className="group">
        <ProgramTitle enTitle="Talk with" number="01" jpTitle="日本人との対話の場をつくる"/>
        <div className="items">
          <div className="item min">
            <img src={programEnlightenmentImage} />
              <h4 className="global-text">啓発キャンペーン</h4>
              <p className="global-text">
                民間企業や市民などの多様な人々との連携を通じて、
                難民のネガティブなイメージに変革をもたらし、
                多様性に溢れるカラフルな日本社会を目指します。
              </p>
          </div>
          <div className="item min">
            <Link to="https://www.welgee.jp/programs/welgee-salon.html ">
              <img src={programSalonImage} />
              <h4 className="global-text">WELgeeサロン</h4>
              <p className="global-text">
                サロン事業は、”難民と共に”をモットーに、
                より多くの人々が「難民と出会い、語る場」を毎月運営しています。
                2019年1月までで計25回開催し、26カ国以上1000人の方が参加しました。
              </p>
            </Link>
          </div>
          <div className="item min">
            <img src={programClassImage} />
              <h4 className="global-text">出張授業・講演</h4>
              <p className="global-text">
                難民としての経験をもつ先生とWELgeeスタッフが、
                真の意味での「国際理解教育」「異文化理解」「生きる力」を届ける授業です。
              </p>
          </div>
        </div>
      </div>
      <div className="group">
        <ProgramTitle enTitle="Live with" number="02" jpTitle="日本人と共生し、次のステップを模索する"/>
        <div className="items">
          <div className="item min">
            <img src={programShelterImage} />
              <h4 className="global-text">緊急シェルター(2019年3月まで)</h4>
              <p className="global-text">
                日本に来たばかりで、明日泊まる場所のない人が、
                今夜「ただいま」と来れる場所です。
                WELgeeスタッフが同居し、難民の方への自立まで伴走します。
              </p>
          </div>
          <div className="item min">
            <Link to="https://peraichi.com/landing_pages/view/tokiwa-project">
              <img src={programTokiwaImage} />
              <h4 className="global-text">TOKIWA(2019年4月より)</h4>
              <p className="global-text">
                難民たちが自分らしく「働く」の最初の一歩をつくるためのシェアハウスです。難民という同じ境遇にいる人たちと切磋琢磨し、日本語などのスキルを身につけ、就職に向けて準備をしていきます。
              </p>
            </Link>
          </div>
          <div className="item min">
            <img src={programChibaHouseImage} />
              <h4 className="global-text">千葉ハウス</h4>
              <p className="global-text">
                “千葉ハウス”は、2017年度のクラウドファンディングにより設立された住居で、
                難民の方でも、日本の地域の文脈で安心して暮らせ、未来を築ける空間を目指しています。
              </p>
          </div>
        </div>
      </div>
      <div className="group">
        <ProgramTitle enTitle="Work with" number="03" jpTitle="働くを通じて自らの専門性と経験を生かす"/>
        <div className="items">
          <div className="item large">
            <Link to="https://www.welgee.jp/programs/carrer-program.html ">
              <img src={programEmploymentImage} />
            </Link>
            <h4 className="global-text">就労伴走事業</h4>
            <p className="global-text">
              就労伴走事業は、日本に難民として逃れてきた人たちが、「人材」として企業で活躍する道を作るために、彼らが仕事に就くまでの伴走をしています。
              *WELgeeの就労伴走事業は<a href="http://careerstory.co.jp/"> 株式会社キャリアストーリー</a>との提携業務の一環として行なっています
            </p>
          </div>
          <div className="item large">
            <img src={programTrainingImage} />
              <h4 className="global-text">研修事業</h4>
              <p className="global-text">
                逆境を乗り越え生きてきた難民の講師たちから、生きる強さを学ぶ企業研修です。
                職場のモチベーション向上、リーダーシップ、多様性などに繋がります。
              </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #programs {
          width: 80%;
          max-width: 1080px;
          margin: 0 auto;
          margin-top: 120px;
        }
        .items {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .item {
          width: 100%;
          margin: 0 auto;
          margin-top: 20px;
        }
        .item.min {
          max-width: 280px;
        }
        .item.large {
          max-width: 440px;
        }
        .item img {
          width: 100%;
          border-radius: 4px;
        }
        img:hover{
          opacity: 0.6;
          transition-duration: 0.3s;
        }
        .item > p {
          margin-top: 10px;
        }
      `}</style>
    </section>
  )
}

export default ProgramSection;
