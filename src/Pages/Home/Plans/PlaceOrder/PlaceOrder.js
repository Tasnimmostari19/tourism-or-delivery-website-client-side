import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css'
import useAuth from '../../../../hooks/useAuth';


const PlaceOrder = () => {

    const { user } = useAuth();
    const { tripId } = useParams();
    const [trip, setTrip] = useState({})
    // console.log(tripId);

    useEffect(() => {
        fetch(`https://pure-reaches-42595.herokuapp.com/trips/${tripId}`)
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
                <input defaultValue={user.displayName} {...register("name", { required: true })} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder="Address" {...register("address")} />
                <input placeholder="Phone Number" type="number" {...register("phone")} />
                <input className='form-submit' type="submit" />
            </form>

        </>
    );
};

export default PlaceOrder;