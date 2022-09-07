import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import test from '../../../images/onlineTest-illustration.jpg';

const Features = () => {

    const handleFeatures = () => {
        toast('New features are coming soon!');
    }
    
    return (
        <div className='bg-light py-4'>
            <div className='d-flex flex-wrap flex-md-nowrap gap-5 m-5 align-items-center justify-content-around'>
                <div className='w-100'>
                    <img className='img-fluid rounded' src={test} alt="Online Test" />
                </div>
                <div className='w-100 text-start'>
                    <h2>Create Custom Tests &amp; Exams Online</h2>
                    <ul>
                        <li>Secure &amp; private</li>
                        <li>Easy to use Test settings</li>
                        <li>No software installations required</li>
                        <li>Give Exams with public or private options</li>
                        <li>Results automatically graded &amp; viewable in real time</li>
                        <li>PCs, Macs, iPad, iPhone, Android, Chromebook &amp; more</li>
                    </ul>
                    <button className='btn btn-outline-success' onClick={handleFeatures}>More Features</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Features;