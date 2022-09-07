import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import QuizCarts from '../QuizCarts/QuizCarts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id='features'>
                <Features></Features>
            </div>
            <div>
                <QuizCarts></QuizCarts>
            </div>
        </div>
    );
};

export default Home;