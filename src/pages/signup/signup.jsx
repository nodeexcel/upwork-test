import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { clientId } from '../../config.json'
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from "react-router";
import './signup.css'
function SignUp(props) {
    useEffect(() => {
        let checkLogin = localStorage.getItem('token');
        if (checkLogin) {
            props.history.push('/dashboard')
        }
    }, [])
    const responseGoogle = (response) => {
        // console.log(response);
        if (response.accessToken) {
            localStorage.setItem('token', response.accessToken)
            props.history.push('/dashboard')
        }
    }
    return <Container>
        <Row>
            <Col>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Col>
        </Row>
    </Container>

}

export default withRouter(SignUp);