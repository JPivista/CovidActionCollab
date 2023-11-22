'use client'

import React from 'react'

import { Container, Col, Image, Row } from 'react-bootstrap'

import '../../app/globals.css'
import CountUp from 'react-countup'

const VaxNowBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/vaxnow/vaxnow_banner.png")',
        minHeight: '60vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }


    const bgStyle = {
        background: '#E1EBEF'
    }

    const liStyle = {
        fontsize: '16px'
    }
    return (
        <>
            <Container fluid style={bgCac} className='d-flex flex-column justify-content-center'>
                <Container className='d-flex flex-column align-items-center text-center'>

                    {/* <h5 className='text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        DONATE
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5> */}

                    <Col md={8}>
                        <h1 className='text-white druk-wide font35px text-uppercase covid-blue lh-base' >
                            Let’s #BounceForward
                            with Vaccination
                        </h1>
                    </Col>

                    <Col>
                        <Image src="/vaxnow/vaxnow_injection.png" alt='' fluid />
                    </Col>
                </Container>
            </Container>

            <Container>
                <h1 className='our-team-name text-center'>
                    If not now, then when?
                </h1>
                <p>
                    VAXNOW is an initiative by #COVIDActionCollab in partnership with Private and Public stakeholders, Civil Societies, Media, Community Leaders and more.Our goal is to vaccinate as many people, who have not been reached, as quickly as possible. And for that…
                </p>

                <Row>
                    <Col className='d-flex flex-row gap-2 align-items-center'>
                        <Image src='/vaxnow/vulnerable_population.png' alt='' width={70} height={70} />
                        <p className='mb-0'>
                            Vulnerable populations <br />
                            need to be <br />
                            prioritized<strong className='covid-blue'> NOW</strong>
                        </p>
                    </Col>

                    <Col className='d-flex flex-row gap-2 align-items-center'>
                        <Image src='/vaxnow/vaccine_hestiancy.png' alt='' width={70} height={70} />
                        <p className='mb-0'>
                            Vaccine hesitancy <br />
                            has to be <br />
                            resolved <strong className='covid-blue'> NOW</strong>
                        </p>
                    </Col>

                    <Col className='d-flex flex-row gap-2 align-items-center'>
                        <Image src='/vaxnow/resource_destubution.png' alt='' width={70} height={70} />
                        <p className='mb-0'>
                            Resource distribution <br />
                            gap needs to be <br />
                            bridged <strong className='covid-blue'> NOW</strong>
                        </p>
                    </Col>
                </Row>

                <p>
                    Through this initiative we aim to vaccinate between 1,00,000 to 2,00,000 vulnerable individuals per district, adding up to 10 million across India. This will help reduce the severity of the COVID-19 cases and mortality, thus relieving the strain on our health systems. This effort will foster the collaboration and communication ecosystem required to power an optimal, integrated and multi-stakeholder crisis response for future challenges.
                </p>

                <p>
                    ‘VaxNow’ leverages local strengths and applies inclusive principles to engage multi-sectoral partnerships to vaccinate 10 million vulnerable populations across India. Each partner will play a critical role in achieving the desired outcomes; (i) Private Sector Organisations: funding, technology support and procurement (ii) Government: vaccine delivery and administration, (iii) NGOs and Civil Societies: demand generation, community mobilisation and navigation support, (iv) Media:awareness and visibility and (v) Covid Action Collaborative (CAC): ‘VaxNow’ design, resource mobilisation and overall facilitation.
                </p>

                <p>
                    <b>How do we take action, and build resilient communities?</b> By addressing challenges at various levels to make a lasting and life-saving impact.
                </p>

                <Row className='d-flex flex-lg-row flex-column gap-3 py-3'>
                    <Col className='d-flex flex-column align-items-end'>
                        <Col className='d-flex flex-column gap-3 pt-4'>
                            <Row className='d-flex felx-row bg-covid-blue p-4 align-items-center'>
                                <Col md={3}>
                                    <Image src='/vaxnow/individual_level.png' width={60} height={60} alt='' />
                                </Col>
                                <Col>
                                    <h6 className='mb-0 text-white'>
                                        INDIVIDUAL LEVEL
                                    </h6>
                                </Col>
                            </Row>

                            <Row className='d-flex felx-row bg-covid-blue p-4 align-items-center '>
                                <Col md={3}>
                                    <Image src='/vaxnow/individual_level.png' width={60} height={60} alt='' />
                                </Col>
                                <Col>
                                    <h6 className='mb-0 text-white'>
                                        INDIVIDUAL LEVEL
                                    </h6>
                                </Col>
                            </Row>

                            <Row className='d-flex felx-row bg-covid-blue p-4 align-items-center '>
                                <Col md={3}>
                                    <Image src='/vaxnow/individual_level.png' width={60} height={60} alt='' />
                                </Col>
                                <Col>
                                    <h6 className='mb-0 text-white'>
                                        INDIVIDUAL LEVEL
                                    </h6>
                                </Col>
                            </Row>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-column gap-3'>
                        <h6 className='covid-blue text-center fw-bold'>
                            CHALLENGES
                        </h6>
                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Awareness on benefits
                                </li>

                                <li className='liStyle'>
                                    Hesitancy & myths
                                </li>

                                <li className='liStyle'>
                                    Digital divide
                                </li>
                            </ul>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Ownership
                                </li>

                                <li className='liStyle'>
                                    Social barriers
                                </li>

                                <li className='liStyle'>
                                    Motivation
                                </li>
                            </ul>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Fragmented systems
                                </li>

                                <li className='liStyle'>
                                    Procurement & deployment
                                </li>

                                <li className='liStyle'>
                                    Inadequate preparedness
                                </li>
                            </ul>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-column gap-3'>
                        <h6 className='covid-blue text-center fw-bold'>
                            CHALLENGES
                        </h6>
                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Demand generation
                                </li>

                                <li className='liStyle'>
                                    Enable easy access
                                </li>

                                <li className='liStyle'>
                                    Pre & post vaccine support
                                </li>
                            </ul>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Leverage local strengths
                                </li>

                                <li className='liStyle'>
                                    Address social barriers
                                </li>

                                <li className='liStyle'>
                                    Incentivization
                                </li>
                            </ul>
                        </Col>

                        <Col className='d-flex flex-column justify-content-center' style={bgStyle}>
                            <ul className='mb-0 py-3'>
                                <li className='liStyle'>
                                    Planning & governance
                                </li>

                                <li className='liStyle'>
                                    Engage local leaders
                                </li>

                                <li className='liStyle'>
                                    Process acceleration
                                </li>
                            </ul>
                        </Col>
                    </Col>
                </Row>

                <p>
                    To learn more about the initiative or join us, Contact us – <a href='mailto:Covidactioncollab@catalysts.org' className='text-decoration-none text-black'>Covidactioncollab@catalysts.org</a>
                </p>

                <Col>
                    <h5 className='text-center'>
                        <span className='spandarkbefore d-lg-inline-block d-none '>
                        </span>
                        VAXNOW OPERATIONAL FRAMEWORK
                        <span className='spandarkafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Image src='/vaxnow/vaxnow_operational.jpg' fluid alt='' />
                </Col>

                <Col>
                    <h6 className='side-head-all'>
                        THE OPERATIONAL FRAMEWORK OF ‘VAXNOW’ COMES ALIVE THROUGH;
                    </h6>

                    <ul>
                        <li>Ground-level preparation,</li>
                        <li>Demand generation through community mobilization,</li>
                        <li>Vaccine delivery preparedness,</li>
                        <li>Facilitation of vaccine procurement through public-private partnerships,</li>
                        <li>Engagement with local authorities and leveraging enablers like technology for monitoring,</li>
                        <li>A helpline for pre and post vaccine support for adverse events.</li>
                    </ul>
                </Col>
            </Container>

            <Container fluid className='bg-covid-blue p-4'>
                <Container>
                    <h5 className='text-center text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        VAXNOW OPERATIONAL FRAMEWORK
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col className='text-white text-center py-4'>
                        <CountUp
                            className='druk-wide font30px'
                            start={0}
                            end={4.5}
                            suffix='M'
                            decimals='1'
                        >

                        </CountUp>
                        <p>
                            Vaccinations Enabled
                        </p>
                    </Col>
                </Container>
            </Container>

            {/* <Container className='py-4'>
                <h5 className='text-center text-black'>
                    <span className='spandarkbefore d-lg-inline-block d-none '>
                    </span>
                    IMPACT STORIES
                    <span className='spandarkafter d-lg-inline-block d-none'>
                    </span>
                </h5>

            </Container> */}
        </>
    )
}

export default VaxNowBanner