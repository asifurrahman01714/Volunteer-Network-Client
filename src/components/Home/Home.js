import React from 'react'
import { faker } from '@faker-js/faker';
import Event from '../Event/Event';


export default function Home() {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:5000/getEvents')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setEvents(data);
    })
  }, []);


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
