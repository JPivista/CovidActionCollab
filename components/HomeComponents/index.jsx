import React from 'react'
import Header from '../SharedComponents/Header'
import HeroBanner from './HeroBanner'

import '../StyleComponents'
import OurAction from './OurAction'
import ImpactStories from './ImpactStories'
import OurImpact from './OurImpact'
import JoinCac from './JoinCac'

const index = () => {
  return (
    <>
        <Header />
        <HeroBanner />
        <OurAction />
        <ImpactStories />
        <OurImpact />
        <JoinCac />
    </>
  )
}

export default index