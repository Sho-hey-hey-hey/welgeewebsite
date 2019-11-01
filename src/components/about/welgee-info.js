import React from 'react';
import SectionTitle from "../helper/section-title"
import AboutSectionTitle from "../helper/about-section-title"

const WelgeeInformation = () => {
  return (
    <section id="info">
      <AboutSectionTitle enTitle="About WELgee" jpTitle="団体概要"/>
      <table>
        <tbody>
        <tr>
          <td>名称</td>
          <td>
            名称 特定非営利活動法人WELgee(ウェルジー)<br />
            (英語表記：Nonprofit Corporation WELgee)
          </td>
        </tr>
        <tr>
          <td>所在地</td>
          <td>
            〒150-6027<br />
            東京都渋谷区恵比寿四丁目20番3号<br />
            恵比寿ガーデンプレイスタワー27階<br />
            株式会社デジサーチアンドアドバタイジング内
          </td>
        </tr>
        <tr>
          <td>代表</td>
          <td>
            渡部清花
          </td>
        </tr>
        <tr>
          <td>役員一覧</td>
          <td>
            役員 代表理事 渡部清花<br />
            理事 安齋耀太<br />
            理事 安西翔平<br />
            監事 渡邉賢太郎<br />
            設立 2018年2月6日
          </td>
        </tr>
        <tr>
          <td>スタッフ</td>
          <td>
            常勤職員 4名 非常勤職員 2名
          </td>
        </tr>
        <tr>
          <td>定款</td>
          <td>
            目的
            この法人は、日本に逃れてきた難民及びそれに準ずる人々(以下「難民」)に対して、日本社会とのつながりと住居・仕事にアクセスする機会を提供することにより、彼ら彼女らが第二の人生に希望を抱けるような、寛容性と多様性にあふれた社会づくりに寄与することを目的とする。<br />
            （定款第3条）<br />
            <a href="/pdf/the-articles-of-the-association.pdf">定款（設立時）</a>
          </td>
        </tr>
        <tr>
          <td>決算報告書</td>
          <td>
            <a href="http://welgee.sakura.ne.jp/pdf/latest-activity-report-2018.pdf">2018年度 決算報告書</a>
          </td>
        </tr>
        <tr>
          <td>パンフレット</td>
          <td>
            <a href="http://welgee.sakura.ne.jp/pdf/latest_pahmphlet_with_info.pdf">WELgee パンフレット(2019年9月更新)</a>
          </td>
        </tr>
        </tbody>
      </table>
      <style>{`
        #info {
          margin-top: 200px;
        }
        #info > table {
          width: 80%;
          max-width: 600px;
          margin: 0 auto;
          margin-top: 100px;
          table-layout: fixed;
          word-wrap: break-word;
          font-size: 1rem;
          line-height: 1.6rem;
        }
        #info > table > tbody > tr > td {
          padding: 15px 0;
          vertical-align: top;
        }
        #info > table > tbody > tr > td:nth-child(1) {
          width: 100px;
        }
      `}</style>
    </section>
  )
}
  
  export default WelgeeInformation;
