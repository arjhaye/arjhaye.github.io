import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FaCode, FaGithub, FaCodepen} from 'react-icons/fa';
import Typed from 'react-typed'
const Services = () => {
    const [header] = React.useState({
        mainHeader: 'Services',
        subHeader: 'My Services',
        text: ''
        });

        const [state] = React.useState([
            {
                id: 1,
                icon: <FaCode className='services__icon' />,
                heading: 'Programming',
                text:'C++, Java',
            },
            {
                id: 2,
                icon: <FaGithub className='services__icon' />,
                heading: 'Web Development',
                text:'PHP, MySql, Javascript',
            },
            {
                id: 3,
                icon: <FaCodepen className='services__icon' />,
                heading: 'Web Design',
                text:'HTML5, CSS3, Javascript, React',
            }
        ]);
    return (
        <div className="services" id="servicecontent">
            <Container fluid="md">
            <Row>
                <Col>
                    <Typed className="typed__text" strings={[header.mainHeader]} typeSpeed={40} backSpeed={60} loop />
                    <h1>{header.subHeader}</h1>
                    <p>{header.text}</p>
                </Col>
            </Row>
            </Container>
            <Container>
                <Row>
                {state.map((info,id) => (
                    <Col key={id} sm className="services__box">
                        <div>
                            {info.icon}
                            <div>{info.heading}</div>
                            <div>{info.text}</div>
                        </div>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
export default Services