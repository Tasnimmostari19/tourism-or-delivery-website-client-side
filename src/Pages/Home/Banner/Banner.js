import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import im1 from '../../../images/im1.jpg'
import im2 from '../../../images/im2.jpg'
import im3 from '../../../images/im3.jpg'


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Istanbul</h3>
                        <p>The largest city in Turkey and the country's economic, cultural and historic center.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Rangamati</h3>
                        <p>Famous as the 'Tribal Cultural Institute Museum'. Rangamati Hill District is the natural habitat of various tribes, who have unique ways of living.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={im3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Singapore</h3>
                        <p> Is a sovereign island city-state in maritime Southeast Asia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;