import React from 'react'
import { Container } from 'react-bootstrap'

const LoginForm = () => {
    return (
        <>
            <Container className='pt-5'>
                <form className='d-flex flex-lg-row flex-column flex-wrap gap-3 pt-5'>
                    <div class="form-group">
                        <input type="name" class="form-control" id="exampleInputUname" aria-describedby="nameHelp" placeholder="USERNAME" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="PASSWORD" />
                        <span>Forgot Password?</span>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">LOG IN</button>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default LoginForm