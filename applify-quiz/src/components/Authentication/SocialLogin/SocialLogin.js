import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/google30.png';
import github from '../../../images/github30.png';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (googleUser) {
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-secondary bg-opacity-50 w-50'></div>
                <p className='mx-2 mt-2 text-secondary'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary bg-opacity-50 w-50'></div>
            </div>

            {googleError ? <p className='text-danger text-center'>{googleError.message}</p> : ''}
            {
                (googleLoading) && <Loading></Loading>
            }

            <div className='row'>
                <div className='col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto'>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-info w-100 d-block mx-auto my-2'>
                        <img src={google} alt="Google" />
                        <span className='px-2 text-light'>Google Sign In</span>
                    </button>
                </div>
                <div className='col-sm-12 col-md-10 col-lg-8 col-xl-6 mx-auto'>
                    <button
                        className='btn btn-info w-100 d-block mx-auto my-2'>
                        <img src={github} alt="Google" />
                        <span className='px-2 text-light'>GitHub Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;