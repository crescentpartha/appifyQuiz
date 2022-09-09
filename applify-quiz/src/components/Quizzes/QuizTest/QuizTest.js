import React from 'react';
import { useParams } from 'react-router-dom';

const QuizTest = () => {
    const {quizTestID} = useParams();
    return (
        <div className='my-5 p-5'>
            <h2>Quiz Test: <span className='text-success'>{quizTestID}</span></h2>
            <p>This feature is coming soon!</p>
        </div>
    );
};

export default QuizTest;