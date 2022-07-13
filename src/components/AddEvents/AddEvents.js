import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

export default function AddEvents() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const onSubmit = (data) =>{
    fetch('http://localhost:5000/addEvent', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  };

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 border shadow p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="text-center text-primary mb-3">Add Your Favorite Event</h5>
                        <input value={loggedInUser.name} {...register("Name")} className="form-control"/> <br />
                        <input placeholder="Enter Your Event Name" {...register("Event Name", { required: true })} className="form-control"/> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" className="form-control"/>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}