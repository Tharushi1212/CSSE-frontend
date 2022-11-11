import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BookingTicket from './components/bookingTicket';
import AdminViewBookedSeats from './components/adminViewBookedSeats';

let isauth = localStorage.getItem('user');

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(localStorage.getItem('userRole'));
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<BookingTicket />} />
          {/* <Route exact path="/booking" element={<BookingTicket />} /> */}
          <Route path="/veiwBookings" element={<AdminViewBookedSeats />} />
        </Routes>

        <div style={{ marginTop: '0' }}></div>
      </Router>
    </div>
  );
}

export default App;
