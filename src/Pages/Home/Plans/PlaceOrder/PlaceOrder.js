import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css'


const PlaceOrder = () => {

    const { tripId } = useParams();
    const [trip, setTrip] = useState({})
    // console.log(tripId);

    useEffect(() => {
        fetch(`http://localhost:5000/trips/${tripId}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [])
    // console.log('trip', trip);



    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);



    return (
        <>
            <Image src={trip?.img} fluid />
            <div className='m-5'>

                <h1>{trip.name}</h1>
                <h4>Price: {trip.price}</h4>
                <p className='m-5'>{trip.description}</p>
            </div>
            <h2>Booking</h2>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                {/* defaultValue={user.name} */}
                <input {...register("name", { required: true })} />

                <input {...register("email", { required: true })} />
                <input placeholder="Address" {...register("address")} />
                <input placeholder="Address" type="number" {...register("phone")} />
                <input type="submit" />
            </form>

        </>
    );
};

export default PlaceOrder;