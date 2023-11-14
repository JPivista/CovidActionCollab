import React from 'react'

import { Container, Col } from 'react-bootstrap'

const KnowledgeRepoBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/knowledge_repo/knwoledge_repo_banner.jpg")',
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

            <Container className='py-4'>
                <p>
                    We have carefully put together resources that will be useful for people at the frontlines of the battle against COVID-19. These include health service providers, front-line workers, CSOs as well as the general public. We have taken care to screen the sources of information and have selected from those we know to be reliable. Please visit the sections to find out more.
                </p>
            </Container>
        </>
    )
}

export default KnowledgeRepoBanner