import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FaCopyright} from 'react-icons/fa'
const Footer = () => {
    const [state] = React.useState({
        copyright: '2021 ALL RIGHTS RESERVED.',
        text: 'created by Arjhaye Paulino using react-bootstrap'
    })
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col><FaCopyright />  {state.copyright} </Col>
                </Row>
                <Row>
                    <Col>{state.text}</Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer