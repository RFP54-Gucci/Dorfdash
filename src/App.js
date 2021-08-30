import { Switch, Route } from "react-router-dom";
import './App.css';
import EventForm from './components/event-lists/EventForm';
import Mylist from './components/event-lists/Mylist';
import Upcoming from './components/event-lists/Upcoming';
import Map from './components/map_ui/Map';
import DriverForm from './components/DriverForm';
import RiderForm from './components/RiderFrom';
import EventDetails from './components/EventDetails';
import ReturningUser from './components/ReturningUser';
import NewUser from './components/NewUser';
import HomePage from './components/HomePage';



function App() {
  return (
    <div className="App">
      <Switch>
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
          <Map />
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

        <Route path="/returningUser">
          <ReturningUser />
        </Route>

        <Route path="/newUser">
          <NewUser />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
