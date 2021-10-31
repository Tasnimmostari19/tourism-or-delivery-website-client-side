import React from 'react';
import r1 from '../../../../images/r-1.jpg'
import r2 from '../../../../images/r-2.jpg'

const Reviews = () => {
    return (
        <div>
            <h2 className="my-5">Review</h2>
            <div className="card-group m-5">
                <div className="card mx-5">
                    <img src={r1} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Miami Beach</h5>
                        <p>My fiance and I had never been to Miami Beach, but wanted to plan a unique elopement trip to Florida. We had no idea where to start, and turned to some internet research to find the services of Zicasso. I cannot speak highly enough about our 3 week trip to this place.</p>

                    </div>
                </div>
                <div className="card">
                    <img src={r2} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Yangshuo Mist</h5>
                        <p>I cannot speak highly enough about our 3 week trip to this place and the services provided by this travel company. Everything was seamless. The private guides were interesting and knowledgable. We felt that they were more than just guides. It was like we had a friend in each city.</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;