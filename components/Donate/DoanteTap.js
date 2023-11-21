'use client'
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

import '../../app/globals.css'
import axios from 'axios'
import Link from 'next/link'

const DoanteTap = () => {

    const [impactStories, setImpactStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/media');
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/impact-story?per_page=15');
                const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/donatenow?per_page=15');
                const posts = response.data;

                setImpactStories(posts);
                console.log(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };

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

                <Col>
                    <div className='row'>
                        {impactStories.map((story) => (
                            <div key={story.id} className='col-12 col-md-6 py-2'>
                                <div className='p-1' >
                                    <Image src={story.upload_beneficiary_photo.guid} alt='' width="100%" height={200} />

                                    <h5 className='mt-2'>
                                        {story.category_name}
                                    </h5>
                                    <p className='styles-for-ellipsis'>
                                        <b>
                                            {/* {story.title.rendered} */}
                                            <div className='fw-bold' dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                        </b>
                                    </p>
                                    <p className='styles-for-ellipsis' >
                                        <div dangerouslySetInnerHTML={{ __html: story.beneficiary_description }} />
                                    </p>
                                </div>
                                <div className='text-center'>
                                    <Link
                                        href={story.donate_link}
                                        className='text-decoration-none text-uppercase text-center text-white py-2 px-4 rounded-2'
                                        style={{ background: '#8e9952' }}
                                        target='_blank'>
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default DoanteTap