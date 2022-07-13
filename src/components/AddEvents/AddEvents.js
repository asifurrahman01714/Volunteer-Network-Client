import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";

export default function AddEvents() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState('');
  
  const onSubmit = (data) =>{
    data.image = imageUrl;
    console.log(data);
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

  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    const imageData = new FormData();
    imageData.set('key', '7a25983285d44895114b5725f04305d7');
    imageData.append('image', image);
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      console.log(response.data.data.url);
      const url = response.data.data.url;
      setImageUrl(url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 border shadow p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5 className="text-center text-primary mb-3">Add Your Favorite Event</h5>
                        <input value={loggedInUser.name} {...register("Name")} className="form-control"/> <br />
                        <input placeholder="Enter Your Event Name" {...register("eventName", { required: true })} className="form-control"/> <br />
                        <input placeholder="Upload Event Image" {...register("Image", { required: true })} className="form-control" onChange={handleImageUpload} type="file"/> <br />
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input type="submit" className="form-control"/>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}