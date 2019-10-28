import React from 'react'
import AboutWelgee from "../../components/about/about-welgee"
import Layout from "../../components/layout"
import TextImageBackground from "../../components/helper/text-img-background"
import IssueSection from "../../components/about/issue"


import welgeeTeamBackground from '../../images/about/welgee-team-bg.jpg'
import missionBackground from '../../images/about/mission-bg.png'
import WelgeeInformation from "../../components/about/welgee-info"
import AwardsSection from "../../components/about/award"
import MessagesSection from "../../components/about/messages"
import PartnerSection from "../../components/about/partener"
import CoreProgramsSection from "../../components/about/core-programs"
const welgeeTeamDescription = '「自らの境遇にかかわらず、ともに未来を築ける社会」を目指し、\n ともに活動する仲間を紹介します。'
const missionDescription = '志を発掘しつながりを広げ、未来をデザインできる仕掛けをつくる「難民」という背景を超えて、誰もが「自分らしさ」を活かしながら、未来を創り変えていける状態をつくります。\n' +
  '私たちの役割は、彼らの友人・家族として、志と可能性あふれる彼らの、夢に向かう道のりに伴走することです。'

const AboutPage = () => (
  
  <Layout>
    <AboutWelgee />
    <TextImageBackground
      jpTitle="チームウェルジー"
      enTitle="Team WELgee"
      description={welgeeTeamDescription}
      buttonLink="/about/team-welgee"
      backgroundImage={welgeeTeamBackground}
    />
    <IssueSection />
    <TextImageBackground
      jpTitle="私たちの役割"
      enTitle="Mission"
      description={missionDescription}
      buttonLink="/team-welgee"
      backgroundImage={missionBackground}
    />
    <WelgeeInformation />
    <AwardsSection />
    <MessagesSection />
    <PartnerSection />
    <CoreProgramsSection />
  </Layout>
)

export default AboutPage
