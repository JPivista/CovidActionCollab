import React from 'react'

import { Container, Col } from 'react-bootstrap'

const InvestImpactBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/invest_impact/invest_impact_banner.jpg")',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container fluid style={bgCac} className='d-flex flex-column justify-content-center'>
                <Container className='d-flex flex-column align-items-center text-center'>

                    <h5 className='text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        INVEST FOR IMPACT
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            BUILDING RESILIENT COMMUNITIES TOGETHER
                            INVESTMENTS OPTIONS THROUGH #COVIDACTIONCOLLAB
                        </h3>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default InvestImpactBanner