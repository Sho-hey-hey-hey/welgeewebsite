import React from 'react';

import collaborateImage01 from '../../../images/about/passion/collaborate-1.jpg'
import collaborateImage02 from '../../../images/about/passion/collaborate-2.jpg'
import collaborateImage03 from '../../../images/about/passion/collaborate-3.jpg'

import collaborateBgImage from '../../../images/about/passion/collaborate-bg.jpg'
import YellowButton from "../../common/yellow.button"

const CollaborateSection = () => {
  return (
    <div id="collaborate">
      <div className="filter">
        <h2>協働・連携しませんか？</h2>
        <h5>Why Not With Us?</h5>
        <div className="items">
          <div className="item">
            <img src={collaborateImage01} />
            <h3>学校の方へ</h3>
            <p className="global-text">
              生徒たちが世界の課題と出会う機会を、難民の講師とともに作りませんか? 当事者の生の声から、世界と出会い、真の国際人育成に繋がります
            </p>
            <a className="button"
               href="https://docs.google.com/forms/d/e/1FAIpQLSeSdlTVVUgIXlgUTW1ivKIhEqCSCnq_2R22SSLdzFXF8nnFyA/viewform">more</a>
          </div>
          <div className="item">
            <img src={collaborateImage02} />
            <h3>企業の方へ</h3>
            <p className="global-text">
              日本に逃れてきた難民たちの人材としての強みと活かし方をお伝えします。<br/>
/               企業研修にご興味のある方は、こちらのフォームにご連絡ください。
            </p>
            <a className="button" href="https://goo.gl/forms/mvFjaB2FgnIEIixC3">more</a>
          </div>
          <div className="item">
            <img src={collaborateImage03} />
            <h3>メディアの方へ</h3>
            <p className="global-text">
              難民一人一人の声を、WELgeeと一緒に伝えませんか? <br />
              一つ一つの報道が、社会を変えるきっかけとなります。
            </p>
            <a className="button"
               href="https://docs.google.com/forms/d/e/1FAIpQLSep_EJLvORNxR3I5pMgx_jnSxld2mQeYFN7TzUYTC-CqRv57g/viewform">more</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        #collaborate {
          text-align: center;
          margin-top: 100px;
          background-image: url("${collaborateBgImage}");
          background-size: cover;
          background-position: center;
        }
        #collaborate > .filter {
          background-color: rgba(255, 255, 255, 0.7);
          padding: 100px 0;
        }
        #collaborate > .filter > h5 {
          margin-top: 10px;
          font-family: "League Spartan";
        }
        #collaborate > .filter > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        #collaborate > .filter > .items > .item {
          width: 100%;
          max-width: 260px;
          margin-top: 50px;
        }
        #collaborate > .filter > .items > .item > img {
          width: 250px;
          height: 250px;
          border-radius: 125px;
        }
        #collaborate > .filter > .items > .item > h3 {
          margin-top: 30px;
        }
        #collaborate > .filter > .items > .item > p {
          margin-top: 30px;
          font-size: 16px;
        }
        #collaborate > .filter > .items > .item > .button {
          margin-top 50px;
          background-color: #FFBF00;
          width: 240px;
          height: 40px;
          display: block;
          margin: 0 auto;
          margin-top: 30px;
          border-radius: 20px;
          background-color: #FFBF00;
          color: white;
          text-align: center;
          font-family: "League Spartan";
          font-weight: bold;
          line-height: 40px;
          font-size: 16px;
          text-decoration: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease 0s;
        }
      `}</style>
    </div>
  )
}

export default CollaborateSection
