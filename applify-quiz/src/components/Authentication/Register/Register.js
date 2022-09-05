import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(name, ' ', email, ' ', password);
    }

    return (
        <div className='container w-50 mx-auto my-5 p-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
            <h2 className='text-primary text-center mt-3 mb-4'>Please Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <div>
                    <div className='d-flex flex-nowrap align-items-center'>
                        <input
                            onClick={() => setAgree(!agree)}
                            type="checkbox"
                            name="terms"
                            id="terms" />
                        <label
                            className={`ps-2 ${agree ? '' : 'text-danger'}`}
                            htmlFor="terms"
                        >Accept Appify<span className={`${agree ? 'text-warning' : ''}`}>Quiz</span> Terms and Conditions</label>
                    </div>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto d-block btn btn-primary mt-2 mb-3'
                        type="submit"
                        value="Register" />
                </div>
            </Form>
            <div>
                <p className='text-center mb-0'>
                    <span>Already have an account?</span>
                    <Link
                        to='/login'
                        className='text-primary text-decoration-none mx-2 cursor-pointer'
                    >Login</Link>
                </p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;