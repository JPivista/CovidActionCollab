import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import '../../app/globals.css'
import Image from 'next/image'

const DoanteTap = () => {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <h5 className='text-black'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        COMMUNITIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col className='d-flex flex-column gap-1'>
                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/1.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    All
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/2.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    GBV and child abuse survivors
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/gay_trangender_3.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Gay men & transgender
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/person_with_disablities_4.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Person with disabilities
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/sex_workers_5.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Sex workers
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/factory_unorganized_workers_6.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Factory unorganized workers
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/street_vendors_7.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Street vendors
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/small_formers_8.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Small farmers
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/health_workers_9.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Health workers
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/street_children_10.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Street children
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/migrations_11.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    Migrants
                                </p>
                            </Col>
                        </Row>

                        <Row className='d-flex flex-row '>
                            <Col xs={2}>
                                <Image src='/impact_stories/in_and_out_schl_chldrn_12.png' alt='' width={60} height={60} />
                            </Col>
                            <Col className='d-flex flex-column justify-content-center'>
                                <p className='mb-0'>
                                    In & out of school children
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Col>



            </Row>


        </Container>
    )
}

export default DoanteTap