import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const KnowledgeTap = () => {
    return (
        <Container>
            <Row className='d-flex flex-lg-row flex-column'>
                <Col>
                    <h6 className='text-black'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CATEGORIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>
                </Col>


                <Col>
                    <h6 className='text-black'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        CAC NEWS
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>
                </Col>


                <Col>
                    <h6 className='text-black'>
                        <span className='spandarkbeforesm d-lg-inline-block d-none '>
                        </span>
                        IMPACT STORIES
                        <span className='spandarkaftersm d-lg-inline-block d-none'>
                        </span>
                    </h6>
                </Col>
            </Row>
        </Container>
    )
}

export default KnowledgeTap