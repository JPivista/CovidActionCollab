'use client'
// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'

const HeroBanner = () => {
    const bannerBg = {
        backgroundImage: 'url("/home_hero_banner.jpg")',
        minHeight: '180vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <>
            <Container fluid style={bannerBg} className='d-flex flex-column align-items-center justify-content-center'>
                <Container >
                    <Col className='d-flex flex-column align-items-center justify-content-between jus gap-3' style={{ height: '100vh' }}>
                        <Col>
                            <Col className='text-center'>
                                <p className='fw-bold'>
                                    A resilient community, doesn’t just bounce back,
                                    it bounces forward.
                                </p>

                                <h1 className='covid-blue counter-custom'>
                                    BOUNCE FORWARD
                                </h1>
                            </Col>
                        </Col>

                        <Col>
                            {/* <Col className='d-flex flex-row align-items-center justify-content-center align-content-center gap-3'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="35.168" height="69.895" fill='#fff' viewBox="0 0 35.168 69.895"><defs><style></style></defs><g transform="translate(-860.473 -866.673)"><path class="a" d="M878.055,866.673a17.581,17.581,0,0,0-17.582,17.581v16.7a17.724,17.724,0,0,0,10.668,16.185v-5.664a12.667,12.667,0,0,1-5.664-10.521l0-16.7a12.582,12.582,0,0,1,25.164,0v16.7a12.675,12.675,0,0,1-5.665,10.521v5.664a17.647,17.647,0,0,0,10.668-16.185l0-16.7a17.581,17.581,0,0,0-17.582-17.581Z"></path><path class="a" d="M878.055,888.89a2.48,2.48,0,0,0,2.5-2.5v-6.768a2.5,2.5,0,0,0-5,0v6.768A2.526,2.526,0,0,0,878.055,888.89Z"></path><path class="a" d="M884.751,923.911l-4.193,4.193,0-22a2.5,2.5,0,0,0-5,0v21.924l-4.193-4.193a2.5,2.5,0,0,0-3.532,3.532l8.461,8.461a2.483,2.483,0,0,0,3.529,0l8.46-8.461a2.532,2.532,0,0,0,0-3.532,2.457,2.457,0,0,0-3.529.072Z"></path></g></svg>

                                <p className='text-white'>
                                    SCROLL DOWN <br />
                                    TO EXPLORE
                                </p>
                            </Col> */}

                            <Col className='d-flex flex-column justify-content-center align-items-center'>

                                <Image src='/logo_white.png' alt='logo' width={150} height={44} />

                                <p className='text-white text-center'>
                                    Collaborating with resource partners, change agents and vulnerable
                                    <br />
                                    communities to instill resilience in our society.
                                </p>

                                <h1 className='text-white text-center'>
                                    A New World
                                    <br />
                                    Resilience Now
                                </h1>

                                <Link href="/what-is-cac"
                                    className='text-black bg-white px-5 py-2 text-decoration-none rounded-3'>
                                    LEARN MORE
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='mt-5 text-center'>
                        <Carousel
                            responsive={responsive}
                            swipeable={false}
                            showDots={false}
                            infinite={true}
                            autoPlaySpeed={1000}
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        >
                            <div>
                                <Link href='https://www.resilienceworks.in/'
                                    target='_black'>
                                    <Image src='/home/resillence_works.png' alt='' fluid />
                                </Link>
                            </div>
                            <div>
                                <Image src='/home/atma_2.png' alt='' fluid />
                            </div>
                            <div>
                                <Link href='https://arthancareers.com/'
                                    target='_black'>
                                    <Image src='/home/arthan_3.png' alt='' fluid />
                                </Link>
                            </div>
                            <div>
                                <Link href='https://fieldscope.in/'
                                    target='_black'>
                                    <Image src='/home/fieldscope_4.png' alt='' fluid />
                                </Link>
                            </div>
                            <div>

                                <Image src='/home/viwera_5.png' alt='' fluid />
                            </div>
                            <div>
                                <Image src='/home/viwera_5.png' alt='search' fluid />
                            </div>
                            <div>
                                <Link href='https://www.selcofoundation.org/'
                                    target='_black'>
                                    <Image src='/home/selco_foundation.png' alt='search' fluid />
                                </Link>
                            </div>

                            <div>
                                <Link href='https://srijaneksoch.org/'
                                    target='_black'>
                                    <Image src='/home/srijan.png' alt='search' fluid />
                                </Link>
                            </div>

                            <div>
                                <Link href='https://www.savethechildrenindia.org/'
                                    target='_black'>
                                    <Image src='/home/save_the_children.png' alt='search' fluid />
                                </Link>
                            </div>

                            <div>
                                <Link href='https://www.sesameworkshopindia.org/'
                                    target='_black'>
                                    <Image src='/home/sesame_workshop.png' alt='search' fluid />
                                </Link>
                            </div>
                        </Carousel>
                    </Col>
                </Container>
            </Container>

            <Container>

            </Container>
        </>
    )
}

export default HeroBanner