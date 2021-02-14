import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'
import {FaArrowRight} from 'react-icons/fa'
import Typed from 'react-typed'


export default function Contact() {

  const[show,popup] = useState(false);
  const onmessage = () => popup(true);
  const cmessage = () => popup(false);

  
    
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_7hndcus', 'template_3odhbop', e.target, 'user_CVbcTyleAk0g4q0eoDRTZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }


  const [header] = React.useState({
    mainHeader: 'Contact Me',
    subHeader: '',
    });

    
  return(
    <div className="contact" id="content">
      <div className="container">
        <Container>
              <Row>
                <Col className="contact__me">
                <Typed className="typed__text" strings={[header.mainHeader]} typeSpeed={40} backSpeed={60} loop />
                  <h1 className="text__white">{header.subHeader}</h1>
                </Col>
              </Row>
            </Container>
            <Container>
              <Alert show={show} variant="dark">
                <p> Thank you for your message.</p>
                <div className="d-flex justify-content-end">
                  <Button onClick={() => cmessage(false)} variant="dark">Close</Button>
                </div>
              </Alert>
            </Container>
              <Form onSubmit={sendEmail}>
                <Container>
                  <Row className="form__spacing">
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="text__white">Name</Form.Label>
                      <Form.Control type="text" placeholder="Name Sample" name="name"/>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="text__white">Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" name="email"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="text__white">Message</Form.Label>
                      <Form.Control as="textarea" rows={3} name="message"/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                      <Col>
                        <Button variant="outline-light" type="submit" size="lg" onClick={onmessage}><FaArrowRight />&nbsp; Send </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            </div>
      </div>
    )
}