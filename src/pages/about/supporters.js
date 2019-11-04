import React from  'react';
import Layout from "../../components/layout"
import AboutSectionTitle from "../../components/common/about-section-title"
import SupporterMember from "../../components/about/supporters/supporter"

import supporterImage01 from '../../images/about/supporters/funahashi.jpg'
import supporterImage02 from '../../images/about/supporters/sekine.jpg'
import supporterImage03 from '../../images/about/supporters/kan.jpg'
import supporterImage04 from '../../images/about/supporters/yamaguchi.jpg'
import supporterImage05 from '../../images/about/supporters/uehara.jpg'
import supporterImage06 from '../../images/about/supporters/sakone.jpg'
import supporterImage07 from '../../images/about/supporters/miyagi.jpg'

const supporterMessages = [
  {
    name: '船橋 力さん',
    image: supporterImage01,
    position: '文部科学省官民協働海外留学創出プロジェクトディレクター',
    message: ' Welgeeの果敢で、困難に向かう姿勢にはいつもワクワクする。難題であるからこそ、応援したくなる。それはそれは、渡部さん(JESS)とそのスタッフの姿勢は真剣で真摯的である。心身共に、そして経済的にも身を削って向こう見ずに進むのを目の当たりにすると、本人達の苦労は計り知れない。しかし、そこには、何か明るい未来を感じさせてくれるし、応援せざるを得ない熱いもの、崇高なものを感じさせてくれる。これからのフェイズは、戦略的な動き、組織的な動きもより求められるのは事実だ。だがしかし、JESSの破天荒さ、向こう見ずさが、道を拓いてきた。歳を重ねるごとにこの破天荒さを、失う組織が多いが、やらなくちゃいけないことが、難易度が高く、前例がないことであるが故に、その崇高な考えとともに失って欲しくない点である。 ',
  },
  {
    name: '関根 健次さん',
    image: supporterImage02,
    position: 'ユナイテッドピープル株式会社\n' + '代表取締役 ',
    message: ' 日本にやってくる難民。どうにかしなければならない社会課題というよりも、日本を多様性豊かな社会にできる機会と捉え、次々と前向きなアクションを重ねるWELgeeを心から応援しています！ ',
  },
  {
    name: '菅 大介さん',
    image: supporterImage03,
    position: '株式会社チェリオコーポレーション\n' + '専務取締役 ',
    message: ' チェリオはChange WIth Cheerioをモットーに、よりインクルーシブな社会の実現を清涼飲料を通じて実現すべく、事業経営に取り組んでいます。渡部さんと出会って、Welgeeの活動内容を伺い、「Globalに考えてLocalに実践する」ことを大切にしている弊社として、是非サポートしたいと感じました。メンバーの方々との交流を深めながら、ともに歩いていければ幸甚と考えています。 ',
  },
  {
    name: '山口 将由さん',
    image: supporterImage04,
    position: 'アクセンチュア株式会社\n' + 'シニア・マネジャー ',
    message: ' これまで日本における難民問題は、生活の保護や認定率の向上といった文脈でしか語られず、長らく解決の糸口の見えない社会課題でした。そこに、当事者一人一人の方々の人間性やスキルに光を当てて、日本を共に支える仲間として再定義したWELgeeの発想の転換は、この硬直化した状況にパラダイムシフトをもたらす、イノベーティブなチャレンジであると確信しています。 ',
  },
  {
    name: '上原 優子さん',
    image: supporterImage05,
    position: '立命館アジア太平洋大学\n' + '国際経営学部准教授 ',
    message: ' 日本における難民の現状について知った2000年以来難民問題に関わり続け，その中で私はWELgeeと出会いました。WELgeeから感じるのは，難民に対する徹底した寄り添いと可能性への拓心，そして新しい挑戦に対する率先力です。より豊かな世界を実現するために「ともにカラフルなセカイをつくる」こと，その掲げたビジョンに向けて邁進するWELgeeをいつも応援しています。 ',
  },
  {
    name: '坂根宏治さん',
    image: supporterImage06,
    position: '独立行政法人国際協力機構 (JICA)\n' + '平和構築・復興支援室長 ',
    message: ' 将来の日本を考えた場合、日本に来られた難民の方々を応援していくことは、とても重要なことと思います。また「ともにカラフルなセカイをつくる」というメッセージはとても新鮮で、難民の方々の可能性を見出すことは、日本の社会にとってもきっとプラスになると思います。WELgeeの皆さんの今後のご活躍を期待しています。 ',
  },
  {
    name: '宮城 治男 さん',
    image: supporterImage07,
    position: 'NPO法人 ETIC.\n' + '代表理事. ',
    message: ' 日本にやってくる難民。どうにかしなければならない課題というよりも、日本の多様性を豊かにしていく「ともにカラフルなセカイをつくる」契機と捉え、次々と前向きなアクションを重ねるWELgeeの活動を心から応援しています！ '
  },
]

const  SupporterPage  = ()  => {
  return (
    <Layout>
      <div className="global-empty-space" />
      <AboutSectionTitle enTitle="Supporter Messages" jpTitle="応援の声"/>
      {supporterMessages.map((member, i) => (
        <SupporterMember memberImage={member.image} memberName={member.name} memberPosition={member.position} memberMessage={member.message}/>
      ))}
    </Layout>
  )
}

export default SupporterPage;
