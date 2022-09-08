import React from 'react';
import HeaderQuizzes from '../HeaderQuizzes/HeaderQuizzes';
import Quizzes from '../Quizzes/Quizzes';

const Body = () => {
    return (
        <div>
            <HeaderQuizzes></HeaderQuizzes>
            <Quizzes></Quizzes>
        </div>
    );
};

export default Body;