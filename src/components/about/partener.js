import React from 'react';

import jfeelLogo from '../../images/about/partner-jfeel.jpg'
import wesleyLogo from '../../images/about/partner-wesley.png'
import rokinLogo from '../../images/about/partner-rokin.jpg'
import prtimesLogo from '../../images/about/partner-prtimes.png'
import jelaLogo from '../../images/about/partner-jela.jpg'
import cheerioLogo from '../../images/about/partner-cheerio.jpg'
import hisLogo from '../../images/about/partner-his.png'
import digisearchLogo from '../../images/about/partner-digisearch.png'
import crossfieldsLogo from '../../images/about/partner-crossfields.jpg'
import AboutSectionTitle from "../common/about-section-title"



const PartnerSection = () => {
  return (
    <section id="partners">
      <AboutSectionTitle enTitle="Partner" jpTitle="協働企業"/>
      <div className="items">
        <img src={jfeelLogo} />
        <img src={wesleyLogo} />
        <img src={rokinLogo} />
        <img src={prtimesLogo} />
        <img src={jelaLogo} />
        <img src={cheerioLogo} />
        <img src={hisLogo} />
        <img src={digisearchLogo} />
        <img src={crossfieldsLogo} />
        <img src="http://urx.red/T2MK" />
      </div>
      <style jsx>{`
        #partners {
          margin-top: 100px;
        }
        #partners > .items {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          width: 80%;
          max-width: 1080px;
          margin: 0 auto;
        }
        #partners > .items > img {
          margin: 0 auto;
          margin-top: 40px;
          width: 190px;
        }
      `}</style>
    </section>
  )
}


export default PartnerSection;
