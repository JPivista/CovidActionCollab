import React from 'react'

import Header from '../SharedComponents/Header/'
import Footer from '../SharedComponents/Footer'

import InvestImpactTab from './InvestImpactTab'
import InvestImpactBanner from './InvestImpactBanner'

const index = () => {
  return (
    <>
      <Header />
      <InvestImpactBanner />
      <InvestImpactTab />
      <Footer />
    </>
  )
}

export default index