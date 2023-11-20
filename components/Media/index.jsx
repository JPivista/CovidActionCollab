import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'
import AllMedia from './AllMedia'
import MediaBanner from './MediaBanner'

const index = () => {
  return (
    <>
        <Header />
            <MediaBanner />
            <AllMedia />
        <Footer />
    </>
  )
}

export default index