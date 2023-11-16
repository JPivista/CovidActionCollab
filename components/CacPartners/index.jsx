import React from 'react'

import Header from '../SharedComponents/Header'

import '../StyleComponents'
import HeroBannerCacPartners from './HeroBannerCacPartners'
import CacPartnersGallery from './CacPartnersGallery'
import Footer from '../SharedComponents/Footer/Footer'

const index = () => {
  return (
    <>
        <Header />
          <HeroBannerCacPartners />
          <CacPartnersGallery />
        <Footer />
    </>
  )
}

export default index