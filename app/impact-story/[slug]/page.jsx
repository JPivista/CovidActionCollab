'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Container } from 'react-bootstrap';

import Header from '../../../components/SharedComponents/Header'
import Footer from '@/components/SharedComponents/Footer';

const SinglePost = () => {
    const [post, setPost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                const response = await axios.get(`https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story?slug=${slug}`);
                const postData = response.data[0]; // Assuming the slug is unique
                setPost(postData);
                console.log(postData);
            } catch (error) {
                console.error('Error fetching single post:', error);
            }
        };

        fetchSinglePost();
    }, [slug]);


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
            <Header />
            <Container className='pt-5'>
                <div className='pt-5'>
                    {post && (
                        <>
                            <h3>{post.title.rendered}</h3>

                            <p>
                                <b style={font19px}>
                                    {formatDate(post.published_date)}
                                </b>
                            </p>

                            <h1 dangerouslySetInnerHTML={{ __html: post.full_description }} />
                        </>

                    )}
                </div>
            </Container >
            <Footer />
        </>
    );
};

export default SinglePost;
