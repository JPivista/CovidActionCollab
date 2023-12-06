import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../headerfooter.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <Container fluid style={{ background: '#D9D9D9' }}>
            <Container className='py-4'>

                <Row className='d-flex flex-lg-row flex-column'>
                    <Col className='d-flex flex-column gap-1'>
                        <Link href="" className='text-decoration-none text-black custom-footer-style fw-bold'>
                            SITEMAP
                        </Link>

                        <Link href="/" className='text-decoration-none text-black custom-footer-style custom-header-style'>
                            Home
                        </Link>
                        <Link href="/what-is-cac" className='text-decoration-none text-black custom-footer-style'>
                            What is CAC
                        </Link>
                        <Link href="/who-we-are" className='text-decoration-none text-black custom-footer-style'>
                            Who we are
                        </Link>
                        <Link href="/our-action" className='text-decoration-none text-black custom-footer-style'>
                            Our Action
                        </Link>
                        <Link href="" className='text-decoration-none text-black custom-footer-style'>
                            Story in Numbers
                        </Link>
                    </Col>


                    <Col className='d-flex flex-column gap-1'>
                        <Link href="/knowledge-repository" className='text-decoration-none text-black mt-4 custom-footer-style'>
                            Knowledge Repository
                        </Link>
                        <Link href="/impact-stories" className='text-decoration-none text-black custom-footer-style'>
                            Impact Stories
                        </Link>
                        <Link href="https://communityactioncollab.org/join-us/" className='text-decoration-none text-black custom-footer-style'>
                            Apply to join
                        </Link>
                        <Link href="/invest-for-impact" className='text-decoration-none text-black custom-footer-style'>
                            Invest for Impact
                        </Link>
                        <Link href="/donate" className='text-decoration-none text-black custom-footer-style'>
                            Donate
                        </Link>
                        <Link href="https://communityactioncollab.org/contact-us/" className='text-decoration-none text-black custom-footer-style'>
                            Careers
                        </Link>
                    </Col>


                    <Col>
                        <h6 className='fw-bold custom-footer-style'>
                            CONTACT US
                        </h6>
                        <p className='custom-footer-style'>
                            We would love to hear from you.
                            Please write to us at
                            covidactioncollab@catalysts.org
                        </p>
                        <div className='d-flex flex-row gap-2'>
                            <Link href="https://www.linkedin.com/showcase/covid-action-collaborative/" target='_blank'>
                                <i class="bi bi-linkedin"></i>
                            </Link>
                            <Link href="https://twitter.com/CovActionCollab" target='_blank'>
                                <i class="bi bi-twitter-x"></i>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={5}>
                        <Row className='d-flex flex-lg-row flex-column justify-content-center align-content-center'>
                            <Col>
                                <Image src='/usaid.png' alt='' fluid />
                            </Col>
                            <Col lg={3}>
                                <Image src='/skoll.png' alt='' fluid />
                            </Col>
                            <Col>
                                <Image src='/cms.png' alt='' fluid />
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Col className='py-3'>
                    <p className='custom-footer-style'>
                        Disclaimer: This website is made possible by the support of the American People through the United States Agency for International Development (USAID). The #COVIDActionCollab partnership is supported by USAID/India Health Office, under Cooperative Agreement # 72038620C00001 with Catalyst Management Services. The information provided on this website is not official U.S. Government information and does not necessarily represent the views or positions of USAID, the United States Government, or Catalyst Management Services.
                    </p>
                    <p className='custom-footer-style'>
                        Copyright ©2022 Catalyst Management Services Pvt. Ltd.
                    </p>
                </Col>
            </Container>
        </Container>
    )
}

export default Footer