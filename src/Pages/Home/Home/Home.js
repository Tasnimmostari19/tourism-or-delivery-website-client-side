import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs/Blogs';
import Plans from '../Plans/Plans/Plans';
import Reviews from '../Reviews/Reviews/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Plans></Plans>
            <Reviews></Reviews>
            <Blogs></Blogs>


        </div>
    );
};

export default Home;