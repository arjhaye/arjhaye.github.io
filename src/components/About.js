import React from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'
import images from '../images/aboutme.jpg';
import Typed from 'react-typed'

const About = () => {
    const [header] = React.useState({
        mainHeader: 'About Me',
        subHeader: 'I am a hardworking, honest individual. I am a good timekeeper,always willing to learn new skills. I have a good sense of humour. I am able to work independently in busy environments and also within a team setting.',
        greettext: 'Hello',
        textcontent: "I'm Arjhaye Paulino, As a web developer and programmer i never stop exploring and always excited to learn new things.",
        });
        const[state] = React.useState([
            {
                id:1,
                title: 'Name',
                text: 'Arjhaye Paulino'
            },
            {
                id:1,
                title: 'Email',
                text: 'arjhayepaulino@gmail.com'
            },
            {
                id:1,
                title: 'Phone',
                text: '+639613289924'
            },
            {
                id:1,
                title: 'Github',
                text: 'arjhaye'
            }
        ])
    return (
        <div className="about text__white" id="aboutcontent">
            <Container fluid="md">
                <Row>
                    <Col>
                    <Typed className="typed__text" strings={[header.mainHeader]} typeSpeed={40} backSpeed={60} loop />
                            <h4>{header.subHeader}</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Media className="about__content">
                    <img width={350} height={440} alt="Me" src={images}/>
                <Media.Body>
                <Typed className="typed__text" strings={[header.greettext]} typeSpeed={40} backSpeed={60} loop />
                    <h4>{header.textcontent}</h4>
                    <Container className="about__info">
                        <Row>
                            {state.map((info,id)=>(
                                <Col key={id} xs={12} md={6}>
                                    <h3 className="text__color">{info.title}</h3>
                                    <h5>{info.text}</h5>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Media.Body>
                </Media>
            </Container>
        </div>
    )
}
export default About
