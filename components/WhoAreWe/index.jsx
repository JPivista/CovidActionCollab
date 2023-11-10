import React from 'react'

import Header from '../SharedComponents/Header'

import '../StyleComponents'
import WhoAreWeBanner from './WhoAreWeBanner'
import ContentWhoWeAre from './ContentWhoWeAre'
import OurTeam from './OurTeam'

const index = () => {
  return (
    <>
        <Header />
        <WhoAreWeBanner />
        <ContentWhoWeAre />
        <OurTeam />
    </>
  )
}

export default index