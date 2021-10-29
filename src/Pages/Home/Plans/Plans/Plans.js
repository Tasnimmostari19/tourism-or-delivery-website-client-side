import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Plan from '../Plan/Plan';


const Plans = () => {

    const [plans, setPlans] = useState([]);



    useEffect(() => {
        const url = 'http://localhost:5000/trips'
        fetch(url)
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])

    // console.log(plans);

    return (

        <div>
            <h2>Plans</h2>
            <Row xs={1} md={2} className="g-4">
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