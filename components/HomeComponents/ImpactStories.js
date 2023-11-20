'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useRouter } from "next/router";
import axios from 'axios';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImpactStories = () => {

    const [impactStories, setImpactStories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/media');
                const response = await axios.get('http://localhost:10049/wp-json/wp/v2/impact-story?per_page=15');
                const posts = response.data;

                setImpactStories(posts);
                console.log(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const sliderBg = {
        background: '#9CD4C4'
    }

    const font19px = {
        fontSize: '19px'
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
    };

    return (
        <>
            <Container fluid>
                <Container className='py-4'>
                    <Col className='text-center'>
                        <h5>
                            <span className='spandarkbefore d-lg-inline-block d-none'>
                            </span>
                            IMPACT STORIES
                            <span className='spandarkafter d-lg-inline-block d-none'>
                            </span>
                        </h5>

                        <h1>
                            Post Your Stories Here.!!!
                        </h1>
                    </Col>

                    {/* <div>
                        {impactStories.map((story) => (
                            <div key={story.id}>
                                <Image src={story.banner_image.guid} alt='' width={100} height={100} />
                                <p>
                                    {story.title.rendered}
                                </p>
                            </div>
                        ))}
                    </div> */}
                    <Slider {...settings}>

                        {impactStories.map((story) => (
                            <div key={story.id} >
                                <div className='p-2 ' >
                                    <div style={sliderBg} className='align-self-stretch p-2 rounded-3 overflow-y-hidden'>
                                        <Image src={story.banner_image.guid} alt='' width="100%" height={150} />
                                        <p>
                                            <b>
                                                {/* {story.title.rendered} */}
                                                <div className='fw-bold' style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                            </b>
                                        </p>
                                        <p>
                                            <div style={font19px} dangerouslySetInnerHTML={{ __html: story.title.rendered }} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </Container >
        </>
    )
}

export default ImpactStories