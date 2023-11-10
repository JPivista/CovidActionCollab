import React from 'react'
import { Container, Col } from 'react-bootstrap'

const OurImpactBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/our_impact/our_impact_banner.jpg")',
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
                        OUR IMPACT
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            Our Impact Aligns With Our Mission
                        </h3>
                    </Col>
                </Container>
            </Container>

            <Container>
                <p>
                    Since March 2020, #COVIDActionCollab powered by its diverse and determined set of partners across India, has been working tirelessly to reach the unreached. The numbers are milestones along our journey of on-ground initiatives. With valuable  support from USAID and Skoll Foundation we’ve been able to empower the most vulnerable against COVID-19.
                </p>
            </Container>
        </>
    )
}

export default OurImpactBanner