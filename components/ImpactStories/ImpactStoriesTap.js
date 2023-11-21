'use client'

import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../app/globals.css'

import axios from 'axios';


const ImpactStoriesTap = () => {

    // const [impactStories, setImpactStories] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story?per_page=15');
    //             const posts = response.data;

    //             setImpactStories(posts);
    //             console.log(posts);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);


    const [covidCollab, setCovidCollab] = useState([]);
    const [selectedTagId, setSelectedTagId] = useState(18); // Initialize with the default tag ID


    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/media');
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/impact-story?per_page=15');
                // const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story?per_page=15');
                const response = await axios.get(`https://uat.covidactioncollab.org/wp-json/wp/v2/covidpost?tags=${selectedTagId}`);
                const posts = response.data;

                setCovidCollab(posts);
                console.log(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [selectedTagId]);

    const handleTagClick = (tagId) => {
        setSelectedTagId(tagId);
    };

    const font19px = {
        fontSize: '19px'
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    };


    return (
        <>

            <Container>
                <Row>
                    <Col md={4}>
                        <h6 className='text-black bg-lato-bold '>
                            <span className='spandarkbeforesm d-lg-inline-block d-none '>
                            </span>
                            COMMUNITIES
                            <span className='spandarkaftersm d-lg-inline-block d-none'>
                            </span>
                        </h6>
                        <Col>
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



                    <Col md={8} className='bg-light row'>
                        {impactStories.map((story) => (
                            <div key={story.id} className="col-12 col-lg-6 p-2 rounded-0">
                                <div className='p-3 card h-100' style={{ background: '#E9F1F5' }}>
                                    <div className='align-self-stretch p-1 rounded-3 overflow-y-hidden'>
                                        <Image src={story.banner_image.guid} alt='' width="100%" />
                                        <p className='styles-for-ellipsis'>
                                            <b>
                                                {/* {story.title.rendered} */}
                                                <div className='fw-bold' style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                            </b>
                                        </p>
                                        <p className='styles-for-ellipsis' >
                                            <div style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                        </p>

                                        <p>
                                            <b style={font19px}>
                                                {formatDate(story.published_date)}
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ImpactStoriesTap