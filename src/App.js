import './App.css';
import EventForm from './components/event-lists/EventForm.js';
import Upcoming from './components/event-lists/Upcoming.js';

import Homepage from './components/homepage/homePage.js';

function App() {
  return (
    <div className="App">
      <EventForm/>
      <Upcoming/>
      <Homepage/>
    </div>
  );
}

export default App;
