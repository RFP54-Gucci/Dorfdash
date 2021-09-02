import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { Context } from './_Context/Context';
import './App.css';
import EventForm from './components/event-lists/EventForm';
import EventSummary from './components/events/eventSummary'
import Mylist from './components/event-lists/Mylist';
import Upcoming from './components/event-lists/Upcoming';
import MapContainer from './components/Map_ui/_MapContainer/MapContainer';
import DriverForm from './components/events/driverForm';
import RiderForm from './components/events/riderForm';
import EventDetails from './components/events/eventDetails';
import ReturningUser from './components/homepage/returningUser';
import NewUser from './components/homepage/newUser';
import Homepage from './components/homepage/homePage';
import Attendees from './components/attendants/attendees';
import {users, riders, events, drivers} from './_staticData/data.js';
console.log(users, riders, events, drivers);

function App() {
  const [currentUser, setCurrentUser] = useState(
    {email:"giaduccelli1@aol.com"});
  const [currentEvent, setCurrentEvent] = useState(
    {event_name:"tincidunt",
    host_email: "hbresson0@arizona.edu",
    date: "12/2/2020",
    time: "5:00 AM",
    location: "357 Buell Place"});
  const [userData, setUserData] = useState(users);
  const [riderData, setRiderData] = useState(riders);
  const [eventData, setEventData] = useState(events);
  const [driverData, setDriverData] = useState(drivers);

  // -------- states for myList -----------
  const [ myEventList, setMyList ] = useState([]);
  const [ eventIdArr, setEventIdArr ] = useState([]);

  return (
    <div className="App">
      <Context.Provider
        value={{ userData, riderData, eventData, driverData, myEventList, setMyList,
          eventIdArr, setEventIdArr, currentUser, setCurrentUser, currentEvent, setCurrentEvent }}
      >
        <Switch>
          <Route path="/attendees">
            <Attendees />
          </Route>

          <Route path="/myList">
            <Mylist />
          </Route>

          <Route path="/upcoming">
            <Upcoming />
          </Route>

          <Route path="/eventForm">
            <EventForm />
          </Route>

          <Route path="/map">
            <MapContainer />
          </Route>

          <Route path="/eventDetails">
            <EventDetails />
          </Route>

          <Route path="/riderForm">
            <RiderForm />
          </Route>

          <Route path="/driverForm">
            <DriverForm />
          </Route>

          <Route path="/eventSummary">
            <EventSummary />
          </Route>

          <Route path="/returningUser">
            <ReturningUser />
          </Route>

          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Context.Provider>
    </div>
  );
}

export default App;
