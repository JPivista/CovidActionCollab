import React from 'react'

import { Container, Col } from 'react-bootstrap'



const OurActionBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/our_action/our_action_banner.jpg")',
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
                        OUR ACTION
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            Action is our middle name and defining character
                        </h3>
                    </Col>
                </Container>
            </Container>

            <Container >
                <p>
                    Our urgent and adaptive action addresses the immediate, enhances competencies and plans for efficiencies. This is our CAC Tripod focus. Partners can collaborate across these areas, creating transformational momentum at different touchpoints - delivering wholesome impact that is greater than its sum of parts.
                </p>
            </Container>
        </>
    )
}

export default OurActionBanner