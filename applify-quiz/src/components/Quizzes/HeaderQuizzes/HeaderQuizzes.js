import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderQuizzes = () => {

    const handleCreateQuiz = () => {
        toast('This feature is coming soon!');
    }

    return (
        <div className='m-5 text-start'>
            <h2>The Appify<span className='text-warning'>Quiz</span> is easy to use, fun and fully customizable</h2>
            <p style={{textAlign: 'justify'}}>Teachers and trainers can create a quiz to make lessons more interactive and engaging. Ever been excited by the phrase “It's test time!”? Didn't think so. Sure, quizzes should first and foremost track a student's progress, but they can be fun, too. If you're in a traditional education setting, an online quiz creator makes a great, interactive addition to in-class exercises. It's been researched and proven that regular quizzes-not to be graded or evaluated (this is key)-boost memory retention, drive engagement, and make learning fun. More on this in a bit.</p>
            <button className='btn btn-outline-success' onClick={handleCreateQuiz}>Create a Quiz</button>
            <hr />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HeaderQuizzes;