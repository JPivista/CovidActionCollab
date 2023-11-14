import React from 'react'

import Header from '../SharedComponents/Header'
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
    </>
  )
}

export default index