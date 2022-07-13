import React from 'react'
import { faker } from '@faker-js/faker';
import { events } from '../FakeData/FakeData';
import Event from '../Event/Event';


export default function Home() {
  console.log(events);
  const handleEvents = () => {
    fetch('http://localhost:5000/postEvents', {
    method: 'POST',
    body: JSON.stringify(events),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data)
        } else {
          console.log("No data submitted")
        }
      });
  }


  return (
    <div className="container">
      <div className='row'>
        {
          events.map(event => <Event key={event.id} event={event}></Event>)
        }
        <button onClick={handleEvents}>Post All Events</button>
      </div>
    </div>
  )
}
