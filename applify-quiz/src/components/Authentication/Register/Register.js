import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [error2, setError2] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (user) {
        // console.log(user);
    }

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(name, ' ', email, ' ', password);

        if (password.length !== 8) {
            setError2('Password length should be 8 character long');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // alert('Updated profile');
        toast('Send Email for Verification');
        navigate('/home');

    }

    return (
        <div className='container authentication-container mx-auto my-5 border border-secondary border-opacity-25 rounded shadow-sm text-start'>
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

                {error2 ? <p className='text-danger text-center'>{error2}</p> : ''}
                {error1 ? <p className='text-danger text-center'>{error1}</p> : ''}
                {error ? <p className='text-danger text-center'>{error.message}</p> : ''}
                {
                    (loading || updating) && <Loading></Loading>
                }

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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;