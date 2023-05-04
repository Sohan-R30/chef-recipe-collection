/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Banner/Banner';
import Chef from '../components/Chef/Chef';
import ContactUs from '../components/ContactUs/ContactUs';
import Review from '../components/Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Review></Review>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;