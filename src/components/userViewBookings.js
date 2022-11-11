import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Icon } from '@mui/material';
import BookingTicket from './bookingTicket';
import Modal from '@mui/material/Modal';
import {
  FormControl,
  Box,
  TextField,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const UserViewBookedSeats = () => {
  const [email, setEmail] = useState();

  const [bookingArray, setBookingArray] = useState([]);
  const [AvailabilityModalOpnenError, setAvailabilityModalOpnenError] =
    useState(false);
  const handleClose = () => setAvailabilityModalOpnenError(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //get all blogs
  const SearchBookings = async () => {
    console.log('view blogs');
    var body = {
      email: email,
    };
    try {
      const insert = await fetch(
        'http://localhost:8080/bus/getBookingByEmail',
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const jsonData = await insert.json();
      console.log(jsonData);
      if (jsonData) {
        let tempArray = [];
        for (let i = 0; i < jsonData.length; i++) {
          let temp = {
            id: jsonData[i]._id,
            date: jsonData[i].date,
            start: jsonData[i].start,
            end: jsonData[i].end,
            seats: jsonData[i].seats,
            email: jsonData[i].email,
          };
          tempArray.push(temp);
        }
        setBookingArray(tempArray);

        if (tempArray.length === 0) {
          setAvailabilityModalOpnenError(true);
        }

        console.log(tempArray);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  //modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <center>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/CusViewTimeTables"
                  >
                    <h5>View Bus Time Table</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/ViewUserAccounts"
                  >
                    <h5>View User Account Details</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/AddUserAccount"
                  >
                    <h5>Create New User Account</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="/ViewUserAccounts"
                  >
                    <h5>Update User Account Details</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a className="nav-link" href="/ViewUserAccounts">
                    <h5>Delete User Account Details</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a className="nav-link" href="/bookingTicket">
                    <h5>Online Seat Booking</h5>
                  </a>
                </b>
              </li>
              <li
                className="nav-item"
                style={{
                  backgroundColor: '#C0C0C0',
                  color: 'black',
                  marginRight: '5px',
                }}
              >
                <b>
                  <a className="nav-link" href="/userViewBookings">
                    <h5>View Seat Booking Details</h5>
                  </a>
                </b>
              </li>
              <button className="btn btn-success">
                <a
                  href="/HomePage"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Log Out
                </a>
              </button>
            </ul>
          </div>
        </nav>
      </center>

      <div
        className="container"
        style={{
          width: '100%',
          height: '50vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            marginTop: 8,
          }}
        >
          <br />
          <input onChange={handleEmail} placeholder="Enter email to search" />
          <br />
          <br />
          <button className="btn btn-success" onClick={() => SearchBookings()}>
            Search My Bookings
          </button>
        </div>
        <div
          className="col-lg-9 mt-2 mb-2"
          style={{ backgroundColor: '#864000', color: 'white' }}
        >
          <h3>Accepted Seat Bookings</h3>
        </div>
        <table className="table table-hover">
          <thead>
            <th>#</th>
            <th>Date</th>
            <th>Start</th>
            <th>Destination</th>
            <th>No.of seats</th>
            <th>Email</th>
            <th>Accept status</th>
          </thead>

          <tbody>
            {bookingArray.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.date}</td>
                <td>{post.start}</td>
                <td>{post.end}</td>
                <td>{post.seats}</td>
                <td>{post.email}</td>

                <td style={{ color: 'green', fontWeight: 800 }}>
                  Booking Accepted
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* error modal */}
        <div>
          <Modal
            open={AvailabilityModalOpnenError}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              Available number of seats : {seats}
            </Typography> */}
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Sorry Booking fail. Seats not available.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default UserViewBookedSeats;
