import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import OurActionBanner from './OurActionBanner'
import OurActionTap from './OurActionTap'

const index = () => {
  return (
    <>
        <Header />
          <OurActionBanner />
          <OurActionTap />
        <Footer />
    </>
  )
}

export default index