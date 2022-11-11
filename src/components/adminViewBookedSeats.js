import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const AdminViewBookedSeats = (AvailabilityModalOpnenError) => {
  const [date, setDate] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [seats, setSeats] = useState();
  const [bookingArray, setBookingArray] = useState([]);
  useEffect(() => {
    getAllBlogs();
  }, []);

  const handleDelete = async (e, id) => {
    try {
      console.log('delete blog', id);
      const deleteBooking = await fetch(
        `http://localhost:8080/bus/removeBookById/${id}`,
        {
          method: 'DELETE',
        }
      );
      const deleteDetails = await deleteBooking.json();
      if (deleteDetails) {
        alert('Blog deleted sucessfully.');
        location.reload();
        AvailabilityModalOpnenError();
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
    <div className="container">
      <table className="table table-hover">
        <thead>
          <th>#</th>
          <th>Date</th>
          <th>Start</th>
          <th>Destination</th>
          <th>No.of seats</th>
          <th>id</th>
        </thead>

        <tbody>
          {bookingArray.map((post, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{post.date}</td>
              <td>{post.start}</td>
              <td>{post.end}</td>
              <td>{post.seats}</td>
              <td>{post.id}</td>

              <td>
                <button
                  className="btn btn-warning"
                  onClick={(e) => handleAccept(e, post.id)}
                >
                  <i className="fas fa-edit"></i>&nbsp;Accept
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDelete(e, post.id)}
                >
                  &nbsp;Delete
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
