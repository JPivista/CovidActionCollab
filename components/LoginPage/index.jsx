import React from 'react'

import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'
import LoginForm from './LoginForm'

const index = () => {
  return (
    <>
        <Header />
            <LoginForm />
        <Footer />
    </>
  )
}

export default index