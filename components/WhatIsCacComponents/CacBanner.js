import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CacBanner = () => {


    const bgCac = {
        backgroundImage: 'url("/what_is_cac/what_is_cac_banner.jpg")',
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
                        WHAT IS CAC?
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={10}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            We are an all India collaborative, that helps maximize resources in an urgent and dynamic manner to build community resilience in vulnerable populations
                        </h3>
                    </Col>
                </Container>
            </Container>

            <Container>
                <Col>
                    <p>
                        We have united to provide relief, recovery and build resilience among the most vulnerable communities. The collaborative consists of Organizations and Networks working together to support these communities during the period of crisis and enable them to secure their future. The 309 partners strong collaborative has delivered 17 lakh services with 2000 volunteers.
                    </p>
                    <p>
                        <b className='fw-bold'>What sets us apart? </b>
                        Our approach and ambition.
                        <br />
                        1. We are deeply guided by humanity which has fueled a non-negotiable approach of taking every decision with only the community’s interest at heart. Always people first.
                        <br />
                        2. Another feature is that we are obsessed with the urgency that a social crisis deserves. The time is now.
                        <br />
                        3. We are further powered by the possibilities that working closely with value aligned partners present. Inspired by innovation.
                    </p>
                    <p>
                        Also, we are a ‘Leadership Focused Collaborative’, where each partner is not only a team player but also a captain delivering impact with clarity and conviction. All of this comes together TO HELP NURTURE COMMUNITY RESILIENCE INTO A SOURCE OF COLLECTIVE STRENGTH.
                    </p>
                    <p>
                        The Catalyst Group, the incubator is facilitating the formation and operation of the collaborative driving its success along with eminent partners such as USAID, the Skoll Foundation and the Macarthur Foundation.
                    </p>
                </Col>

                <Row className='d-flex flex-lg-row flex-column py-5'>

                    <Col className='text-lg-start text-center'>
                        <h5 className='side-head-all'>
                            <span className='spandarkbefore d-lg-inline-block d-none '>
                            </span>
                            OUR VISION
                            <span className='spandarkafter d-lg-inline-block d-none'>
                            </span>
                        </h5>
                        <h2 className='side-heading pe-lg-5 pe-0'>
                            A world that is resilient & invigorated.
                        </h2>
                        <p className='text-start  pe-lg-5 pe-0'>
                            Empowering the key vulnerable communities to survive and thrive during humanitarian crises.
                        </p>
                    </Col>

                    <Col className='p-4 p-lg-0 '>
                        <h5 className='side-head-all text-lg-start text-center'>
                            <span className='spandarkbefore d-lg-inline-block d-none '>
                            </span>
                            OUR MISSION
                            <span className='spandarkafter d-lg-inline-block d-none'>
                            </span>
                        </h5>
                        <p>
                            We aim to achieve synergy among our partners at multiple levels and augment efforts in order to accelerate impact,
                        </p>

                        <Col className='d-flex flex-column gap-3 px-lg-3 p-0'>

                            <Row className='d-flex flex-lg-row flex-wrap flex-column'>
                                <Col lg={2} className='text-lg-start text-center'>
                                    <Image src="/what_is_cac/our_mission_1.png" alt='' width={80} height={80} />
                                </Col>
                                <Col className='d-flex flex-column justify-content-center'>
                                    <p className='mb-0'>
                                        Synergize resource access and allocate efforts, in an adaptive and urgent manner
                                    </p>
                                </Col>
                            </Row>
                            <Row className='d-flex flex-lg-row flex-wrap flex-column'>
                                <Col lg={2} className='text-lg-start text-center'>
                                    <Image src="/what_is_cac/our_mission_2.png" alt='' width={80} height={80} />
                                </Col>
                                <Col className='d-flex flex-column justify-content-center'>
                                    <p className='mb-0'>
                                        Augment collaboration and connections, within the larger network, at multiple levels
                                    </p>
                                </Col>
                            </Row>
                            <Row className='d-flex flex-lg-row flex-wrap flex-column'>
                                <Col lg={2} className='text-lg-start text-center'>
                                    <Image src="/what_is_cac/our_mission_3.png" alt='' width={80} height={80} />
                                </Col>
                                <Col className='d-flex flex-column justify-content-center'>
                                    <p className='mb-0'>
                                        Accelerate transformative impact in keeping with the changing needs within vulnerable communities
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>

                <Col>
                    <p>
                        About the Catalyst Group -
                        Catalyst Group is a social impact platform with significant experience in social and economic development as well as humanitarian emergencies. Catalyst Management Services (CMS), part of the Catalyst Group, is a Social Impact Specialist that helps partners achieve Scale, Impact and Sustainability.
                    </p>

                    <p>
                        About USAID - USAID is the world’s premier international development agency and a catalytic actor driving development results. USAID’s work advances U.S. national security and economic prosperity, demonstrates American generosity, and promotes a path to recipient self-reliance and resilience.
                    </p>

                    <p>
                        About USAID - USAID is the world’s premier international development agency and a catalytic actor driving development results. USAID’s work advances U.S. national security and economic prosperity, demonstrates American generosity, and promotes a path to recipient self-reliance and resilience.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default CacBanner