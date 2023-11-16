import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const KnowledgeTap = () => {
    return (
        <Container>
            <Row className='d-flex flex-lg-row flex-column'>
                <Col>
                    <h6 className='text-black pb-4'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CATEGORIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>

                    <Col className='d-flex flex-column gap-3'>
                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/knowledge_repo/covid_live.png' alt='' width={50} height={50} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    COVID Live
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/knowledge_repo/covid_response.png' alt='' width={50} height={50} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    COVID Response
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/knowledge_repo/cac_news.png' alt='' width={50} height={50} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    CAC News
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/knowledge_repo/impact_stories.png' alt='' width={50} height={50} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Impact Stories
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/knowledge_repo/partnerz_videos.png' alt='' width={50} height={50} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Partner Voices
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Col>


                <Col>
                    <h6 className='text-black pb-4'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CAC NEWS
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>
                </Col>


                <Col>
                    <h6 className='text-black pb-4'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        IMPACT STORIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>
                </Col>
            </Row>
        </Container>
    )
}

export default KnowledgeTap