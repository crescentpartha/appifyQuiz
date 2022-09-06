import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import '../Register/Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        sendPasswordResetEmail,
        sending,
        error1
    ] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate('/home');
    }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, ' ', password);

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email');
        }
        else {
            toast('Please, enter your email address');
        }
    }

    return (
        <div className='container authentication-container mx-auto my-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
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

                {(error || error1) ? <p className='text-danger text-center'>{error.message} {error1.message}</p> : ''}
                {
                    (loading || sending) && <Loading></Loading>
                }

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
                <p className='d-flex align-items-center justify-content-center mb-0'>
                    <span>Forget Password?</span>
                    <button
                        className='btn btn-link text-decoration-none text-primary cursor-pointer p-2'
                        onClick={resetPassword}>
                        <span>Reset Password</span>
                    </button>
                </p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;