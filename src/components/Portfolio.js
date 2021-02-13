import React from 'react'
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import Gastro from '../images/gastro.PNG'
import Esim from '../images/esim.png'
import Thesis from '../images/thesis.png'
import {FaEye} from 'react-icons/fa'
import Typed from 'react-typed'
import {FaGithub, FaWindowClose} from 'react-icons/fa';

const image = [
    Gastro,Esim,Thesis
]


const Portfolio = () => {
    const [header] = React.useState({
        mainHeader: 'Portfolio',
        subHeader: 'My Projects',
        });
        const data = [
            {
                id:1,
                cardimage: image[0],
                title: 'GASTRO PUB MANAGEMENT SYSTEM',
                text: 'HTML5/CSS3/BOOTSTRAP/PHP/JS',
                description: 'A web based design for bar&restaurant management',
                modalfeature: 'AAAAAAAAAAAAAA',
                modalplatform: 'AAAAAAAAAAAAAA'
            },
            {
                id:2,
                cardimage: image[1],
                title: 'E-SIM QUIZ for JUNIOR HIGHSCHOOL',
                text: 'JSON/JS/HTML/CSS3',
                description: 'A web application for junior conjunction quiz',
                modalfeature: 'BBBBBBBBBBBBBBBBBBB',
                modalplatform: 'BBBBBBBBBBBBBBBBBBB'
            },
            {
                id:3,
                cardimage: image[2],
                title: 'WEB-BASED PERFORMANCE and GRADES ANALYTICS for STUDENT OF COLLEGE OF COMPUTER STUDIES, COLUMBAN COLLEGE',
                text: 'HTML5/CSS3/BOOTSTRAP/PHP/JS/JSON',
                description: 'A web based system for student performance and grade analytics management',
                modalfeature: 'CCCCCCCCCCCCCCCCCCCCCC',
                modalplatform: 'CCCCCCCCCCCCCCCCCCCCCC'
            }
        ]
        
        const [modalId, setModalId] = React.useState("");
        const handleClose = () => setModalId("");

    return (
        <div className="portfolio" id="portfoliocontent">
            <Container>
                <Row>
                    <Col>
                    <Typed className="typed__text" strings={[header.mainHeader]} typeSpeed={40} backSpeed={60} loop />
                        <h1>{header.subHeader}</h1>
                    </Col>
                </Row>
            </Container>
            <Container className="portfolio__content">
                <Row>
                {data.map((info,id) => (
                    <Col key={id} className="card__row">
                        <Card className="card__body">
                        <Card.Img variant="top" src={info.cardimage} />
                        <Card.Body>
                            <Card.Title>{info.title}</Card.Title>
                            <Card.Text>{info.text}</Card.Text>
                            <Card.Text>{info.description}</Card.Text>
                            <Button variant="outline-light" onClick={() => setModalId(`modal${id}`)}><FaEye />&nbsp;View details</Button>
                        </Card.Body>
                        </Card>
                        <Modal show={modalId === `modal${id}`} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header id={`${info.Uniquename}ModalLabel`} className="modal__body text__white">
                                <Modal.Title id="contained-modal-title-vcenter" className="modal__body text__white">
                                {info.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal__body text__white">
                                <h4>{info.modalfeature}</h4>
                                <p>{info.modalplatform}</p>
                            </Modal.Body>
                            <Modal.Footer className="modal__body text__white">
                                <Button className="mr-auto" variant="outline-light" href="https://www.facebook.com/"><FaGithub />&nbsp;View</Button>
                                <Button variant="outline-light" onClick={handleClose}><FaWindowClose />&nbsp;Close</Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}
export default Portfolio