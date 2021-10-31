import React from 'react';
import b1 from '../../../../images/b-1.jpg'
import b2 from '../../../../images/b-2.jpg'
import b3 from '../../../../images/b-3.jpg'

const Blogs = () => {
    return (
        <div>
            <h2 className='m-5'>BLOG POST</h2>
            <div className="card-group m-5">
                <div className="card mx-5">
                    <img src={b1} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Europ</h5>

                    </div>
                </div>
                <div className="card mx-5">
                    <img src={b2} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">A day in Kashmir</h5>

                    </div>
                </div>
                <div className="card mx-5">
                    <img src={b3} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Cusco city</h5>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;