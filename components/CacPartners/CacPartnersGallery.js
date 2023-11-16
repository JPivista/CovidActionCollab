'use client'
import React, { useEffect, useState } from 'react';
import { Button, Container, Image, Row, Col } from 'react-bootstrap';
import Gallery from '../JsonFiles/gallerydata';

import axios from 'axios';
import Link from 'next/link';

const CacPartnersGallery = () => {
    const [gallery, setGallery] = useState(Gallery);
    const [items, setItems] = useState(gallery);
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilter = (filter) => {
        setActiveFilter(filter);

        if (filter === 'all') {
            setItems(gallery.slice().sort((a, b) => a.id - b.id));
        } else {
            const filteredItems = gallery.filter((item) => item.category === filter);
            setItems(filteredItems);
        }
    };

    useEffect(() => {
        // Reset items whenever the gallery changes
        setItems(gallery);
    }, [gallery]);

    return (
        <>
            <Container className='py-3'>
                <div className='d-flex flex-row flex-wrap gap-3 justify-content-center'>
                    <Button
                        className={`btn-primary ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilter('all')}
                    >
                        ALL
                    </Button>
                    <Button
                        className={`btn-primary ${activeFilter === 'implements' ? 'active' : ''}`}
                        onClick={() => handleFilter('implements')}
                    >
                        IMPLEMENTERS
                    </Button>
                    <Button
                        className={`btn-primary ${activeFilter === 'providers' ? 'active' : ''}`}
                        onClick={() => handleFilter('providers')}
                    >
                        PROVIDERS
                    </Button>
                    <Button
                        className={`btn-primary ${activeFilter === 'enablers' ? 'active' : ''}`}
                        onClick={() => handleFilter('enablers')}
                    >
                        ENABLERS
                    </Button>
                </div>

                <Row className='mt-3'>
                    {items.map((elem) => (
                        <Col
                            key={elem.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2}
                            className='position-relative hover-cac-img-show p-2'
                        >
                            <a href={elem.links} target='_blank' className='hover-cac-partner-img text-decoration-none'>
                                <h6 className='text-white'>
                                    {elem.hoverdata}
                                </h6>
                            </a>
                            <Image src={elem.image} alt={elem.hoverdata} fluid />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default CacPartnersGallery;