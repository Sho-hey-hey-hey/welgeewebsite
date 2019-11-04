import React from 'react'
import WhiteBackgroundText from "../../components/common/white-background-text"
import Layout from "../../components/layout"

import passionImage from '../../images/about/passion/passion.jpg'
import IssueSection from "../../components/about/passion/issue"
import WhySection from "../../components/about/passion/why"
import ProblemsSection from "../../components/about/passion/problems"
import ActualSection from "../../components/about/passion/actual"
import MissionSection from "../../components/about/passion/mission"
import CollaborateSection from "../../components/about/passion/collaborate"
const PassionPage = () => {
  return (
    <Layout>
      <div>
        <WhiteBackgroundText
          enTitle="Passion"
          jpTitle="私たちの思い"
          description={"私たちは、自らの境遇によって未来を奪われた難民たちが、 \n 自らの境遇を乗り超えて、未来を描けるような社会を作ります。"}
          sectionId="passion"
        />
        <div className="image"/>
      </div>
      <IssueSection />
      <WhySection/>
      <ProblemsSection />
      <ActualSection />
      <MissionSection />
      <CollaborateSection />
      <style jsx>{`
        .image {
          margin-top: 42px;
          width: 100vw;
          height: 500px;
          background-image: url("${passionImage}");
          background-size: cover;
          background-position: center;
        }
        .description {
          color: #333333;
          text-align: center;
          white-space: pre-wrap;
          line-height: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default PassionPage

