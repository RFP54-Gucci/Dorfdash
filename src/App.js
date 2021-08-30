import './App.css';
import EventDetails from './components/events/eventDetails.js';
import RiderForm from './components/events/riderForm.js';
import DriverForm from './components/events/driverForm.js';


function App() {
  return (
    <div className="App">
      <EventDetails />
      <RiderForm />
      <DriverForm />
    </div>
  );
}

export default App;
