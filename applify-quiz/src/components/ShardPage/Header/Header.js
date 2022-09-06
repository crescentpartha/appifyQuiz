import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <div className='d-flex  align-items-center justify-content-center'>
                        <p className='m-0'>Appify<span className='text-warning'>Quiz</span></p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='mx-5 fw-semibold' as={Link} to="/home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <button className='border border-light border-opacity-25 rounded text-light text-uppercase fw-normal bg-secondary' onClick={logout}>Sign Out</button>
                            :
                            <Nav.Link className='fw-semibold' as={Link} to="/login">Sign in</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;