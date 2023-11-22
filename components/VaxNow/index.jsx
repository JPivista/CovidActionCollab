import React from 'react'

import Header from '../SharedComponents/Header'
import VaxNowBanner from './VaxNowBanner'

import '../StyleComponents'
import Footer from '../SharedComponents/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
            <VaxNowBanner />
          <Footer />
    </>


  )
}

export default index