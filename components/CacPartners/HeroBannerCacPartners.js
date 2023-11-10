import React from 'react'
import { Col, Container } from 'react-bootstrap'

import '../../app/globals.css'

const HeroBannerCacPartners = () => {
    const bgCac = {
        backgroundImage: 'url("/cac_partners/cac_partners_banners.jpg")',
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
                        CAC PARTNERS
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            IN A TRUE COLLABORATIVE THE LINES BETWEEN THE PARTNERS AND THE COLLABORATIVE FADE. WE BECOME OUR PARTNERS
                        </h3>

                        <h3 className='text-white druk-wide text-uppercase' >
                            WE ARE 300 PARTNERS STRONG (AND GROWING!)
                        </h3>
                    </Col>
                </Container>
            </Container>

            <Container>
                <p>
                    CAC believes that we are stronger together. We multiply the strength all of us have within us to rise above our challenges, when we come together
                    and collaborate.
                </p>

                <p>
                    Our network of strong partners from diverse backgrounds is the force that CAC thrives on. We have partners in every state and union territory of
                    the country and through them we aim to reach at least 10 million people from the marginalized communities, facilitating their journey to
                    resilience… to bouncing forward.
                </p>

                <p>
                    We have over 150 implementors as CAC partners working directly with the communities like fisherfolks, people with disabilities, female sex
                    workers, MSMEs, small farmers, senior citizens, homeless people, transgender, migrants, PLHIV, artisans, factory workers and more.
                </p>
                <p>
                    We also have providers rich in human resources, technology, finance and enablers from the policy, academic and industry sphere.
                </p>
            </Container>
        </>
    )
}

export default HeroBannerCacPartners