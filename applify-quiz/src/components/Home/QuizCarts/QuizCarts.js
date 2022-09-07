import React from 'react';
import useQuizCarts from '../../../hooks/useQuizCarts';
import QuizCart from '../QuizCart/QuizCart';

const QuizCarts = () => {
    const [carts] = useQuizCarts();
    console.log(carts);
    // console.log(carts.no1?.title);

    for (const key in carts) {
        const cart = carts[key];
        // console.log(cart.cartId);
        // console.log(cart);
        <QuizCart cart={cart} key={cart.cartId}></QuizCart>

    }
    return (
        <div>
            <h2>Quizzes Carts: {carts.length}</h2>
            {
                // for (const key in carts) {
                //     console.log(carts[key]);
                // }
                // cart.map(c => console.log(c))
            }
        </div>
    );
};

export default QuizCarts;