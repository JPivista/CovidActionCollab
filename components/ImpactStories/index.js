import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import '../StyleComponents'
import ImpactStoriesBanner from './ImpactStoriesBanner'
import ImpactStoriesTap from './ImpactStoriesTap'

const index = () => {
    return (
        <>
            <Header />
            <ImpactStoriesBanner />
            <ImpactStoriesTap />
            <Footer />
        </>
    )
}

export default index