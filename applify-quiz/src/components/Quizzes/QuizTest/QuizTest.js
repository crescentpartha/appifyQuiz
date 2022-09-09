import React from 'react';
import { useParams } from 'react-router-dom';
// import useQuizzes from '../../../hooks/useQuizzes';
import DynamicQuestions from '../DynamicQuestions/DynamicQuestions';

const QuizTest = () => {
    const { quizTestID } = useParams();
    // console.log(quizTestID);

    // const [questions] = useQuizzes();
    // console.log(questions);

    // let question;
    // const handleQuestions = () => {
    //     for (let p in questions) {
    //         // console.log(p);
    //         if (quizTestID === p){
    //             question = p;
    //         }
    //     }

    //     // questions.forEach(element => {
    //     //     console.log(element);
    //     //     if (quizTestID === element) {
    //     //         question.push(element);
    //     //     }
    //     // });
    // }
    // handleQuestions();
    // console.log(question);

    return (
        <div className='my-5 p-5'>
            <div>
                <h2>Quiz Test: <span className='text-success'>{quizTestID}</span></h2>
                <p>This feature is coming soon!</p>
            </div>
            <div>
                <DynamicQuestions></DynamicQuestions>
            </div>
        </div>
    );
};

export default QuizTest;