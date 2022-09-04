import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Appify Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='mx-5 fw-semibold' as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='fw-semibold' as={Link} to="/signIn">Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;