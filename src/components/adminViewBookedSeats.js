import React, { useEffect, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Icon } from '@mui/material';
import BookingTicket from './bookingTicket';

const AdminViewBookedSeats = () => {
  const [id, setId] = useState();

  const [bookingArray, setBookingArray] = useState([]);
  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete = async (e, id) => {
    try {
      setId(id);

      console.log('delete blog', id);
      const deleteBooking = await fetch(
        `http://localhost:8080/bus/removeBookById/${id}`,
        {
          method: 'DELETE',
        }
      );
      const deleteDetails = await deleteBooking.json();
      if (deleteDetails) {
        console.log(deleteDetails.msg, 'ddd');

        alert('Seat booking cancelled sucessfully.');
        location.reload();
      } else {
        alert('Something went wrong');
      }

      console.log(deleteBlog);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAccept = () => {
    try {
    } catch (error) {
      console.error(error.message);
    }
  };

  //get all blogs
  const getAllBlogs = async () => {
    console.log('view blogs');
    try {
      const fetchData = await fetch('http://localhost:8080/bus/getAllBookings'); //fetch data
      console.log(fetchData);

      const jsonData = await fetchData.json();
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

        console.log(tempArray);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
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
        className="col-lg-9 mt-2 mb-2"
        style={{ backgroundColor: '#0000A0', color: 'white' }}
      >
        <h3>All Seat Booking Details</h3>
      </div>
      <table className="table table-hover">
        <thead>
          <th>#</th>
          <th>Date</th>
          <th>Start</th>
          <th>Destination</th>
          <th>No.of seats</th>
          <th>Email</th>
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

              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(e, post.id)}
                >
                  <i className="fas fa-trash-alt"></i>&nbsp;cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewBookedSeats;
