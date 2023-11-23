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
                                <Link href="/" className='text-decoration-none text-white fw-bold custom-header-style'>
                                    HOME
                                </Link>
                            </Col>

                            {/* Col 2 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/what-is-cac" className='text-decoration-none text-white fw-bold lh-1 mb-3 custom-header-style'>
                                    LEARN <br />
                                    ABOUT US
                                </Link>
                                <Link href="/what-is-cac" className='text-decoration-none text-white custom-header-style'>
                                    What is CAC?
                                </Link>
                                <Link href="/who-we-are" className='text-decoration-none text-white custom-header-style'>
                                    Who we are
                                </Link>
                                <Link href="/cac-partners" className='text-decoration-none text-white custom-header-style'>
                                    CAC Partners
                                </Link>
                                <Link href="/media_new" className='text-decoration-none text-white custom-header-style'>
                                    Media
                                </Link>
                            </Col>

                            {/* Col 3 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/our-action" className='text-decoration-none text-white fw-bold lh-1 mb-3 custom-header-style'>
                                    OUR <br />
                                    ACTION
                                </Link>
                                <Link href="/our-action/#calibrated" className='text-decoration-none text-white custom-header-style'>
                                    Calibrated Services
                                </Link>
                                <Link href="/our-action/#impact" className='text-decoration-none text-white custom-header-style'>
                                    Impact Canvas
                                </Link>
                                <Link href="/our-action/#cac" className='text-decoration-none text-white custom-header-style'>
                                    CAC Exchange
                                </Link>
                            </Col>

                            {/* Col 4 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/impact-stories" className='text-decoration-none text-white fw-bold lh-1 mb-3 custom-header-style'>
                                    IMPACT DASHBOARD
                                </Link>
                                <Link href="/our-impact" className='text-decoration-none text-white custom-header-style'>
                                    Our Impact
                                </Link>
                                <Link href="/impact-stories" className='text-decoration-none text-white custom-header-style'>
                                    Impact Stories
                                </Link>
                            </Col>

                            {/* Col 5 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="/knowledge-repository" className='text-decoration-none text-white fw-bold lh-1 mb-3 custom-header-style'>
                                    KNOWLEDGE
                                    REPOSITORY
                                </Link>
                                <Link href="/invest-for-impact" className='text-decoration-none text-white fw-bold lh-1 custom-header-style'>
                                    SUPPORT
                                    CAC
                                </Link>
                                <Link href="/invest-for-impact" className='text-decoration-none text-white custom-header-style'>
                                    Invest for Impact
                                </Link>
                                <Link href="/donate" className='text-decoration-none text-white custom-header-style'>
                                    Donate
                                </Link>
                            </Col>

                            {/* Col 6 */}
                            <Col className='d-flex flex-column gap-1'>
                                <Link href="#" className='text-decoration-none text-white fw-bold lh-1 mb-3 custom-header-style'>
                                    SPECIAL FOCUS AREAS
                                </Link>
                                <Link href="/vaxnow" className='text-decoration-none text-white custom-header-style'>
                                    VaxNow
                                </Link>
                                <Link href="https://precisionhealth.in/" target='_blank' className='text-decoration-none text-white custom-header-style'>
                                    Precision Health
                                </Link>
                                <Link href="https://call4svasthswasti.in/" target='_blank' className='text-decoration-none text-white custom-header-style'>
                                    Call4Svasth
                                </Link>
                            </Col>

                            {/* Col 8 */}
                            <Col className='d-flex flex-column text-center gap-2'>

                                <Link href="https://communityactioncollab.org/join-us/" className='text-decoration-none text-white fw-bold custom-header-style apply-to-join-btn'>
                                    APPLY TO JOIN
                                </Link>
                                <Link href="/log-in" className='text-decoration-none text-white fw-bold custom-header-style login-btn'>
                                    LOGIN
                                </Link>
                                <Link href="https://communityactioncollab.org/contact-us/" className='text-decoration-none text-white fw-bold custom-header-style apply-to-join-btn'>
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
                            <Link href='/' className='text-decoration-none text-white custom-header-style'>
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
                <Container fluid className='d-lg-none d-flex position-absolute mt-5 pt-2'>
                    <Container className='d-flex flex-column gap-2 py-2' style={{ background: '#2A7A99' }}>
                        <Col>
                            <Link href='/' className='text-decoration-none text-white custom-header-style'>
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
                                        className='text-decoration-none text-white custom-header-style'
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
                                    <Link href="/what-is-cac" className='text-decoration-none text-white custom-header-style'>
                                        What is CAC?
                                    </Link>
                                    <Link href="/who-we-are" className='text-decoration-none text-white custom-header-style'>
                                        Who we are
                                    </Link>
                                    <Link href="/cac-partners" className='text-decoration-none text-white custom-header-style'>
                                        CAC Partners
                                    </Link>
                                    <Link href="/media_new" className='text-decoration-none text-white custom-header-style'>
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
                                        className='text-decoration-none text-white custom-header-style'
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
                                    <Link href="/our-action/#calibrated" className='text-decoration-none text-white custom-header-style'>
                                        Calibrated Services
                                    </Link>
                                    <Link href="#" className='text-decoration-none text-white custom-header-style'>
                                        Impact Canvas
                                    </Link>
                                    <Link href="#" className='text-decoration-none text-white custom-header-style'>
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
                                        className='text-decoration-none text-white custom-header-style'
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
                                    <Link href="/our-impact" className='text-decoration-none text-white custom-header-style'>
                                        Our Impact
                                    </Link>
                                    <Link href="/impact-stories" className='text-decoration-none text-white custom-header-style'>
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
                                        className='text-decoration-none text-white custom-header-style'
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
                                    <Link href="/our-impact" className='text-decoration-none text-white custom-header-style'>
                                        Our Impact
                                    </Link>
                                    <Link href="/impact-stories" className='text-decoration-none text-white custom-header-style'>
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
                                        className='text-decoration-none text-white custom-header-stylee'
                                    >
                                        SUPPORT CAC
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
                                    <Link href="/invest-for-impact" className='text-decoration-none text-white custom-header-style'>
                                        Invest for Impact
                                    </Link>
                                    <Link href="/donate" className='text-decoration-none text-white custom-header-style'>
                                        Donate
                                    </Link>
                                </Col>
                            )}
                        </Col>

                        <Col>
                            <Link href='https://communityactioncollab.org/join-us/' className='text-decoration-none bg-white covid-blue apply-to-join-btn-mob p-3' style={{ fontSize: '16px !important' }}>
                                APPLY TO JOIN
                            </Link>
                        </Col>

                        <Col>
                            <Link href='/log-in' className='text-decoration-none text-white login-btn-mob '>
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