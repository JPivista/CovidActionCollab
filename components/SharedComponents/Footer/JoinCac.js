import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JoinCac = () => {


    const signUpStyle = {
        padding: '15px 40px',
        background: '#2a7a99',
        color: 'white'
    }

    const donateNow = {
        padding: '15px 40px',
        background: '#8e9952',
        color: 'white'
    }

    const bgOverlayOpacity = {
        background: '#8e9952',
        opacity: '0.2',
        zIndex: 0
    }

    return (
        <>
            <Container fluid >
                <Container className='text-center py-4'>
                    <Col className='pb-3'>
                        <h5>
                            <span className='spandarkbefore d-lg-inline-block d-none'>
                            </span>
                            JOIN CAC
                            <span className='spandarkafter d-lg-inline-block d-none'>
                            </span>
                        </h5>
                    </Col>

                    <Row className='d-flex flex-lg-row flex-column'>
                        <Col md={9} className='text-start'>
                            <p>
                                By enrolling you can contribute to and benefit from this collaboration. Also, do encourage other organisations and experts to join hands with us. The key benefits of being part of the collaborative is access to people, resources, financing & partnerships and the ability to make a greater collective impact.
                            </p>
                        </Col>
                        <Col className='text-start text-lg-center'>
                            <Link
                                href="https://communityactioncollab.org/join-us/"
                                className='text-decoration-none rounded-3'
                                target='_blank'
                                style={signUpStyle}
                            >
                                SIGN UP NOW
                            </Link>
                        </Col>
                    </Row>


                    <Row className='d-flex flex-wrap flex-row bg-opacity-10 position-relative' style={{}}>
                        <span className='position-absolute top-0 bottom-0 start-0 end-0' style={bgOverlayOpacity}> </span>
                        <Col md={9} className='text-start p-3 z-2'>
                            <p>
                                COVIDActionCollab is not merely an aggregation of partners, but is an aggregation of capacities, through which we have developed key high impact initiatives. We have drawn upon our one year’s experience at CAC and engagement with our large constituency of partners to put together a menu of initiatives for funders/investors to support which will save lives and livelihoods, and enable vulnerable communities to &apos;bounce forward’. Support these initiatives to build resilient communities
                            </p>
                        </Col>
                        <Col className='py-5 z-2 text-start text-lg-center' >
                            <Link
                                href="/donate"
                                className='text-decoration-none rounded-3'
                                style={donateNow}
                            >
                                DONATE NOW
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default JoinCac