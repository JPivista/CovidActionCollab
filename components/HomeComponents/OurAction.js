import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '/app/globals.css'
import Image from 'next/image'

const OurAction = () => {
    return (
        <>
            <Container fluid >
                <Container className='text-center py-4'>
                    <Col>
                        <h5>
                            <span className='spandarkbefore d-lg-inline-block d-none'>
                            </span>
                            OUR ACTION
                            <span className='spandarkafter d-lg-inline-block d-none'>
                            </span>
                        </h5>
                        <p>
                            The #COVIDActionCollab (CAC) Tripod approach, addresses the immediate, enhances competencies and plans for efficiences.
                        </p>
                    </Col>

                    <Row className='py-5 d-flex flex-lg-row flex-column'>
                        <Col className='d-flex flex-column gap-lg-3'>
                            <Row className='d-flex flex-lg-row flex-column-reverse justify-content-end'>
                                <Col className='text-lg-end text-center py-lg-0 py-4' md={7}>
                                    <h5>
                                        Calibrated Response
                                    </h5>
                                    <p className='lh-1'>
                                        High impact package of services directly delivered to communities through collaborative partners.
                                    </p>
                                </Col>
                                <Col md={2}>
                                    <Image src='/home/calibrated_response.png' alt='' width={80} height={80} />
                                </Col>
                            </Row>

                            <Row className='d-flex flex-lg-row flex-column-reverse justify-content-end'>
                                <Col className='text-lg-end text-center py-lg-0 py-4' md={7}>
                                    <h5>
                                        Impact Canvas
                                    </h5>
                                    <p className='lh-1'>
                                        Assemble the right partners to solve critical challenges in a collaborative manner and take ideas to scale
                                    </p>
                                </Col>
                                <Col md={2}>
                                    <Image src='/home/impact_canvas.png' alt='' width={80} height={80} />
                                </Col>
                            </Row>
                        </Col>
                        <Col className='d-flex flex-column justify-content-center'>
                            <Row className='d-md-flex flex-lg-row flex-column'>
                                <Col md={2} className=''>
                                    <Image src='/home/cac_exchange.png' alt='' width={80} height={80} />
                                </Col>
                                <Col className='text-lg-start text-center d-flex flex-column justify-content-center' md={6}>
                                    <h5>
                                        The CAC Exchange
                                    </h5>
                                    <p className='lh-1'>
                                        Build capacities for partners through exchange of information and resources
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            </Container >
        </>
    )
}

export default OurAction