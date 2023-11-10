import React from 'react'

import Header from '../SharedComponents/Header/'
import InvestImpactTab from './InvestImpactTab'
import InvestImpactBanner from './InvestImpactBanner'

const index = () => {
  return (
    <>
        <Header />
        <InvestImpactBanner />
          <InvestImpactTab />
    </>
  )
}

export default index