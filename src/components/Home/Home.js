import React from 'react'
import { faker } from '@faker-js/faker';
import { events } from '../FakeData/FakeData';
import Event from '../Event/Event';


export default function Home() {
  console.log(events);
  return (
    <div className="container">
      <div className='row'>
        {
          events.map(event => <Event key={event.id} event={event}></Event>)
        }
      </div>
    </div>
  )
}
