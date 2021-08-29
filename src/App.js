import './App.css';
import EventForm from './components/event-lists/EventForm.js';
import Upcoming from './components/event-lists/Upcoming.js';

function App() {
  return (
    <div className="App">
      <EventForm/>
      <Upcoming/>
    </div>
  );
}

export default App;
