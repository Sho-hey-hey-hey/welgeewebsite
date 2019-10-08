import React from 'react'
import SectionTitle from "../components/helper/section-title";
import { useStaticQuery, Link, graphql } from "gatsby"
const NewsPage = ({data}) => {
  console.log('********', data)
  return (
    <div id="news">
      <SectionTitle jpTitle="お知らせ" enTitle="News"/>
      <div className="items">
        <div className="item">
          <div className="category">ニュース</div>
          <a href="/news/news-11.html">
            <img
              src="https://lh3.googleusercontent.com/bOY_oCur8ZRpNp0NDF86MF2pA209RVSnYRyFsaU_PyzZHf-l4gL96li1P6Ir6qTTA0AzVwDzTq5SN43MfxGcays-6SLHxcVCx_m4798ojZJ9odAZeTxtY0N9qEfFLwuarcYP16sD1IvN3Lv20sVeR2vlptbi2NImc4VEebF4p7O93x7InIiBkXwjcqaMR6p7jXv_CGyDjfnsOpqbvAQ0A0FJMu0kXzQQ8cnynW_qqb49GMTmR8TbAfArQK4w7vItH4FYw52mvqXAbJP8BDIG3xvFlGnDJkQlzj_nhnb46dU_DrT8Vah-_RXpkzq3nPbh8sMkRrWuMfYLwxQTmbGwP4pOLpx1v_WeO1LiI_cbOrSngnBhorLMNHNv34-TBUVxQ7qUVvAYu746X_zfi_fJ4k-2gqe6VXLFIHpWtcZy8ckjbgo6YsH018ZMOKuMWZU8Bzm1qUjCMKjuv-BG1KMfjoys6tWDyGC0bKetbhrCv9M6R847YT2AiaXMT0VUwMjWvz1gScPPoAKMYABAEzj4JyHHXvq1qIeV06AgMR1ucRIIVnfHcssITxZhONqX_eIej7FvJiGynjEfbw8Z8EuZ82jr2uO68omE3TZnSsOSlQ1Etx0UVyDTHfM0uWMYhjtalRDv3uCOOjQuTTqH_JbaHFeT=w1440-h810-no"/></a>
          <div className="date">2019.6.14</div>
          <div className="title">世界難民の日とは？世界難民の日が生まれた経緯と、今年国内で開催される、キャンペーンやイベントをまとめました。</div>
        </div>
        <div className="item">
          <div className="category">ニュース</div>
          <a href="https://prtimes.jp/main/html/rd/p/000000014.000032891.html"><img
            src="https://lh3.googleusercontent.com/T9UTVNq8dFINlKtj2upW54cQXe39btpMaeKYm6etOdqOdoRgtq1I4af7SpeJky2GAHMGqo6gL-Bkx4KXTlr4pfrGLNSh8-W51baqXwG1_Gb5jYicvp5ovspV1sKxXWfu_4xunKY-qpNmt23y553xKaw_xYZIkbK7S0SoP-lgjImggpimJz1H763KHVeIC9liLi2kr6hyMXvReIcWwulaM78GYQXwyq5Td8xlZlooXRdyLb7G49tAwR0jERi3F9fBqh_0McPkobdhAHMTSx5xRrARGThug7HcNU-RwT7q67DRFec92Go4nrHmk0b7muVZbPd2h_Zllb8OtC2LubJn56cELCw9COUgK7BzxLYHBrYKETiBg8lkKy8HHxsestnJjzRQRkRJ1ZhC3Kn_cqd5SHzeGQOpAi3dbvgjOBYFbgWe_Pw6InUxVtZ_UMOvxR44LfPoJPX5flbMzN38xpdd6KRrBjFd4Elij0NLsdUXBvgVOl78lIRgJ6D1bVjhBqLsXGBmO8NEPXuuVm0TvPtRvaS-8lNSQXVCTNrXhXjOtyL1RmbhQg_RWjSlKIXl9Nk0znABMv_LuUY8IEkhvMHV85IeziyZqARVMp0vManv0MLHtt-OFNhIOXIIh83blaqck7KosIZXIPQ9kC6OFRfA-wBZ=w800-h533-no"/></a>
          <div className="date">2019.6.20</div>
          <div className="title">逃れてきた難民が「テック人材」に大変身！3団体の協働による、日本初の「難民プログラミング道場」、始動</div>
        </div>
      </div>
      <style jsx={true}>{`
      #news {
        margin-top: 100px;
      }
      #news > .items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        max-width: 950px;
        margin: 0 auto;
      }
      #news > .items > .item {
        width: 250px;
        margin: 0 auto;
        margin-top: 30px;
      }
      #news > .items > .item > .category {
        width: 70px;
        height: 25px;
        background-color: #5CBBFF;
        color: white;
        border-radius: 4px;
        text-align: center;
        font-size: 13px;
        line-height: 25px;
      }
      #news > .items > .item > a > img {
        margin-top: 12px;
        width: 250px;
        height: 150px;
      }
      #news > .items > .item > .date {
        margin-top: 5px;
        font-size: 14px;
      }
      #news > .items > .item > .title {
        margin-top: 8px;
        font-size: 14px;
        line-height: 1.5;
      }
      #news > a.button {
        background-color: #FFDE59;
        color: white;
        margin-top: 50px;
      }
    `}</style>
    </div>
  )
}



export default NewsPage
