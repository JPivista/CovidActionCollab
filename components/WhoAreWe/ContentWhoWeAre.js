import React from 'react'
import { Col, Container } from 'react-bootstrap'

import '/app/globals.css'

const ContentWhoWeAre = () => {
    return (
        <Container>
            <Col className='text-center'>
                <h5 className='side-head-all'>
                    <span className='spandarkbefore  d-lg-inline-block d-none '>
                    </span>
                    GOVERNANCE
                    <span className='spandarkafter d-lg-inline-block d-none'>
                    </span>
                </h5>
            </Col>

            <Col>
                <p>
                    This is done by our Governing Council of eminent individuals with rich experience from diverse backgrounds and expertise, guide and steer the efforts of the collaborative. They keep the collaborative still, even in intense action!
                </p>

                <p>
                    It meets fortnightly to help in defining, reviewing and evolving principles, policies, partnerships, programs/ actions and resourcing for the Collaborative. They also ensure that key decision-makers in the government, in private and civil society, and within communities are closely engaged with and their perspective is included for collective action.
                </p>

                <p>
                    Our Governing Council brings in a wealth of learning from the areas of health, livelihoods, disaster management, food supplies, bureaucracy, academia, technology and strategic giving.
                </p>
            </Col>
        </Container>
    )
}

export default ContentWhoWeAre