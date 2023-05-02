import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Plan from '../Plan/Plan';


const Plans = () => {

    const [plans, setPlans] = useState([]);





    useEffect(() => {

        const url = 'https://tourism-or-delivery-website-server-side.vercel.app/trips'
        fetch(url)
            .then(res => res.json())
            .then(data => setPlans(data))

    }, [plans])



    console.log(plans);

    return (

        <div>
            <h2 style={{ marginTop: '20px' }}>Plans</h2>

            <Row xs={1} md={2} className="g-4 mx-5 my-2">

                {
                    plans.map(plan => <Plan
                        key={plan._id}
                        plan={plan}
                    ></Plan>)
                }
            </Row>
        </div>

    );
};

export default Plans;