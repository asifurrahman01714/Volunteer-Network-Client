import React from 'react'
import { Link } from 'react-router-dom'

export default function Event({event}) {
  const handleDelete =(id) =>{
    console.log(id);
    fetch(`http://localhost:5000/deleteEvent/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        alert(' Event has been deleted successfully');
        window.location.reload();
      }
    })
  }
  return (
    <div className="col-md-4 mb-2 ">
            <div class="card shadow">
                <img src={event.image} class="card-img-top p-1" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{event.eventName}</h5>
                    <div className="row mt-3">
                      <div className="col-6"><Link href="#" class="btn btn-primary">Click For Book</Link></div>
                      <div className="col-6"><button onClick={() => handleDelete(event._id)} class="btn btn-primary">Click For Delete</button></div>
                    </div>
                </div>
            </div>
        </div>
  )
}
