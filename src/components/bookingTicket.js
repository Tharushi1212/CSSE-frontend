import React, { useEffect, useState, Component } from 'react';
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
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';

import bus from '../assets/bus.jpg';
import cover from '../assets/Cover.png';
import AdminViewBookedSeats from './adminViewBookedSeats';

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF7A00',
  '&:hover': {
    backgroundColor: '#FF7A00',
  },
  outlineColor: '#FF7A00',
  color: 'white',
  fontWeight: 600,
  autoCapitalize: 'none',
  borderRadius: 15,
}));

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

const BookingTicket = (props) => {
  const [AvailabilityModalOpnen, setAvailabilityModalOpnen] = useState(false);
  const [AvailabilityModalOpnenError, setAvailabilityModalOpnenError] =
    useState(false);
  const handleClose = () => setAvailabilityModalOpnen(false);
  const [seats, setSeats] = useState();
  const [date, setDate] = useState();
  const [end, setEnd] = useState();
  const [start, setStart] = useState();
  const [email, setEmail] = useState('');

  useEffect(() => {
    date, end, start, seats, email;
    handleDelete(props.message);
  }, []);

  //null validation of the form
  const onAdd = () => {
    console.log(date, end, start, seats);
    //setAvailabilityModalOpnen(true);
  };

  const handleDestination = (e) => {
    setEnd(e.target.value);
  };

  const onInsertOk = async () => {
    const body = { date, start, end, seats, email };
    try {
      const insert = await fetch('http://localhost:8080/bus/bookTickets', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const newData = await insert.json();
      console.log(insert, 'data');
      setAvailabilityModalOpnen(true);
      setDate('');
      setStart('');
      setEnd('');
      setSeats('');
      setEmail('');
    } catch (error) {
      console.error(error.message);
    }
  };

  //delete
  const handleDelete = async (message) => {
    console.log(message, 'aaaaaaaaaa');
    // try {
    //   console.log('delete blog', id);
    //   const deleteBooking = await fetch(
    //     `http://localhost:8080/bus/removeBookById/${id}`,
    //     {
    //       method: 'DELETE',
    //     }
    //   );
    //   const deleteDetails = await deleteBooking.json();
    //   if (deleteDetails) {
    //     alert('Seat booking cancelled sucessfully.');
    //     location.reload();
    //     handleClose();
    //   } else {
    //     alert('Something went wrong');
    //   }
    //   if (newData.msg === 'delete success') {
    //     setAvailabilityModalOpnenError(true);
    //   }
    //   console.log(deleteBlog);
    // } catch (error) {
    //   console.error(error.message);
    // }
    if (message == 'delete success') {
      setAvailabilityModalOpnenError(true);
    }
  };

  const myStyle = {
    backgroundImage: `url(${cover})`,

    marginTop: '-70px',
    // fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
      <div>
        <center>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/CusViewTimeTables"><h5>View Bus Time Table</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/ViewUserAccounts"><h5>View User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/AddUserAccount"><h5>Create New User Account</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/ViewUserAccounts"><h5>Update User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/ViewUserAccounts"><h5>Delete User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" href="/bookingTicket"><h5>Online Seat Booking</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/userViewBookings"><h5>View Seat Booking Details</h5></a></b>
                </li>
                <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>
              </ul>


            </div>

          </nav></center>
    <>
      <div
        className="col-lg-9 mt-2 mb-2"
        style={{
          backgroundColor: '#864000',
          color: 'white',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        <h3> ONLINE SEAT RESERVATION</h3>
      </div>
      <div style={myStyle}>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <div
            style={{
              marginTop: 80,
              backgroundColor: '#ffffff',
              border: '1px solid black',
              borderRadius: 8,
              marginBottom: 20,

              //opacity: 0.6,
            }}
          >
            <FormControl
              sx={{
                width: 450,
                height: 400,
              }}
            >
              <Box style={{ padding: 19, width: 450, height: 500 }}>
                <div style={{ marginTop: 5 }}>
                  <Typography style={{ marginBottom: 3, fontWeight: 600 }}>
                    Departure Date
                  </Typography>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 10,
                  }}
                >
                  {' '}
                  <div style={{ marginTop: 3 }}>
                    <Typography style={{ marginBottom: 3, fontWeight: 600 }}>
                      From
                    </Typography>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={start}
                      label="To"
                      onChange={(e) => setStart(e.target.value)}
                      style={{ width: 145 }}
                    >
                      <MenuItem value="Kaduwela">Kaduwela</MenuItem>
                    </Select>
                  </div>
                  <div style={{ marginTop: 5, marginLeft: 10 }}>
                    <Typography style={{ marginBottom: 3, fontWeight: 600 }}>
                      To
                    </Typography>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={end}
                      label="To"
                      onChange={(e) => handleDestination(e)}
                      style={{ width: 145 }}
                    >
                      <MenuItem value="Negombo">Negombo</MenuItem>
                      <MenuItem value="Mathara">Mathara</MenuItem>
                      <MenuItem value="Galle">Galle</MenuItem>
                      <MenuItem value="Colombo">Colombo</MenuItem>
                      <MenuItem value="Kollupitiya">Kollupitiya</MenuItem>
                      <MenuItem value="Gampaha">Gampaha</MenuItem>
                    </Select>
                  </div>
                </div>

                <div style={{ marginTop: 5 }}>
                  <Typography style={{ marginBottom: 3, fontWeight: 600 }}>
                    No. of seats
                  </Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={seats}
                    label="seats"
                    onChange={(e) => setSeats(e.target.value)}
                    style={{ width: 145 }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </div>
                <div style={{ marginTop: 5 }}>
                  <Typography style={{ marginBottom: 3, fontWeight: 600 }}>
                    Email
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 15,
                  }}
                >
                  <ColorButton
                    variant="contained"
                    onClick={onInsertOk}
                    size="small"
                  >
                    Book Tickets
                  </ColorButton>
                </div>
              </Box>
            </FormControl>
          </div>
        </div>
      </div>

      {/* availability modal */}
      <div>
        <Modal
          open={AvailabilityModalOpnen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <b> Checking availability....</b>
              <br />
              Wait until you get the confirmation message.
            </Typography>
          </Box>
        </Modal>
      </div>

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
      
    </>
    </div>
  );
};

export default BookingTicket;
