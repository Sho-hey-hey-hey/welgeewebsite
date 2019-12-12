import React from 'react';
import {Link} from "gatsby"
import SectionDescription from "../../components/common/section-description"
import AboutSectionTitle from "../../components/common/about-section-title"
import Layout from "../../components/layout"
import TextImageBackground from "../../components/common/text-img-background"
import SupporterMember from "../../components/about/supporters/supporter"
import SectionTitle from "../../components/common/section-title"

import nextSalonImage from "../../images/about/director-message/join-donation.jpg"
import YellowButton from "../../components/common/yellow.button"


const salonData = [
  {
    title: '難民と「ともに」\n つくる場',
    image: 'http://welgee.sakura.ne.jp/image/07252019%20WELgee%20Salon-8351.JPG',
    description: '私たちは、毎回のイベントをinternationalsと共に設計しています。彼らは参加者でもあり、日本人の参加者を迎えるホストでもあります。'
  },
  {
    title: '難民と「ともに」\n かたる場<',
    image: 'http://welgee.sakura.ne.jp/image/06002019-6482.JPG',
    description: 'WELgeeサロンは「難民について勉強する」一方的な場ではありません。参加者の皆さんとインターナショナルズとの双方向的なコミュニケーションを大切にしています。'
  },
  {
    title: '参加者の皆さんと「ともに」つくる場',
    image: 'http://welgee.sakura.ne.jp/image/07252019%20WELgee%20Salon-77201.JPG',
    description: 'WELgeeサロンの運営には、過去にサロンに参加をした方が数多く参加しています。参加者・運営者の垣根を超えたチームからは、豊かな発想が生まれます。',
  },
]

const salonVol = [
  "vol.1 ドイツ視察報告会",
  "vol.15難民×家",
  "vol.2 世界にいる難民の人びと",
  "vol.16 「難民コミュニティ」との多文化共生",
  "vol.3 日本の難民",
  "vol.17 :伝える",
  "vol.4 日本にいるクルドの人びと",
  "vol.18 新生活",
  "vol.5 世界の難民について",
  "vol.19 日本とドイツの難民支援の違い",
  "vol.6 ホームステイを実際に経験した人の話を聞こう",
  "vol.20 ベルリン・パリ視察報告会",
  "vol.7 難民の日本での就労について考える",
  "vol.21 H.I.S.ドイツツアー事前研修",
  "vol.8 一人の難民がぶつかった課題についてみんなで考える",
  "vol.22 H.I.S. 旅あと研修",
  "vol.9 日本の難民問題・社会課題のアイデアソン",
  "vol.23 異文化間友情",
  "vol.10 H.I.S.共催 チュニジアについて",
  "vol.24 クリスマス交流会",
  "vol.11 難民ホームステイ報告会2弾",
  "vol.25 交流会",
  "vol.12 じっくり難民の方の話を聞くセッション",
  "vol.26 描くことで「自分のなりたい自分」を表現しよう",
  "vol.13 NPO法人コンフロントワールド共催",
  "vol.28 教育（日本の教育について）",
  "vol.14 農業ワークキャンプの報告",
  "vol.29 一歩（世界難民の日特別版）",
]

const voiceOfJapaneseDescription = "「アフリカでは困っている他人を躊躇なく救うという文化があると聞き、そんな彼らを日本社会としても、私個人としても、暖かく迎えたいと思いました。ー大学生 女性 20代」\n \n「僕はWELgeeにとても感謝しているよ。\nだって日本に来て初めてホームにいると感じた場所がサロンだ。—カメルーン人 男性 30代」"




