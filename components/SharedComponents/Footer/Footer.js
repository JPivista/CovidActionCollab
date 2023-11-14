import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container fluid style={{ background: '#D9D9D9' }}>
            <Container className='py-4'>

                <Row className='d-flex flex-lg-row flex-column'>
                    <Col className='d-flex flex-column gap-2'>
                        <h6>
                            SITEMAP
                        </h6>
                        <p className='mb-0'>
                            Home
                        </p>
                        <p className='mb-0'>
                            What is CAC
                        </p>
                        <p className='mb-0'>
                            Who we are
                        </p>
                        <p className='mb-0'>
                            Our Action
                        </p>
                        <p className='mb-0'>
                            Story in Numbers
                        </p>
                    </Col>


                    <Col className='d-flex flex-column gap-2'>
                        <p
                            className='mb-0'>
                            Knowledge Repository
                        </p>
                        <p
                            className='mb-0'>
                            Impact Stories
                        </p>
                        <p
                            className='mb-0'>
                            Apply to join
                        </p>
                        <p
                            className='mb-0'>
                            Invest for Impact
                        </p>
                        <p
                            className='mb-0'>
                            Donate
                        </p>
                        <p
                            className='mb-0'>
                            Careers
                        </p>
                    </Col>


                    <Col>
                        <h6>
                            CONTACT US
                        </h6>
                        <p>
                            We would love to hear from you.
                            Please write to us at
                            covidactioncollab@catalysts.org
                        </p>
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
                    <p>
                        Disclaimer: This website is made possible by the support of the American People through the United States Agency for International Development (USAID). The #COVIDActionCollab partnership is supported by USAID/India Health Office, under Cooperative Agreement # 72038620C00001 with Catalyst Management Services. The information provided on this website is not official U.S. Government information and does not necessarily represent the views or positions of USAID, the United States Government, or Catalyst Management Services.
                    </p>

                    <p>
                        Copyright ©2022 Catalyst Management Services Pvt. Ltd.
                    </p>
                </Col>
            </Container>
        </Container>
    )
}

export default Footer