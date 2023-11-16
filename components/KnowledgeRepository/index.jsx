import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'

import KnowledgeRepoBanner from './KnowledgeRepoBanner'
import KnowledgeRepoSlider from './KnowledgeRepoSlider'

import '../StyleComponents'
import KnowledgeTap from './KnowledgeTap'

const index = () => {
  return (
    <>
      <Header />
        <KnowledgeRepoBanner />
        <KnowledgeRepoSlider />
        <KnowledgeTap />
      <Footer />
    </>
  )
}

export default index