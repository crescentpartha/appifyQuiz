import { useEffect, useState } from "react";

const useQuizzes = () => {
    const [questions, setQuestions] = useState([]);

    useEffect( () => {
        // fetch('quizzes.json', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        fetch('../quizzes.json')
        .then(res => res.json())
        .then(data => setQuestions(data.quizzes));
    }, []);

    return [questions, setQuestions];
}

export default useQuizzes;