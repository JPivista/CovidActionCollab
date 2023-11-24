import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePost = ({ slug }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchSinglePost = async () => {
            try {
                const response = await axios.get(`https://uat.covidactioncollab.org/wp-json/wp/v2/impact-story?slug=${slug}`);
                const postData = response.data[0]; // Assuming the slug is unique
                setPost(postData);
            } catch (error) {
                console.error('Error fetching single post:', error);
            }
        };

        fetchSinglePost();
    }, [slug]);

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </>
            )}
        </div>
    );
};

export default SinglePost;
