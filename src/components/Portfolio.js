import React from 'react'
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import Gastro from '../images/gastro.PNG'
import Gastro1 from '../images/gastro_c.png'
import Gastro2 from '../images/gastro_dl.png'
import Gastro3 from '../images/gastro_fl.png'
import Esim from '../images/esim.png'
import Esim1 from '../images/conjunction_a1.png'
import Esim2 from '../images/conjunction_ac1.png'
import Esim3 from '../images/conjunction_credit.png'
import Thesis from '../images/thesis.png'
import Thesis1 from '../images/thesis_as.png'
import Thesis2 from '../images/thesis_p.png'
import Thesis3 from '../images/thesis_ssl.png'
import {FaEye} from 'react-icons/fa'
import Typed from 'react-typed'
import {FaGithub, FaWindowClose, FaLaptop, FaMobileAlt, FaNetworkWired} from 'react-icons/fa';

const image = [
    Gastro,Gastro1,Gastro2,Gastro3,Esim,Esim1,Esim2,Esim3,Thesis,Thesis1,Thesis2,Thesis3
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
                modalimage1: image[1],
                modalimage2: image[2],
                modalimage3: image[3],
                modaldescription: "A tablet type ordering system that allows both management and customer to order and to manage ordering list efficiently",
                modalfeature: 'Manage order and list, Cashier and Bar module',
                modalplatform: <FaLaptop />,
                modalplatform1: <FaMobileAlt />,
                modalplatform2: <FaNetworkWired />,
                modallink: "https://github.com/arjhaye/Gastro"
            },
            {
                id:2,
                cardimage: image[4],
                title: 'E-SIM QUIZ for JUNIOR HIGHSCHOOL',
                text: 'JSON/JS/HTML/CSS3',
                description: 'A web application for junior conjunction quiz',
                modalimage1: image[5],
                modalimage2: image[6],
                modalimage3: image[7],
                modaldescription: "A web based application where user can do their quiz and get score",
                modalfeature: '3 types of quiz on every category and get the user score after a quiz category',
                modalplatform: <FaLaptop />,
                modallink: "https://github.com/arjhaye/E-sim-quiz"
            },
            {
                id:3,
                cardimage: image[8],
                title: 'WEB-BASED PERFORMANCE and GRADE ANALYTICS for STUDENT OF COLLEGE OF COMPUTER STUDIES, COLUMBAN COLLEGE',
                text: 'HTML5/CSS3/BOOTSTRAP/PHP/JS/JSON',
                description: 'A web based system for student performance and grade analytics management',
                modalimage1: image[9],
                modalimage2: image[10],
                modalimage3: image[11],
                modaldescription: "A web based application where it sorts a student perfomance on its potential subjects and can view its grade",
                modalfeature: 'Enrollment page in specific subject and user-friendly with grade/performance viewer and schedules',
                modalplatform: <FaLaptop />,
                modalplatform1: <FaMobileAlt />,
                modalplatform2: <FaNetworkWired />,
                modallink: "https://github.com/arjhaye/CC-grade-and-performance"
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
                        <Modal show={modalId === `modal${id}`} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter">
                            <Modal.Header id={`${info.Uniquename}ModalLabel`} className="modal__body">
                                <Modal.Title id="contained-modal-title-vcenter" className="modal__body modal__textc">
                                {info.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modal__body text__white">
                                <Row>
                                    <Col>
                                        <Card.Img src={info.modalimage1} />
                                        <br />
                                        <Card.Img src={info.modalimage2} />
                                        <br />
                                        <Card.Img src={info.modalimage3} />
                                    </Col>
                                    <Col>
                                        <h3 className="modal__textc">Description</h3>
                                        <h4>{info.modaldescription}</h4>
                                        <br />
                                        <br />
                                        <h3 className="modal__textc">Features</h3>
                                        <h4>{info.modalfeature}</h4>
                                        <br />
                                        <br />
                                        <h3 className="modal__textc">Language/Tool</h3>
                                        <h4>{info.text}</h4>
                                        <br />
                                        <br />
                                        <h3 className="modal__textc">Platform</h3>
                                        <h4>{info.modalplatform}&nbsp;{info.modalplatform1}&nbsp;{info.modalplatform2}</h4>
                                        <br />
                                        <br />
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer className="modal__body text__white">
                                <Button className="mr-auto" variant="outline-light" href={info.modallink}><FaGithub />&nbsp;View</Button>
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