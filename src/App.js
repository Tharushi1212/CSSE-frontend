import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BookingTicket from './components/bookingTicket';
import AdminViewBookedSeats from './components/adminViewBookedSeats';
import AddTimeTables from "./components/AddTimeTables";
import ViewTimeTables from "./components/ViewTimeTables";
import UpdateTimeTables from "./components/UpdateTimeTables";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RegisterAdmin from "./components/auth/RegisterAdmin";
import HomePage from "./components/HomePage";
import AdminLogin from "./components/auth/AdminLogin";
import AddUserAccount from "./components/AddUserAccount";
import ViewUserAccounts from "./components/ViewUserAccounts";
import UpdateUserAccount from "./components/UpdateUserAccount";
import CusViewTimeTables from "./components/CusViewTimeTables";
import AdminViewUserAccounts from "./components/AdminViewUserAccounts";
import Footer from "./components/auth/Footer";
import Navbar from './components/layout/Navbar';

let isauth = localStorage.getItem('user');

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(localStorage.getItem('userRole'));
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<HomePage />} />
          <Route path="/bookingTicket" element={<BookingTicket />} />
          {/* <Route exact path="/booking" element={<BookingTicket />} /> */}
          <Route path="/veiwBookings" element={<AdminViewBookedSeats />} />
          
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/RegisterAdmin" element={<RegisterAdmin />} />
          <Route path="/AddTimeTables" element={<AddTimeTables />} />
          <Route path="/ViewTimeTables" element={<ViewTimeTables />} />
          <Route path="/CusViewTimeTables" element={<CusViewTimeTables />} />
          <Route path="/UpdateTimeTables/:id" element={<UpdateTimeTables />} />
          <Route path="/AddUserAccount" element={<AddUserAccount />} />
          <Route path="/ViewUserAccounts" element={<ViewUserAccounts />} />
          <Route path="/AdminViewUserAccounts" element={<AdminViewUserAccounts />} />
          <Route path="/UpdateUserAccount/:id" element={<UpdateUserAccount />} />
        
        </Routes>

        <div style={{ marginTop: '0' }}>  <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
