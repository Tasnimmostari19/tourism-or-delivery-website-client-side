import React from 'react';
import { useForm } from "react-hook-form";
import './AddTrip.css'

const AddTrip = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);

        fetch('https://pure-reaches-42595.herokuapp.com/trips', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added user')
                    reset(data);
                }
            })

    }





    return (
        <div>
            <h2>Add Trip</h2>
            <form className='order-form add-trip-form' onSubmit={handleSubmit(onSubmit)}>
                {/* defaultValue={user.name} */}
                <input placeholder="Name" {...register("name")} />
                <input placeholder="Status" {...register("status")} />

                <input placeholder="Price" {...register("price")} />
                <input placeholder="Description" {...register("description")} />
                <input placeholder="Img Url" {...register("img")} />

                <input className='form-submit' type="submit" />
            </form>
        </div>
    );
};

export default AddTrip;