import React from 'react'
import { Col, Container } from 'react-bootstrap'

const MediaBanner = () => {
    const bgCac = {
        backgroundImage: 'url("/media/media_banner.jpg")',
        minHeight: '80vh',
        backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container fluid style={bgCac} className='d-flex flex-column justify-content-center'>
                <Container className='d-flex flex-column align-items-center text-center'>

                    <h5 className='text-white'>
                        <span className='spanlightbefore d-lg-inline-block d-none '>
                        </span>
                        MEDIA
                        <span className='spanlightafter d-lg-inline-block d-none'>
                        </span>
                    </h5>

                    <Col md={11}>
                        <h3 className='text-white druk-wide text-uppercase' >
                            WHAT IS MEASURED IS DONE, WHAT IS SEEN IS BELIEVED.
                        </h3>
                    </Col>
                </Container>
            </Container>

            <Container>
                <p>
                    See below, to learn more about and celebrate the impact that the collaborative is making, in keeping with its missions and led by its members.
                </p>
            </Container>
        </>
    )
}

export default MediaBanner