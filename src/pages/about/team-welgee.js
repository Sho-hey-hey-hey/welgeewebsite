import React from 'react'
import WhiteBackgroundText from "../../components/helper/white-background-text"
import Layout from "../../components/layout"


const teamDescription = 'WELgeeのメンバーは、職員や顧問だけではなく、難民の若者たちや、共感する企業の方々、アドバイザー、寄付者の方々...\n' +
'理想の社会の実現のために、共に活動する仲間達が、垣根を超えて存在しています。\n' +
'Team WELgeeでは、その中でもコアで関わるスタッフ達を紹介いたします。'

const TeamWelgeePage = () => (
  <Layout>
    <WhiteBackgroundText
      enTitle="Team WELgee"
      jpTitle="チームウェルジー"
      description={teamDescription}
    />
  </Layout>
)

export default TeamWelgeePage
