import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll'

const Navb = () => {
    return (
        <div>
            <Navbar fixed="top" className="Navbar" variant="dark" expand="lg">
                <div className="container">
                    <Navbar.Brand>Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto nav-links">
                            <Nav.Link><Link
                                activeClass="nav__link"
                                to="bannercontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Home</Link></Nav.Link>
                            <Nav.Link><Link
                            activeClass="nav__link"
                                to="servicecontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Skills</Link></Nav.Link>
                            <Nav.Link><Link
                            activeClass="nav__link"
                                to="aboutcontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>About</Link></Nav.Link>
                            <Nav.Link><Link
                            activeClass="nav__link"
                                to="portfoliocontent"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Portfolio</Link></Nav.Link>
                            <Nav.Link><Link
                            activeClass="nav__link"
                                to="content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
export default Navb