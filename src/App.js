import './App.css';
import {useState} from 'react'
import EventForm from './components/event-lists/EventForm.js';
import EventDetails from './components/events/eventDetails.js';
import RiderForm from './components/events/riderForm.js';
import DriverForm from './components/events/driverForm.js';
import Homepage from './components/homepage/homePage.js';
import NewUser from './components/homepage/newUser.js';
import Upcoming from './components/event-lists/Upcoming.js';
import Map from './components/Map_ui/Map/Map.js';

import {Context} from './_Context/Context.js';
const initState = {
  name:'dorf/s world', host:'Dorf',date:'08/30/21',
  time:'04:00pm',
  location:'940 Great Mall Dr. Milpitas, CA 95035',
  description:'All night drinks, dancing and socializing'
}



function App() {
const [Event, setEvent] = useState(initState);
  return (
    <div className="App">
      <Context.Provider value={{setEvent,Event}}>
        <EventForm/>
        <Upcoming/>
        <Map />
      </Context.Provider>
    </div>
  );
}

export default App;
