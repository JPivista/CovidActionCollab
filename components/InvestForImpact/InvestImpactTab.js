import React from 'react'

import '../../app/globals.css'
import { Col, Container, Row } from 'react-bootstrap'

const InvestImpactTab = () => {
    return (
        <>
            <Container>
                <p className='bg-lato-bold'>
                    We invite investments in our people first, objective driven and modular collaborative approach.
                </p>

                <p>
                    We have drawn upon our experience at CAC and engagement with our large constituency of partners to put together a menu of initiatives for investors and partners to support which enable vulnerable communities to ‘bounce forward’. In keeping with perspectives and priorities of investors, we offer five broad types of collaboration opportunities. To apply for any of these opportunities please contact covidactioncollab@catalysts.org.
                </p>


                <Row className='d-flex flex-lg-row flex-column gap-2'>
                    <Col>
                        <h3 className='text-center'>
                            The
                            Syndicated
                            Fund
                        </h3>
                    </Col>

                    <Col>
                        <h3 className='text-center'>
                            Specific
                            initiatives
                            to support
                        </h3>
                    </Col>

                    <Col>
                        <h3 className='text-center'>
                            Specific
                            communities
                            to support
                        </h3>
                    </Col>

                    <Col>
                        <h3 className='text-center'>
                            Specific
                            geographies
                            to support
                        </h3>
                    </Col>

                    <Col>
                        <h3 className='text-center'>
                            Specific
                            partners
                            to support
                        </h3>
                    </Col>
                </Row>
            </Container>



            <Container>
                <p className='bg-lato-bold'>
                    Fund deployment pathways
                </p>

                <p>
                    An investment committee, composed of the donors to the fund and other experts guides the overall resource mobilization and deployment strategy. Given the legal and statutory requirements of the Foreign Contribution Regulation Act, fund deployment pathways are provided below.
                </p>
            </Container>
        </>
    )
}

export default InvestImpactTab
