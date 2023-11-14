import React from 'react'
import Header from '../SharedComponents/Header'
import HeroBanner from './HeroBanner'

import '../StyleComponents'
import OurAction from './OurAction'
import ImpactStories from './ImpactStories'
import OurImpact from './OurImpact'
import Footer from '../SharedComponents/Footer/'

const index = () => {
  return (
    <>
        <Header />
          <HeroBanner />
          <OurAction />
          <ImpactStories />
          <OurImpact />
        <Footer />
    </>
  )
}

export default index