import React from 'react'
import { Col, Container } from 'react-bootstrap'

const ApplyToJoinForm = () => {
    return (
        <>
            <Container>
                <p>
                    By enrolling you can
                    contribute to and benefit from this collaboration. Also, do encourage other
                    organisations and experts to join hands with us. The key benefits of being part
                    of the collaborative is access to People, Resources, Financing &
                    Partnerships and the ability to make a greater collective impact.
                </p>


                <Col>
                    <form>
                        <div class="form-group col-4">
                            <label for="exampleInputEmail1"><b>What is your name?</b></label>
                            <input type="name" class="form-control" id="exampleInputName" aria-describedby="name" placeholder="" required />

                        </div>
                        <div className='py-3'>
                            <p>
                                <b>
                                    Hi ! Are you
                                    representing an organisation and looking to apply to join CAC or are you looking
                                    to volunteer as an individual?
                                </b>
                            </p>
                        </div>
                        <div className='d-flex flex-row gap-3'>
                            <button type="submit" class="bg-light rounded-3 border-0 px-4 py-1 fw-bold">Apply to join</button>
                            <button type="submit" class="bg-covid-blue border-0 rounded-3 text-white px-4 py-1 fw-bold">Volunteer as an Individual</button>
                        </div>
                    </form>
                </Col>
            </Container>
        </>
    )
}

export default ApplyToJoinForm