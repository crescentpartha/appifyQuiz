import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import { HashLink } from 'react-router-hash-link';
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
                    <div className="me-auto d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <Nav>
                            <Nav.Link className='mx-5 fw-semibold' as={CustomLink && HashLink} to="home#banner">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className='fw-semibold' as={(CustomLink && HashLink)} to="home#features">Features</Nav.Link>
                        </Nav>
                    </div>
                    <Nav>
                        {
                            user ?
                                <div>
                                    <span className='me-2 text-capitalize text-light fw-semibold'>{user.displayName}</span>
                                    <button className='border border-light border-opacity-25 rounded text-light text-uppercase fw-normal bg-secondary' onClick={logout}>Sign Out</button>
                                </div>
                                :
                                <Nav.Link className='fw-semibold' as={CustomLink} to="/login">Sign in</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;