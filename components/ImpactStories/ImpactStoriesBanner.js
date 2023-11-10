import React from 'react'

import { Container, Col } from 'react-bootstrap'

const ImpactStoriesBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/impact_stories/impact_stories_banner.jpg")',
        minHeight: '80vh',
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
                        IMPACT STORIES
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            IMPACT IS BEST WHEN FELT ON GROUND.
                        </h3>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default ImpactStoriesBanner