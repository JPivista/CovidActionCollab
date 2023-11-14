'use client'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
            <Container>
                <Carousel responsive={responsive}>
                    <Col>
                        <Row className='d-flex flex-column'>
                            <Col lg={5}>
                                item 1
                            </Col>
                        </Row>
                    </Col>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel>
            </Container>
        </>
    )
}

export default KnowledgeRepoSlider