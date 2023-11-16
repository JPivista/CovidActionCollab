import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import '../StyleComponents'
import CacBanner from './CacBanner'

const index = () => {
  return (
    <>
        <Header />
          <CacBanner />
        <Footer />
    </>
  )
}

export default index