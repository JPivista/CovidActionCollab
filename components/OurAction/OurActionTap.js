'use client'

import React, { useState } from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'

import CalibratedIcon from '../../public/our_action/calibrated_icon.svg'

import '../../app/globals.css'

const OurActionTap = () => {

    const [isCalibrated, setIsCalibrated] = useState(false);
    const [isCalibrated1, setIsCalibrated1] = useState(false);
    const [isCalibrated2, setIsCalibrated2] = useState(false);

    let blue = '#2A7A99';
    let yellow = '#FBD037';
    const [textColor, setTextColor] = useState(blue);
    const [textColor1, setTextColor1] = useState(blue);
    const [textColor2, setTextColor2] = useState(blue);

    const handleCalibratedbtn = () => {
        setIsCalibrated(!isCalibrated);
        setIsCalibrated1(false);
        setIsCalibrated2(false);

        setTextColor(yellow);
        setTextColor1(blue);
        setTextColor2(blue);

    }

    const handleCalibratedbtn1 = () => {
        setIsCalibrated1(!isCalibrated1);
        setIsCalibrated(false);
        setIsCalibrated2(false);

        setTextColor1(yellow);
        setTextColor2(blue);
        setTextColor(blue);
    }

    const handleCalibratedbtn2 = () => {
        setIsCalibrated2(!isCalibrated2);
        setIsCalibrated(false);
        setIsCalibrated1(false);

        setTextColor2(yellow);
        setTextColor1(blue);
        setTextColor(blue);
    }



    return (
        <>
            <Container fluid>
                <Container>


                    <Row>
                        <Col
                            onClick={handleCalibratedbtn}
                            style={{ color: textColor }}
                        >
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                fill='#'
                                class="bi bi-google"
                                viewBox="0 0 16 16"
                            >
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg> */}
                            <h3>
                                CALIBRATED
                                SERVICES
                            </h3>
                        </Col>



                        <Col
                            onClick={handleCalibratedbtn1}
                            style={{ color: textColor1 }}

                        >
                            <h3>

                                THE CAC
                                EXCHANGE
                            </h3>
                        </Col>


                        <Col
                            onClick={handleCalibratedbtn2}
                            style={{ color: textColor2 }}
                            id="cac"
                        >
                            <h3>
                                CALIBRATED
                                SERVICES
                            </h3>
                        </Col>
                    </Row>

                    {isCalibrated && (
                        <Col className='pb-5' id="calibrated">
                            <p className='bg-lato-bold'>
                                Deliver a high impact package of services to key communities (2 million), where the collaborative members have a direct presence or reach.
                            </p>
                            <p>
                                Leveraging their presence and reach, the collaborative members are putting together and delivering a package of services prioritising special communities. The package is customised based on communities and geography and includes home-based care, community-level testing, mental health support, food and essential supplies, social protection helpdesk and loan facilitation among others.
                            </p>

                            <Row>
                                <Col>
                                    <Image src='/our_action/covid_risk.jpg' alt='' fluid />
                                </Col>
                                <Col>
                                    <Image src='/our_action/covid_risk.jpg' alt='' fluid />
                                </Col>
                                <Col>
                                    <Image src='/our_action/covid_risk.jpg' alt='' fluid />
                                </Col>
                            </Row>

                            <p>
                                CAC designs and delivers high-impact packages of services to key communities, through the direct reach of the partners. The packages are customized based on communities and geography. We prioritize the marginalized and most vulnerable communities.
                            </p>

                            <p>
                                1. Health package 1: COVID risk assessment, prevention, and NCD treatment.
                                <br />
                                2. Health package 2: Vaccine Readiness, onboarding, and counselling
                                <br />
                                3. Social Protection package: Facilitate access to social protection scheme through helpdesks
                            </p>
                        </Col>
                    )}

                    {isCalibrated1 && (
                        <Col className='pb-5'>
                            <p className='bg-lato-bold'>
                                Setup and operate an information exchange and build capacities of key partners and actors.
                            </p>
                            <p>
                                Based on good practices of humanitarian responses, the Collaborative is aggregating from credible sources, a listing of documents, tools, apps, reports, graphs, estimates, good practices, IEC, BCC materials, and other live sites. Further, it is hosting a live information exchange for volunteers, materials, financing where members can post requirements and supplies. The Collaborative is also consolidating technology-based tools to help the members work more efficiently.
                            </p>
                            <p>
                                Built around this Tripod focus is the Action Framework, where attention is giving to every lever of this responsive resource network, to leverage every linkage to the maximum. The community and its wellbeing is always at the centre of all we do. The Tripod Focus supports the community through relief and recovery. Most importantly, the framework connects resource partners with the larger outcome – instilling dynamism and resilience in communities, institutions and systems.
                            </p>
                        </Col>
                    )}

                    {isCalibrated2 && (
                        <Col className='pb-5'>
                            <p className='bg-lato-bold'>
                                Setup and operate an information exchange and build capacities of key partners and actors.
                            </p>
                            <p>
                                The collaborative is assembling interested experts and organisations across domains in Solution Circles to examine COVID-19 related challenges and opportunities with the aim of coming up with evidence-based, cost-effective and scalable solutions. Currently, some problems being examined include – how to estimate resources required for a city/town, how to deliver primary care online, how to do large scale testing of communities. More solution circles will be formed, based on the need with the leadership from one of the collaborative members
                            </p>

                            <div className='d-flex flex-row flex-wrap align-items-center gap-2'>

                                <Image src='/our_action/vaccinate.svg' alt='' width={50} height={50} />
                                <Col>
                                    <h4 className='mb-0'>
                                        Vaccinate 10 million Vulnerable Population through ‘VaxNow’
                                    </h4>
                                </Col>

                            </div>
                        </Col>

                    )}
                    <Col>
                        <p>
                            Built around this Tripod focus is the Action Framework, where attention is giving to every lever of this responsive resource network, to leverage every linkage to the maximum. The community and its wellbeing is always at the centre of all we do. The Tripod Focus supports the community through relief and recovery. Most importantly, the framework connects resource partners with the larger outcome – instilling dynamism and resilience in communities, institutions and systems.
                        </p>
                    </Col>

                    <Col>
                        <Image src='/our_action/action_framework.jpg' alt='' fluid />
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default OurActionTap