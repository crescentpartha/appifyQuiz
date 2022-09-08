import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useQuizCarts from '../../../hooks/useQuizCarts';
import QuizCart from '../QuizCart/QuizCart';

const QuizCarts = () => {
    const [carts] = useQuizCarts();

    let rest = [];
    let shouldSkip = false;
    const handleCarts = () => {
        carts.forEach(element => {
            if (shouldSkip) {
                return;
            }
            if (rest.length < 6) {
                rest.push(element);
            }
            if (rest.length === 6) {
                shouldSkip = true;
                // return;
            }
            // console.log(rest);
        });
    }
    handleCarts();

    return (
        <div className='p-1' id='quiz'>
            <div className='container my-5'>
                <h2>Some Quiz Tests</h2>
                <Row xs={1} md={2} lg={3} className="g-4 m-0">
                    {
                        rest.map(cart => <QuizCart
                            cart={cart}
                            key={cart.cartId}
                        ></QuizCart>)
                    }
                </Row>
                <Link className='btn btn-outline-success mt-4' to='/quizzes'>Explore All Quizzes</Link>
            </div>
        </div>
    );
};

export default QuizCarts;