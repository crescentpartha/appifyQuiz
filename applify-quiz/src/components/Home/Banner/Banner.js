import React from 'react';
import { Link } from 'react-router-dom';
import test from '../../../images/onlineTest.jpg';

const Banner = () => {
    return (
        <div className='d-flex flex-wrap flex-md-nowrap gap-5 m-5 align-items-center justify-content-around'>
            <div className='w-100 text-start'>
                <h2>Appify<span className='text-warning'>Quiz</span> is the best option for Education &amp; Professional</h2>
                <p style={{textAlign: 'justify'}}>AppifyQuiz is secure, professional web-based online quiz testing system which is an easy-to-use, customizable online testing solution for educational and technical skills assessments with Tests &amp; Quizzes graded instantly, saving hours of paperwork! Our custom web-based Testing tool allows you to easily create secure online Exams &amp; assessments with advanced Quiz settings such as time limits, public &amp; private Test access, randomize Questions, instant feedback, multiple choice, matching, short answer, &amp; more Question types.</p>
                <Link className='btn btn-success' to='/signUp'>Register Free</Link>
            </div>
            <div className='w-100'>
                <img className='img-fluid' src={test} alt="Online Test" />
            </div>
        </div>
    );
};

export default Banner;