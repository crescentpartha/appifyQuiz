import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id='features'>
                <Features></Features>
            </div>
        </div>
    );
};

export default Home;