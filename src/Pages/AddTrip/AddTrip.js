import React from 'react';
import { useForm } from "react-hook-form";

const AddTrip = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <h2>Add Trip</h2>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                {/* defaultValue={user.name} */}
                <input placeholder="Name" {...register("name")} />
                <input placeholder="Status" {...register("status")} />

                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Description" {...register("description")} />
                <input placeholder="Img Url" {...register("img")} />

                <input className='form-submit' type="submit" />
            </form>
        </div>
    );
};

export default AddTrip;