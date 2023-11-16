'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';


const AllMedia = () => {

    const [donateNowList, setDonateNowList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:10049/wp-json/wp/v2/post_type=management');
                // console.log('API Response:', response.data); // Log the response for inspection
                const posts = response.data;

                // Extract ACF data for each post
                // const acfDataList = posts.map(post => post.acf);

                //console.log('ACF Data List:', acfDataList); // Log the ACF data list for inspection

                setDonateNowList(posts);
                console.log(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
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

                                </>
                            )
                        })
                    }
                </div> */}

                <div>
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
                </div>
            </Container>
        </>
    )
}

export default AllMedia