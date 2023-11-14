import React from 'react'

import Header from '../SharedComponents/Header'

import '../StyleComponents'
import ImpactStoriesBanner from './ImpactStoriesBanner'
import ImpactStoriesTap from './ImpactStoriesTap'

const index = () => {
    return (
        <>
            <Header />
            <ImpactStoriesBanner />
            <ImpactStoriesTap />
        </>
    )
}

export default index