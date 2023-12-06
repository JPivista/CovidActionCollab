import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import DonateBanner from './DonateBanner'
import DoanteTap from './DoanteTap'

const index = () => {
  return (
    <>
      <Header />
      <DonateBanner />
      <DoanteTap />
      <Footer />
    </>
  )
}

export default index