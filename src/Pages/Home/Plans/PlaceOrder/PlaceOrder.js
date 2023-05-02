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
        fetch(`https://tourism-or-delivery-website-server-side.vercel.app/trips/${tripId}`)
            .then(res => res.json())
            .then(data => setTrip(data))
    }, [])
    // console.log('trip', trip);



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'panding';
        data.booking = tripId;

        console.log(data);

        fetch(`https://tourism-or-delivery-website-server-side.vercel.app/bookings`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully orderd a trip')
                    reset(data);
                }
            })
    }


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
                <input placeholder="dd/mm/yyyy" {...register("date")} />
                <input placeholder="Phone Number" type="number" {...register("phone")} />
                <input className='form-submit' type="submit" />
            </form>

        </>
    );
};

export default PlaceOrder;