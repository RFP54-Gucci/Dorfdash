import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/myList">
          <MyList />
        </Route>

        <Route path="/upcoming">
          <Upcoming />
        </Route>

        <Route path="/eventForm">
          <EventForm />
        </Route>

        <Route path="/eventDetails">
          <eventDetails />
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
