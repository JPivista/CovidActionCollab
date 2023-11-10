'use client'

import React, { startTransition } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const OurImpact = () => {


    return (
        <>
            <Container fluid style={{ background: '#2a7a99' }}>
                <Container className='py-4 text-center'>
                    <Col>
                        <h5 className='text-white'>
                            <span className='spanlightbefore d-lg-inline-block d-none'>
                            </span>
                            OUR ACTION
                            <span className='spanlightafter d-lg-inline-block d-none'>
                            </span>
                        </h5>
                    </Col>
                    <Row className='d-flex flex-lg-row flex-column py-5'>
                        <Col>
                            <h1>
                                <CountUp
                                    className='text-white'
                                    start={0}
                                    end={353}
                                    scrollSpyDelay={3}
                                />
                            </h1>
                            <p className='text-white'>
                                Partners of CAC
                            </p>
                        </Col>
                        <Col>
                            <h1>
                                <CountUp
                                    className='text-white'
                                    start={0}
                                    end={13}
                                    suffix="M"
                                />
                            </h1>
                            <p className='text-white'>
                                People Reached
                            </p>
                        </Col>
                        <Col>
                            <h1>
                                <CountUp
                                    className='text-white'
                                    start={100}
                                    end={1937}
                                    // decimals={0}
                                    decimal=","
                                />
                            </h1>
                            <p className='text-white'>
                                Volunteers Onboarded
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default OurImpact