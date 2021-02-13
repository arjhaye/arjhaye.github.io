import React from 'react';
import { Container, Button, Row, Col, Media} from 'react-bootstrap';
import Profile from '../images/me.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaGithub} from 'react-icons/fa';
import {Link} from 'react-scroll'

console.log(Profile);
const Banner = () => {
    const [state] = React.useState({
        title: 'I am Arjhaye Paulino',
         text: 'Aspiring web/app developer and programmer'
        });
    return<Container fluid className="background__img" id="bannercontent">
            <Row>
              <Col md={{ span: 7, offset: 3 }}>
            <Media>
              <Media.Body>
                <div className="banner__align">
                  <>
                    <Button href="https://www.facebook.com/muspelheim03/" className="banner__icons" variant="outline-light" size="lg"><FaFacebookF/></Button>{' '}
                    <Button href="https://twitter.com/Eyahjra_P" className="banner__icons" variant="outline-light" size="lg"><FaTwitter/></Button>{' '}
                    <Button href="https://www.instagram.com/eyahjra/" className="banner__icons" variant="outline-light" size="lg"><FaInstagram/></Button>{' '}
                    <Button href="https://github.com/arjhaye" className="banner__icons" variant="outline-light" size="lg"><FaGithub/></Button>{' '}
                  </>
                <h1 className="text__white">{state.title}</h1>
                <p className="text__white">{state.text}</p>
                <Button href="/" variant="outline-light" size="lg"><Link
                                to="portfoliocontent"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>Portfolio</Link></Button>{' '}
                </div>
              </Media.Body>
              <img className="align-self-center mr-3" src={Profile} alt=""/>
            </Media>
              </Col>
            </Row>
          </Container>
}
export default Banner;
