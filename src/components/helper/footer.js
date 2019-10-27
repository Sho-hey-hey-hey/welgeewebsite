import React from 'react';

import welgeeLogo from '../../images/logo2.png'
const PageFooter = () => {
  return (
    <footer>
      <div className="company">
        <img src={welgeeLogo} />
        <p>
          NPO法人 WELgee(ウェルジー)<br />
          <br />
            〒150-6027 東京都渋谷区恵比寿4丁目20-3 恵比寿ガーデンプレイスタワー27階 <a
            href="https://www.google.com/maps/place/%E7%89%B9%E5%AE%9A%E9%9D%9E%E5%96%B6%E5%88%A9%E6%B4%BB%E5%8B%95%E6%B3%95%E4%BA%BAWELgee(%E3%82%A6%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%BC)/@35.6423633,139.7134531,15z/data=!4m2!3m1!1s0x0:0x9dc667725c1c6f01?ved=2ahUKEwiD-sqnqYvhAhUMA4gKHZI2BKQQ_BIwDHoECAUQCA">[map]</a><br />
            <br />
              Tel 080-3584-1991<br />
              Mail info@welgee.jp
        </p>
        <div className="sns">
          <a href="https://twitter.com/WELgee_Japan">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.facebook.com/welgee/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://www.instagram.com/welgee_japan/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="contact">
        <a className="button" href="https://goo.gl/forms/iJpzPjz7qNqMIHG92">お問い合わせ</a>
        <a className="item" href="https://goo.gl/forms/mvFjaB2FgnIEIixC3">
          企業の方へ
        </a>
        <a className="item"
           href="https://docs.google.com/forms/d/e/1FAIpQLSep_EJLvORNxR3I5pMgx_jnSxld2mQeYFN7TzUYTC-CqRv57g/viewform">メディアの方へ</a>
        <a className="item"
           href="https://docs.google.com/forms/d/e/1FAIpQLSeSdlTVVUgIXlgUTW1ivKIhEqCSCnq_2R22SSLdzFXF8nnFyA/viewform">学校関係の方へ</a>
        <a className="item"
           href="http://welgee.sakura.ne.jp/wp/wp-content/themes/fukasawa/privacy-policy.pdf">プライバシーポリシー</a>
      </div>
      <div className="copyright">
        Copyright © 特定非営利活動法人WELgee All rights reserved.
      </div>
      <style jsx={true}>{`
        footer {
          margin-top: 100px;
        }
        footer .container {
          width: 100vw;
          max-width: 100vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: -50px;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        footer .company {
          width: 100vw;
          padding-top: 50px;
          padding-bottom: 50px;
          background-color: #EAEAEA;
        }
        footer .company img {
          display: block;
          width: 180px;
          height: 108px;
          margin: 0 auto;
        }
        footer .company p {
          padding-left: 20px;
          font-size: 0.8rem;
          text-align: left;
          max-width: 600px;
          margin: 10px auto;
        }
        footer .company .sns {
          padding-left: 20px;
          display: flex;
          justify-content: space-between;
          width: 150px;
          margin: 10px auto;
        }
        footer .company .sns a {
          text-decoration: none;
        }
        footer .company .sns i {
          width: 30px;
          height: 30px;
          background-color: white;
          border-radius: 15px;
          text-align: center;
          line-height: 30px;
        }
        footer .contact {
          display: flex;
          height: 100px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
        }
        footer > .contact > a.button {
          color: black;
          margin-top: 0px;
        }
        footer .contact .item {
          text-decoration: none;
          width: 160px;
          text-align: center;
          margin: 0 auto;
          font-size: 16px;
          font-weight: bold;
        }
        footer .copyright {
          width: 100vw;
          height: 30px;
          background-color: #333333;
          color: white;
          text-align: center;
        }
        .sns .fa-facebook-f {
          color: #2B72A5;
          font-size: 1.2rem;
          margin-left: 2rem;
        }
        .fa-twitter {
          color: #5CBBFF;
          font-size: 1.2rem;
          margin-left: 2rem;
        }
        .fa-instagram {
          color: #d62976;
          font-size: 1.2rem;
          margin-left: 2rem;
        }
      `}</style>
    </footer>
  )
}

export default PageFooter

