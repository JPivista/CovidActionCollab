import React from 'react'

import { Container, Col } from 'react-bootstrap'

const ApplyToJoinBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/apply_to_join_banner.jpg")',
        minHeight: '90vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container fluid style={bgCac} className='d-flex flex-column justify-content-center '>
                <Container className='d-flex flex-column align-items-center text-center'>

                    <h5 className='text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        KNOWLEDGE REPOSITORY
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            INSIGHTS SHARPEN ACTION AND ELEVATE IMPACT.
                        </h3>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default ApplyToJoinBanner