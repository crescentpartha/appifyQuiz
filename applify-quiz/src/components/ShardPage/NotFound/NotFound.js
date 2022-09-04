import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import notFound from '../../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='d-flex flex-column gap-3 align-items-center justify-content-center m-5'>
            <img className='landing-img' src={notFound} alt="Page Not Found" />
            <Link className='btn btn-success' to='/home'>Back to Homepage</Link>
        </div>
    );
};

export default NotFound;