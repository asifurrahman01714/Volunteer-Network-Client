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
      .then((data) => console.log(data));
  }


  return (
    <div className="container">
      <div className='row'>
        {
          events.map(event => <Event key={event.id} event={event}></Event>)
        }
        <button const={handleEvents}>Post All Events</button>
      </div>
    </div>
  )
}
