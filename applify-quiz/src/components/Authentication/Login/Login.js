import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, ' ', password);
    }

    const resetPassword = event => {
        const email = emailRef.current.value;
    }

    return (
        <div className='container w-50 mx-auto my-5 p-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
            <h2 className='text-primary text-center my-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block my-4" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <p className='text-center mb-0'>
                    <span>New to Appify</span>
                    <span className='text-warning'>Quiz</span>?
                    <Link
                        to='/signup'
                        className='text-primary text-decoration-none mx-2 cursor-pointer'
                    >Please Register</Link>
                </p>
                <p className='d-flex align-items-center justify-content-center'>
                    <span>Forget Password?</span>
                    <button
                        className='btn btn-link text-decoration-none text-primary cursor-pointer p-2'
                        onClick={resetPassword}>
                        <span>Reset Password</span>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;