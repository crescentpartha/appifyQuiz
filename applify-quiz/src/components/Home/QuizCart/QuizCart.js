import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const QuizCart = ({ cart }) => {
    const { cartId, title, img, noOfQuestions, price, rating, totalAttempts, type } = cart;
    // console.log(cart);

    const navigate = useNavigate();
    const handleNavigateQuizTest = cartId => {
        navigate(`/quiz/${cartId}`);
    }
    return (
        <Col className=''>
            <Card className='border-0 shadow-sm'>
                <Card.Img variant="top" src={img} className='img-fluid rounded w-100' alt={title}/>
                <Card.Body>
                    <Card.Title className='mb-4 text-success'>{title}</Card.Title>
                    <Card.Text className='d-flex align-items-center justify-content-around'>
                        <span><b>Price: </b>{price}</span>
                        <span><b>Type: </b>{type}</span>
                        <span><b>Rating: </b>{rating}</span>
                    </Card.Text>
                    <Card.Text className='d-flex align-items-center justify-content-around'>
                        <span><b>Total Questions: </b>{noOfQuestions}</span>
                        <span><b>Total Attempts: </b>{totalAttempts}</span>
                    </Card.Text>
                    <button onClick={() => handleNavigateQuizTest(cartId)} className='btn btn-outline-success'>Start Test</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default QuizCart;