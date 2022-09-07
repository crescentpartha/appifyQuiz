import React from 'react';
import useQuizCarts from '../../../hooks/useQuizCarts';

const QuizCarts = () => {
    const [carts] = useQuizCarts();
    console.log(carts);
    console.log(carts.length);
    return (
        <div>
            <h2>Quizzes Carts: {carts.length}</h2>
        </div>
    );
};

export default QuizCarts;