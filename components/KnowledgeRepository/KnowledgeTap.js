'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Image, Row } from 'react-bootstrap'

const KnowledgeTap = ({ }) => {

    const [covidCollab, setCovidCollab] = useState([]);
    const [selectedTagId, setSelectedTagId] = useState(18); // Initialize with the default tag ID
    const [covidCollabTap, setCovidCollabTap] = useState([]);


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

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/media');
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/impact-story?per_page=15');
                // const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story?per_page=15');
                const response = await axios.get(`https://uat.covidactioncollab.org/wp-json/wp/v2/covidpost?tags=15`);
                const posts = response.data;

                setCovidCollabTap(posts);
                console.log(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [selectedTagId]);

    return (
        <Container>
            <Row className='d-flex flex-lg-row flex-column'>
                <Col md={4}>
                    <h6 className='text-black pb-4'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CATEGORIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>

                    <Col className='d-flex flex-column gap-3'>
                        <Col>
                            <button
                                onClick={() => handleTagClick(28)}
                                className='bg-transparent border-0'>
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
                            </button>
                        </Col>

                        <Col>
                            <button
                                onClick={() => handleTagClick(18)
                                }
                                className='bg-transparent border-0'>
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
                            </button>
                        </Col>


                        <Col>
                            <button
                                onClick={() => handleTagClick(20)
                                }
                                className='bg-transparent border-0'>
                                <Row className='d-flex flex-row'>
                                    <Col xs={2}>
                                        <Image src='/knowledge_repo/cac_news.png' alt='' width={50} height={50} />
                                    </Col>
                                    <Col className='d-flex flex-column justify-content-center'>
                                        <p className='mb-0'>
                                            CAC News
                                        </p>
                                    </Col>
                                </Row>
                            </button>
                        </Col>

                        <Col>
                            <button
                                onClick={() => handleTagClick(15)
                                }
                                className='bg-transparent border-0'>
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
                            </button>
                        </Col>

                        <Col>
                            <button
                                onClick={() => handleTagClick(34)
                                }
                                className='bg-transparent border-0'>
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
                            </button>
                        </Col>
                    </Col>
                </Col>


                <Col className='text-center'>
                    <h6 className='text-black pb-4'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CAC NEWS
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>

                    <Col>
                        <div className=' row'>
                            {covidCollab.map((covid) => (
                                <div key={covid.id} className='col-12 col-md-6'>
                                    <Image src={covid.banner_image.guid} alt='' width="100%" />
                                    < p className='styles-for-ellipsis' >
                                        <div dangerouslySetInnerHTML={{ __html: covid.title.rendered }} />
                                    </p>
                                    {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
                                </div>
                            ))}
                        </div>
                    </Col>
                </Col>
            </Row >

            <Col className='py-4'>
                <h6 className='text-black text-center pb-4'>
                    <span className='spandarkbeforesm d-lg-inline-block d-none '>
                    </span>
                    IMPACT STORIES
                    <span className='spandarkaftersm d-lg-inline-block d-none'>
                    </span>
                </h6>

                <Col>
                    <div className=' row'>
                        {covidCollabTap.map((covid) => (
                            <div key={covid.id} className='col-12 col-md-4'>
                                <Image src={covid.banner_image.guid} alt='' width="100%" />
                                < p className='styles-for-ellipsis' >
                                    <div dangerouslySetInnerHTML={{ __html: covid.title.rendered }} />
                                </p>
                                {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
                            </div>
                        ))}
                    </div>
                </Col>
            </Col>
        </Container >
    )
}

export default KnowledgeTap