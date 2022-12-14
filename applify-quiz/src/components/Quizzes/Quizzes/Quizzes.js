import React from 'react';
import { Row } from 'react-bootstrap';
import useQuizCarts from '../../../hooks/useQuizCarts';
import QuizCart from '../../Home/QuizCart/QuizCart';

const Quizzes = () => {
    const [carts] = useQuizCarts();
    return (
        <div className='container my-5'>
            <h2>All Quiz Tests</h2>
            <Row xs={1} md={2} lg={3} className="g-4 m-0">
                {
                    carts.map(cart => <QuizCart
                        cart={cart}
                        key={cart.cartId}
                    ></QuizCart>)
                }
            </Row>
        </div>
    );
};

export default Quizzes;