const salonMemberMessages = [
  {
    name: '市來 海',
    image: 'http://welgee.sakura.ne.jp/image/kai-ichiki.png',
    position: 'WELgeeサロン 統括',
    message: '2001年岐阜県生まれ。早稲田大学在学中。高2でニュージーランドに一年間の留学。さまざまなバックグラウンドを持つ人々と生活するなかで「対話」の大切さを知る。 ',
  },
  {
    name: '渡辺早希',
    image: 'http://welgee.sakura.ne.jp/image/saki-watanabe.png',
    position: 'WELgeeサロン インターン',
    message: '1997年生まれ。母語は津軽弁。宇都宮大学国際学部在学中。 大学1年時、初海外ヨルダンで難民と出会う。野球少女時代を思い出し、多様な人と言葉のキャッチボールを日々特訓中。',
  },
  {
    name: '宇波 里緒',
    image: 'http://welgee.sakura.ne.jp/image/rio-unami.png',
    position: 'WELgeeサロン インターン',
    message: '1997年富山生まれ。千葉大学国際教養学部在学中。研究テーマは「『難民』に対する支援と共走」。趣味は旅行、ダンス、スノーボード。好きなものは南国と雪山。',
  },
]

const WelgeeSalonPage = () => {
  return (
    <Layout>
      <section id="top">
        <div className="contents-1">
          <AboutSectionTitle enTitle="WELgee salon" jpTitle="WELgeeサロン"/>
          <SectionDescription style={{marginTop: '3rem'}}>
            WELgeeサロンは、<strong>「難民」という言葉の先の、ユニークな個性と出会う場</strong>です。<br />
            難民は、「避難民」つまり「避難をしている状態にいる人々」を指す言葉でありますが、<br />
            その言葉の先には、<strong>異なる価値観や、強い信念を持つ人々</strong>がいます。<br />
            私たちは、そんな彼らを「難民」ではなく、<strong>「志を持つ、多国籍な仲間」</strong>として、<br />
            彼らを<strong>「Internationals(インターナショナルズ)」</strong>と呼んでいます。
          </SectionDescription>
        </div>
        <div className="img-salon"></div>
      </section>
      <section id="merit" className="global-text">
        <h3>WELgeeサロンの3つの特徴</h3>
        <div className="global-red-line" />
        <div className="items">
          {salonData.map((data, i) => (
            <div key={i} className="item">
              <img src={data.image} />
              <h3>{data.title}</h3>
              <p className="global-text">{data.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="contents" id="programs">
        <h2>WELgeeサロンの実績</h2>
        <p className="global-text">WELgeeサロンは、多様な人々が交差する場であり、その出会いが新たな活動をうみました。</p>
        <div className="remarkable_results">
          <div className="box-title">Result</div>
          <p className="global-text">・参加人数 : 1,200人以上</p>
          <p className="global-text">・参加したインターナショナルズ : 100人以上</p>
          <p className="global-text">・WELgeeサロンから生まれた活動:<br/>
            「難民を講師に!」<Link to="/programs/company-session">企業研修事業</Link>
            <br/>
            就労伴走事業・アフガニスタンAさんとIT企業経営者との出会い
            <Link to="/programs/carrier-program">就労伴走事業</Link>
            <br/>
          </p>
        </div>
      </section>
      <section className="contents" id="programs">
        <h2>過去のWELgeeサロン</h2>
        <p className="global-text">2019年9月現在、WELgeeサロンは30回開催をいたしました。WELgeeサロンのテーマは主に4つの分類ができます。<br />
          イベント形式では、知識を学ぶ「勉強型」と参加者が双方向に学び合う「ワークショップ型」があります。<br />
          また、コンテンツは、「難民」について学ぶイベントと、ダイバーシティについて体験するものの2つに大別されます。<br />
        </p>
        <img className="scheme-image" src="http://welgee.sakura.ne.jp/image/salon_division.png" />
        <p className="global-text">初期のWELgeeサロンは、「難民」について、一方的に学ぶ機会が多かったのに対し、数を重ねるごとに、より双方向的で、難民のテーマよりも、インターナショナルズの持つ多様性や、文化、彼らの特技に光を当てるテーマが増えました。</p>
        <h2>過去のWELgeeサロンのテーマ一覧</h2>
        <ul className="salon_programs">
          {salonVol.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
      </section>
      <section className="contents">
        <h2>WELgeeサロンの一例</h2>
        <img className="scheme-image" src="http://welgee.sakura.ne.jp/image/saloon-vol28.png" />
        <p>2019年6月に開催したWELgeeサロン vol.28、世界難民の日特別版では、「First Step」のコンセプトの元<br />
          グループワークとして「劇」を作りました。国籍や年齢を超えた一つのチームが、共同作業を通じて、<br />
          「難民」という言葉にくくられてしまっている人々の個人として顔を見てもらうことを目的としたワークショップを行いました。
        </p>
    
        <img className="scheme-image" src="http://welgee.sakura.ne.jp/image/saloon-vol28-timeline.png" />
        <p>WELgeeサロン vol.28のタイムライン</p>
      </section>
      <TextImageBackground
        jpTitle="WELgeeサロン参加者の声"
        enTitle="Voice of Japanese participants"
        description={voiceOfJapaneseDescription}
        backgroundImage="https://lightroom.adobe.com/v2c/spaces/43c595e478f64bad8d0055a7cd36868e/assets/eec9ed5874cf42ffa4a3133d60ab3ab0/revisions/ef175ba59d334825aab89b5885d9c539/renditions/8ffdb01082e23d8d3f6b27da64543aab"
      />
      <section className="contents">
        <h2>WELgeeサロンチーム</h2>
        {salonMemberMessages.map((member, i) => (
          <SupporterMember memberImage={member.image} memberName={member.name} memberPosition={member.position} memberMessage={member.message}/>
        ))}
      </section>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <section className="contents">
        <div id="join">
          <SectionTitle jpTitle="次回のWELgeeサロン" enTitle="Next WELgee Saloon!" />
          <br />
          <div className="item">
            <img className="next-salon-image" src={nextSalonImage} />
            <h3>イベント詳細・申し込み</h3>
            <p>
              こちらから、イベント詳細・申し込みをすることができます。
            </p>
            <br />
            <br />
            <YellowButton title="more" link="news/news12"/>
          </div>
        </div>
      </section>
      <style jsx>{`
        .contents {
          max-width: 1080px;
          margin: 0 auto;
          text-align: center;
        }
        .img-salon {
          width: 100vw;
          height: 500px;
          margin-top: 100px;
          background-image: url("http://welgee.sakura.ne.jp/image/09292018%20WELgee%20Salon%20.JPG");
          background-size: cover;
          background-position: center;
        }
        h2 {
          margin-top: 4rem;
          font-size: 2.5rem;
        }
        #merit {
          margin: 100px 0;
        }
        #merit > .items {
          width: 90%;
          max-width: 1100px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0 auto;
        }
        #merit .item {
          width: 100%;
          max-width: 290px;
          margin: 0 auto;
          margin-top: 50px;
        }
        #merit img {
          width: 100%;
        }
        #merit p {
          text-align: left;
          margin-top: 20px;
        }
        .remarkable_results {
          margin: 2em 0;
          background: #f1f1f1;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.22);
        }
        .remarkable_results .box-title {
          font-size: 1.2em;
          background: #FFBF00;
          padding: 4px;
          text-align: center;
          color: #FFF;
          font-weight: bold;
          letter-spacing: 0.05em;
        }
        .remarkable_results p {
          padding: 15px 20px;
          margin: 0;
        }
        .salon_programs{
          width: 100%;
          background-color:#f1f1f1;
          list-style: none outside;
          display: inline-table;
          padding: 5%;
          text-align: left;
        }
        .salon_programs > li{
          padding: 0;
          float: left;
          width: 48%;
          padding-right: 2rem;
          line-height: 1.8rem;
        }
        .scheme-image{
          margin-top: 50px;
          width: 100%;
          text-align:center;
        }
        #partners > .questions {
          display: table;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          width: 80%;
          max-width: 1080px;
          margin: 0 auto;
        }
        .next-salon-image {
          width: 25rem;
        }
      `}</style>
    </Layout>
  )
}

export default WelgeeSalonPage
