import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'
import ApplyToJoinBanner from './ApplyToJoinBanner'
import ApplyToJoinForm from './ApplyToJoinForm'

const index = () => {
  return (
    <>
      <Header />
        <ApplyToJoinBanner />
        <ApplyToJoinForm />
      <Footer />
    </>
  )
}

export default index