'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container, Image, Row } from 'react-bootstrap';


const AllMedia = () => {

    const [donateNowList, setDonateNowList] = useState([]);

    const customFont = {
        fontSize: '16px'
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/media');
                // const response = await axios.get('http://localhost:10049/wp-json/wp/v2/medianew?per_page=30');
                const response = await axios.get('https://uat.covidactioncollab.org/wp-json/wp/v2/medianew');
                const posts = response.data;

                setDonateNowList(posts);
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
        <>
            <Container>
                {/* <div>
                    {
                        donateNowList.map((elem) => {
                            return (
                                <>
                                    {elem['beneficiary_name']} <br />
                                    <p className='bg-primary text-white'>
                                        {elem.title.rendered}
                                    </p>

                                    <h1>
                                        {elem.member_designation}
                                    </h1>


                                    // complete data fetching from post 
                                    <p>
                                        <div dangerouslySetInnerHTML={{ __html: elem.content.rendered }} />
                                    </p> 
                                    
                                </>
                            )
                        })
                    }
                </div> */}

                {/* <div>
                    {
                        donateNowList.map((elem) => {
                            return (
                                <>
                                    {elem['beneficiary_name']} <br />
                                    <p className='bg-primary text-white'>
                                        {elem.title.rendered}
                                    </p>

                                    <h1>
                                        {elem.member_designation}
                                    </h1>
                                </>
                            )
                        })
                    }
                </div> */}

                <div className="row" >
                    {donateNowList.map((post) => (
                        <div key={post.id} className="col-12 col-md-6 col-lg-4 p-2 rounded-0">
                            <div className='p-3 card h-100' style={{ background: '#E9F1F5' }}>
                                <a
                                    href={post.media_link}
                                    target='_blank'
                                    className='text-decoration-none text-black'>

                                    <Image src={post.media_image.guid} alt='' width="100%" />

                                    <p> {post.media_heading} </p>
                                    {post.acf && post.acf.media_name && (
                                        <p>Media Name: {post.acf.media_name}</p>
                                    )}
                                    {post.acf && post.acf.media_title && (
                                        <p>Media Title: {post.acf.media_title}</p>
                                    )}
                                    <Row className='d-flex flex-row '>
                                        <Col className='d-flex flex-column justify-content-center'>
                                            <p style={customFont}>
                                                {post.publisher}
                                            </p>
                                        </Col>
                                        <Col>
                                            {/* <p>Date: {post.published_date}</p> */}
                                            <p>
                                                <b style={customFont}>
                                                    {formatDate(post.published_date)}
                                                </b>
                                            </p>
                                        </Col>
                                    </Row>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container >
        </>
    )
}

export default AllMedia