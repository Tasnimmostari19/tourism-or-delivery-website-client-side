import React from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs/Blogs';
import Plans from '../Plans/Plans/Plans';
import Reviews from '../Reviews/Reviews/Reviews';


const Home = () => {

    return (
        <div>
            {/* <Spinner animation="grow" variant="dark" /> */}
            <Banner></Banner>
            <Plans></Plans>
            <Reviews></Reviews>
            <Blogs></Blogs>


        </div>
    );
};

export default Home;