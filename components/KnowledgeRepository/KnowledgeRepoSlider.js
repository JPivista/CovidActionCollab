'use client'

import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';


const KnowledgeRepoSlider = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Container className='py-5'>
                <Carousel responsive={responsive}>
                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    COVID-19 PRECAUTIONS FOR PATIENTS WITH CHRONIC HEALTH ISSUES- HINDI
                                </h6>

                                <h6 className='text-white'>
                                    March 25, 2022
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_1.jpg' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    Estimating the number of COVID-19 infections in Indian hot-spots using fatality data
                                </h6>

                                <h6 className='text-white'>
                                    July 6, 2021
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_2jpg.jpeg' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    Coronavirus Monitor
                                </h6>

                                <h6 className='text-white'>
                                    July 6, 2021
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_3.png' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    List of Surveys Carried out in India Around COVID-19
                                </h6>

                                <h6 className='text-white'>
                                    June 9, 2021
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_4.jpg' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    State COVID-19 dashboards
                                </h6>

                                <h6 className='text-white'>
                                    May 11, 2021
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_2jpg.jpeg' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row className='d-flex flex-row gap-0'>
                            <Col lg={5} className='bg-covid-blue d-flex flex-column justify-content-around p-4'>
                                <h6 className='text-white p-0'>
                                    A time series method to analyze incidence pattern and estimate reproduction number of COVID-19
                                </h6>

                                <h6 className='text-white'>
                                    April 27, 2021
                                </h6>
                            </Col>

                            <Col className='p-0'>
                                <Image src='/knowledge_repo/knowl_repo_slider_6.jpg' alt='' height={350} width="100%" />
                            </Col>
                        </Row>
                    </Col>
                </Carousel>
            </Container>
        </>
    )
}

export default KnowledgeRepoSlider