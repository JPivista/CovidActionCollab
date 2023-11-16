"use client"
import Image from 'next/image'
import React, { use, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '/app/globals.css'
import Link from 'next/link'

import '../headerfooter.css'


const MainHeader = () => {

    // Desktop Navbar View
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Mobile Navbar View

    const [isVisibleMobile, setIsVisibleMobile] = useState(false);

    const toggleVisibilityMobile = () => {
        setIsVisibleMobile(!isVisibleMobile)
    }

    const [isShow, setIsShow] = useState(false);
    const [isShowOurAction, setIsShowOurAction] = useState(false);
    const [isShowImpactDashboard, setIsShowImpactDashboard] = useState(false);
    const [isShowKnowledgeRepo, setIsKnowledgeRepo] = useState(false);
    const [isShowSupport, setIsShowSupport] = useState(false);

    const mobileToggleBtn = () => {
        setIsShow(!isShow);
    }

    const mobileToggleOurActionBtn = () => {
        setIsShowOurAction(!isShowOurAction);
    }

    const mobileToggleImpactDashboard = () => {
        setIsShowImpactDashboard(!isShowImpactDashboard);
    }

    const mobileToggleKnoledgeRepo = () => {
        setIsKnowledgeRepo(!isShowKnowledgeRepo);
    }

    const mobileToggleSupport = () => {
        setIsShowSupport(!isShowSupport);
    }

    return (
        <>

            {isVisible && (
                <Container fluid className=' navbar-bg d-lg-block d-none'>
                    <Container className='py-5'>
                        <Row>
                            {/* Col 1 */}
                            <Col>
                                <Link href="/" className='text-decoration-none text-white fw-bold'>
                                    HOME
                                </Link>
                            </Col>

                            {/* Col 2 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/what-is-cac" className='text-decoration-none text-white fw-bold lh-1 mb-3'>
                                    LEARN <br />
                                    ABOUT US
                                </Link>
                                <Link href="/what-is-cac" className='text-decoration-none text-white'>
                                    What is CAC?
                                </Link>
                                <Link href="/who-we-are" className='text-decoration-none text-white'>
                                    Who we are
                                </Link>
                                <Link href="/cac-partners" className='text-decoration-none text-white'>
                                    CAC Partners
                                </Link>
                                <Link href="/media_new" className='text-decoration-none text-white'>
                                    Media
                                </Link>
                            </Col>

                            {/* Col 3 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/our-action" className='text-decoration-none text-white fw-bold lh-1 mb-3'>
                                    OUR <br />
                                    ACTION
                                </Link>
                                <Link href="/our-action/#calibrated" className='text-decoration-none text-white'>
                                    Calibrated Services
                                </Link>
                                <Link href="/our-action/#impact" className='text-decoration-none text-white'>
                                    Impact Canvas
                                </Link>
                                <Link href="/our-action/#cac" className='text-decoration-none text-white'>
                                    CAC Exchange
                                </Link>
                            </Col>

                            {/* Col 4 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/impact-stories" className='text-decoration-none text-white fw-bold lh-1 mb-3'>
                                    IMPACT DASHBOARD
                                </Link>
                                <Link href="/our-impact" className='text-decoration-none text-white'>
                                    Our Impact
                                </Link>
                                <Link href="/impact-stories" className='text-decoration-none text-white'>
                                    Impact Stories
                                </Link>
                            </Col>

                            {/* Col 5 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/knowledge-repository" className='text-decoration-none text-white fw-bold lh-1 mb-3'>
                                    KNOWLEDGE
                                    REPOSITORY
                                </Link>
                                <Link href="/invest-for-impact" className='text-decoration-none text-white fw-bold lh-1'>
                                    SUPPORT
                                    CAC
                                </Link>
                                <Link href="/invest-for-impact" className='text-decoration-none text-white'>
                                    Invest for Impact
                                </Link>
                                <Link href="/donate" className='text-decoration-none text-white'>
                                    Donate
                                </Link>
                            </Col>

                            {/* Col 6 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="#" className='text-decoration-none text-white fw-bold lh-1 mb-3'>
                                    SPECIAL FOCUS AREAS
                                </Link>
                                <Link href="/vaxnow" className='text-decoration-none text-white'>
                                    VaxNow
                                </Link>
                                <Link href="https://precisionhealth.in/" target='_blank' className='text-decoration-none text-white'>
                                    Precision Health
                                </Link>
                                <Link href="https://call4svasthswasti.in/" target='_blank' className='text-decoration-none text-white'>
                                    Call4Svasth
                                </Link>
                            </Col>

                            {/* Col 8 */}
                            <Col className='d-flex flex-column text-center'>

                                <Link href="apply-to-join" className='text-decoration-none text-white fw-bold'>
                                    APPLY TO JOIN
                                </Link>
                                <Link href="#" className='text-decoration-none text-white fw-bold'>
                                    LOGIN
                                </Link>
                                <Link href="#" className='text-decoration-none text-white fw-bold'>
                                    CAREERS
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            )}

            <Container fluid className='position-absolute'>
                <Container className='py-3'>
                    <Row>
                        <Col>
                            <Link href='/' className='text-decoration-none text-white'>
                                <Image src='/logo.png' alt='logo' width={150} height={44} />
                            </Link>
                        </Col>
                        <Col
                            className='d-lg-flex flex-row justify-content-end align-items-center d-none'
                            onClick={toggleVisibility}>
                            <Image src='/side_nav.png' alt='logo' width={25} height={21} />
                        </Col>

                        <Col
                            className='d-flex flex-row justify-content-end align-items-center d-lg-none'
                            onClick={toggleVisibilityMobile}
                        >
                            <Image src='/side_nav.png' alt='logo' width={25} height={21} />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {isVisibleMobile && (

                <Container fluid className='d-lg-none d-flex  position-absolute mt-5 pt-2'>
                    <Container className='d-flex flex-column bg-primary'>
                        <Col>
                            <Link href='/' className='text-decoration-none text-white'>
                                SITE HOME
                            </Link>
                        </Col>
                        <Col className='d-flex flex-column'>
                            <Col
                                className='d-flex flex-row justify-content-end'
                                onClick={mobileToggleBtn}
                            >
                                <Col >
                                    <Link href='#'
                                        className='text-decoration-none text-white'
                                    >
                                        LEARN ABOUT US
                                    </Link>
                                </Col>

                                <Col
                                    className='d-flex flex-row justify-content-end'
                                    style={{ color: 'white' }}>
                                    {isShow ? '-' : '+'}
                                </Col>


                            </Col>

                            {isShow && (
                                <Col className='ps-3 d-flex flex-column'>
                                    <Link href="/what-is-cac" className='text-decoration-none text-white'>
                                        What is CAC?
                                    </Link>
                                    <Link href="/who-we-are" className='text-decoration-none text-white'>
                                        Who we are
                                    </Link>
                                    <Link href="/cac-partners" className='text-decoration-none text-white'>
                                        CAC Partners
                                    </Link>
                                    <Link href="/media_new" className='text-decoration-none text-white'>
                                        Media
                                    </Link>
                                </Col>
                            )}
                        </Col>

                        <Col className='d-flex flex-column'>
                            <Col
                                className='d-flex flex-row justify-content-end'
                                onClick={mobileToggleOurActionBtn}
                            >
                                <Col >
                                    <Link href='#'
                                        className='text-decoration-none text-white'
                                    >
                                        OUR ACTION
                                    </Link>
                                </Col>

                                <Col
                                    className='d-flex flex-row justify-content-end'
                                    style={{ color: 'white' }}>
                                    {isShowOurAction ? '-' : '+'}
                                </Col>
                            </Col>

                            {isShowOurAction && (
                                <Col className='ps-3 d-flex flex-column'>
                                    <Link href="/our-action/#calibrated" className='text-decoration-none text-white'>
                                        Calibrated Services
                                    </Link>
                                    <Link href="#" className='text-decoration-none text-white'>
                                        Impact Canvas
                                    </Link>
                                    <Link href="#" className='text-decoration-none text-white'>
                                        CAC Exchange
                                    </Link>
                                </Col>
                            )}
                        </Col>


                        <Col className='d-flex flex-column'>
                            <Col
                                className='d-flex flex-row justify-content-end'
                                onClick={mobileToggleImpactDashboard}
                            >
                                <Col >
                                    <Link href=''
                                        className='text-decoration-none text-white'
                                    >
                                        IMPACT DASHBOARD
                                    </Link>
                                </Col>

                                <Col
                                    className='d-flex flex-row justify-content-end'
                                    style={{ color: 'white' }}>
                                    {isShowImpactDashboard ? '-' : '+'}
                                </Col>
                            </Col>

                            {isShowImpactDashboard && (
                                <Col className='ps-3 d-flex flex-column'>
                                    <Link href="/our-impact" className='text-decoration-none text-white'>
                                        Our Impact
                                    </Link>
                                    <Link href="/impact-stories" className='text-decoration-none text-white'>
                                        Impact Stories
                                    </Link>
                                </Col>
                            )}
                        </Col>

                        <Col className='d-flex flex-column'>
                            <Col
                                className='d-flex flex-row justify-content-end'
                                onClick={mobileToggleKnoledgeRepo}
                            >
                                <Col >
                                    <Link href='#'
                                        className='text-decoration-none text-white'
                                    >
                                        KNOWLEDGE REPOSITORY
                                    </Link>
                                </Col>

                                <Col
                                    className='d-flex flex-row justify-content-end'
                                    md={2}
                                    style={{ color: 'white' }}>
                                    {isShowKnowledgeRepo ? '-' : '+'}
                                </Col>
                            </Col>

                            {isShowKnowledgeRepo && (
                                <Col className='ps-3 d-flex flex-column' >
                                    <Link href="/our-impact" className='text-decoration-none text-white'>
                                        Our Impact
                                    </Link>
                                    <Link href="/impact-stories" className='text-decoration-none text-white'>
                                        Impact Stories
                                    </Link>
                                </Col>
                            )}
                        </Col>

                        <Col className='d-flex flex-column'>
                            <Col
                                className='d-flex flex-row justify-content-end'
                                onClick={mobileToggleSupport}
                            >
                                <Col >
                                    <Link href='#'
                                        className='text-decoration-none text-white'
                                    >
                                        KNOWLEDGE REPOSITORY
                                    </Link>
                                </Col>

                                <Col
                                    className='d-flex flex-row justify-content-end'
                                    md={2}
                                    style={{ color: 'white' }}>
                                    {isShowSupport ? '-' : '+'}
                                </Col>
                            </Col>

                            {isShowSupport && (
                                <Col className='ps-3 d-flex flex-column' >
                                    <Link href="/invest-for-impact" className='text-decoration-none text-white'>
                                        Invest for Impact
                                    </Link>
                                    <Link href="/donate" className='text-decoration-none text-white'>
                                        Donate
                                    </Link>
                                </Col>
                            )}
                        </Col>

                        <Col>
                            <Link href='/apply-to-join' className='text-decoration-none bg-white covid-blue' style={{ fontSize: '16px !important' }}>
                                APPLY TO JOIN
                            </Link>
                        </Col>

                        <Col>
                            <Link href='#' className='text-decoration-none text-white'>
                                LOG IN
                            </Link>
                        </Col>



                    </Container>
                </Container >

            )}
        </>
    )
}

export default MainHeader