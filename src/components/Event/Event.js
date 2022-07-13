import React from 'react'
import { Link } from 'react-router-dom'

export default function Event({event}) {
  return (
    <div className="col-md-4 mb-2 ">
            <div class="card shadow">
                <img src={event.image} class="card-img-top p-1" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{event.eventName}</h5>
                    <Link href="#" class="btn btn-primary">Click For Book</Link>
                </div>
            </div>
        </div>
  )
}
