import React from 'react'
import { Col, Container } from 'react-bootstrap'

const WhoAreWeBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/who_are_we/who_are_we_banner.jpg")',
        minHeight: '80vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container fluid style={bgCac} className='d-flex flex-column justify-content-center'>
                <Container className='d-flex flex-column align-items-center text-center'>

                    <h3 className='text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        Who we are
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h3>

                    <Col md={6}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            With speed being central to our approach, it’s critical to have a stabilizing force.
                        </h3>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default WhoAreWeBanner