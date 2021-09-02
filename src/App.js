import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import {riders,drivers, realEvent} from './_staticData/data.js';
import axios from 'axios'

function App() {

  // this context will have users' information currently in the db
  const [userData, setUserData] = useState([]);
  const [eventData, setEventData] = useState([]);

  const [currentEvent, setCurrentEvent] = useState(realEvent);
  const [currentDriver, setCurrentDriver] = useState(riders[0]);
  const [currentUser, setCurrentUser] = useState({});
  const [riderData, setRiderData] = useState(riders);
  const [driverData, setDriverData] = useState(drivers);

  useEffect( () => {
      async function fetchData() {
       try{
        const {data:events} = await axios.get('http://localhost:3100/data/events');
        const {data:users} = await axios.get('http://localhost:3100/data/users');
        setUserData(users);
        setEventData(events);

       }
        catch(err){
          console.log('ERROR:', err);
        }
      }
      fetchData();
  },[])

  // -------- states for myList -----------
  const [ myEventList, setMyList ] = useState([]);
  const [ eventIdArr, setEventIdArr ] = useState([]);

  return (
    <div className="App">
      <Context.Provider
        value={{ userData, riderData, eventData, driverData, myEventList, setMyList,
          currentDriver,
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
