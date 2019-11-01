import React from 'react'
import WhiteBackgroundText from "../../components/common/white-background-text"
import Layout from "../../components/layout"
import TeamMember from "../../components/about/team-welgee/team-member"
import JoinUsSection from "../../components/common/joini-us"


const teamDescription = 'WELgeeのメンバーは、職員や顧問だけではなく、難民の若者たちや、共感する企業の方々、アドバイザー、寄付者の方々...\n' +
'理想の社会の実現のために、共に活動する仲間達が、垣根を超えて存在しています。\n' +
'Team WELgeeでは、その中でもコアで関わるスタッフ達を紹介いたします。';

const welgeeTeamData = [
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/sayaka%20watanabe.jpg',
    name: '渡部 カンコロンゴ 清花',
    position: '代表理事・代表 ',
    description: '1991年静岡県生まれ。様々な背景を持つ子どもたちが出入りするNPOの実家で育つ。大学時代はバングラデシュの紛争地にてNGO駐在員、国連開発計画(UNDP)インターンとして平和構築プロジェクトに携わった。2016年、難民の仲間たちとWELgeeを設立。東京大学大学院 総合文化研究科・人間の安全保障プログラム 修士課程在学中。'
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/yota%20anzai.jpg',
    name: '安齋 耀太',
    position: '理事・戦略室長',
    description: '1990年東京都葛飾区生まれ。千葉県我孫子市育ち。開成高等学校および筑波大学社会・国際学群社会学類卒業、東京大学大学院総合文化研究科修士課程修了。現在同博士課程在学。元日本学術振興会特別研究員・元ハレ大学（ドイツ）客員研究員。研究テーマは「国家と難民」「庇護権」「ドイツと日本の難民法の歴史」。趣味は睡眠とカラオケ。好きな食べ物は蕎麦と鰻。好きな飲み物は日本茶とスコッチ。',
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/nana%20yamamoto.jpg',
    name: '山本 菜奈',
    position: '就労伴走事業統括',
    description: '1994年横浜市生まれ。小中高を米独で過ごし、17歳の時ネパールの山岳民族の若者たちとの出会い、多様な人の「働く」を通じた社会活躍に関心を抱く。一人ひとりの自己実現につながる「働く」が、地域の産業を活性化し、コミュニティの文化を豊かにする。そんな連鎖を生みだすビジョンに、早稲田大学在籍中カナダ留学や北海道での産業振興インターンシップを経て、現職。コーヒーとクラフトビールと日本酒と地域のおっちゃんが大好き。'
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/shohei%20hayashi.jpg',
    name: '林 将平',
    position: 'PR(Public Relations)部統括',
    description: '1995年生まれ。早稲田大学卒。トビタテ！留学JAPAN2期生。スウェーデンへの交換留学時に、シリア難民と出会い彼らの壮絶な体験や、人としての美しさに心を動かされる。伝える覚悟と伝わる表現をモットーに広報として、WELgeeの魅力を発信するために奮闘中',
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/sakashita%20yuki.jpg',
    name: '坂下　裕基',
    position: '就労伴走事業キャリアコーディネーター',
    description: '987年、東京都品川区生まれ。神田外語大学卒業。NPO法人WELgeeスタッフ、㈱BONZUTTNER代表、㈱KOP CMO。すべての人に「機会」を>をモットーに様々な活動に従事。最も好きな食べ物は大井町にあるラーメン屋幸龍の提供する黒龍というトンコツラーメン。',
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/dora%20tamari.jpg',
    name: '玉利ドーラ',
    position: 'セミナー事業部統括',
    description: '１９８８年、クロアチア共和国生まれ。ロンドン大学大学院ユニバーシティカレッジ心理学・脳科学専攻。「社会認識」修士課程取得。日本人の母とクロアチア人の父を持つが、高校時代より自ら返金不要な奨学金を探し、一人で世界計8ヶ国、島と船に長期滞在し、幅広い国籍、年代、職種の人々と共に住み、学び、働く。国籍は「地球人」、性格は「自由人」。現在は西洋文化と日本文化のナヴィゲーターをしながらNPO法人WELgeeで難民向け文化教育プログラム研究開発。好きな食べ物は野菜、草餅とビターチョコ。',
  },
]

const auditorMember = [
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/kentaro%20watanabe.jpg',
    name: '渡邉　賢太郎',
    position: ' 監事',
    description: '1982年、大分県別府市生まれ。立命館アジア太平洋大学卒業。大手証券会社を退職後「お金」をテーマに、２年間の世界一周旅へ。帰国後、SUSANOOプロジェクトを立ち上げ。社会課題反転価値創造型スタートアップのコミュニティづくりに携わる。2018年よりMistletoe参画 。おせっかい社かける共同創業者。著書に「なぜ日本人はこんなに働いているのにお金持ちになれないのか？（いろは出版）」など。ひなびた温泉街とコロッケをこよなく愛す。',
  },
]

const advisorMember = [
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/Onoda%20lawyer.jpg',
    name: '小野田 峻',
    position: '顧問弁護士',
    description: '小野田髙砂 法律事務所 代表弁護士\n 2011年3月11日に司法修習生として勤務中の盛岡で東日本大震災に遭遇したことをきっかけとして、弁護士登録後、弁護士会内有志の津波被災地訪問企画を立案し、継続的に実施。2016年11月からは、自身が代表を務める小野田髙砂法律事務所と併設する形で、社会起業家向けシェアオフィス「social hive HONGO」を本郷三丁目にて開業・運営。常にプレーヤー側の視点に立ったビジネス横断的なアドバイスや、社会起業家の多様な可能性を未来に繋げる活動に強みを持つ。 ',
  },
  {
    image: 'http://welgee.sakura.ne.jp/sakura/images/Nagaoka%20administrative%20officer.jpg',
    name: '長岡由剛',
    position: '顧問行政書士',
    description: '行政書士 明るい総合法務事務所\n 早稲田大学卒。サラリーマンを経て 2011 年に行政書士登録。主たる業務は外国人在留関連手続き。現在は行政書士5名、補助者3名の体制で年間 1,000 件以上の外国人に関する案件をこなす。行政書士会支部研修の他、外国人支援団体等の研修、外国人採用に関する企業内研修等において毎月2回以上の頻度で講師を務めている。',
  },
]
const TeamWelgeePage = () => (
  <Layout>
    <WhiteBackgroundText
      enTitle="Team WELgee"
      jpTitle="チームウェルジー"
      description={teamDescription}
    />
    <div className="welgee-member">
    {welgeeTeamData.map((member, i) => (
      <TeamMember
        key={i}
        name={member.name}
        image={member.image}
        description={member.description}
        position={member.position}
      />
    ))}
    </div>
    <h3>監事</h3>
    <div id="auditor" className="welgee-member">
      {auditorMember.map((member, i) => (
        <TeamMember
          key={i}
          name={member.name}
          image={member.image}
          description={member.description}
          position={member.position}
        />
      ))}
    </div>
    <h3>顧問</h3>
    <div className="welgee-member">
      {advisorMember.map((member, i) => (
        <TeamMember
          key={i}
          name={member.name}
          image={member.image}
          description={member.description}
          position={member.position}
        />
      ))}
    </div>
    <JoinUsSection/>
    <style>{`
      .welgee-member {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      h3 {
        font-size: 1.6rem;
        text-align: center;
        margin: 4rem 0 1rem 0;
       }
    `}</style>
  </Layout>
)

export default TeamWelgeePage
