'use client'
// ImpactStories.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Col, Image } from 'react-bootstrap';
import Slider from "react-slick";
import Link from 'next/link';

const ImpactStories = () => {
    const [impactStories, setImpactStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story');
                const posts = response.data;

                setImpactStories(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const sliderBg = {
        background: '#9CD4C4'
    };

    const font19px = {
        fontSize: '19px'
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
    };

    return (
        <Container fluid className='px-5 pb-5'>
            <Col className='text-center'>
                <h5 className='pb-4'>
                    <span className='spandarkbefore d-lg-inline-block d-none'>
                    </span>
                    IMPACT STORIES
                    <span className='spandarkafter d-lg-inline-block d-none'>
                    </span>
                </h5>
            </Col>

            <Slider {...settings} className='d-md-block d-none'>
                {impactStories.map((story) => (
                    <div key={story.id} >
                        <div className='p-1 '>
                            <div style={sliderBg} className='align-self-stretch p-2 rounded-3 overflow-y-hidden'>
                                <Link href={`/impact-story/${story.slug}`}>

                                    <Image src={story.banner_image.guid} alt='' width="100%" height={170} />

                                </Link>
                                <p className='styles-for-ellipsis'>
                                    <b>
                                        <div className='fw-bold pt-2' style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                    </b>
                                </p>
                                <p className='styles-for-ellipsis' >
                                    <div style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                </p>
                                <p>
                                    <b style={font19px}>
                                        {/* Assuming 'published_date' is a valid property of your story object */}
                                        {story.published_date}
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default ImpactStories;
