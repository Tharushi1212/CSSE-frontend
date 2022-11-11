import React, { Component } from 'react';
import axios from 'axios';
import img8 from './Images/8.jpg';
import img5 from './Images/5.png';
import img12 from './Images/12.png';

export default class AddTimeTables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Bus_ID: "",
      Route: "",
      Start_Time: "",
      End_Time: "",
      Bus_Number: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { Bus_ID, Route, Start_Time, End_Time, Bus_Number } = this.state;

    const data = {
      Bus_ID: Bus_ID,
      Route: Route,
      Start_Time: Start_Time,
      End_Time: End_Time,
      Bus_Number: Bus_Number

    }
    console.log(data)

    if (Bus_ID == "" || Route == "" || Start_Time == "" || End_Time == "" || Bus_Number == "") {
      alert("Enter all details for creating new Time Schedule")
      return 0;
    }
    else if (Bus_ID.length < 3 || Bus_ID.length > 3) {
      alert("Bus ID cannot be greater than or less than 3 characters")
      return 0;
    }
    else

      axios.post("http://localhost:8080/timetables/createTimeTables", data).then((res) => {
        console.log("response", res)
        if (res.status == 201) {
          alert("New Time Table is added!")
          this.setState(
            {
              Bus_ID: "",
              Route: "",
              Start_Time: "",
              End_Time: "",
              Bus_Number: ""
            }
          )
        }
      })
  }

  render() {
    return (
      <div>
        
        <center>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/ViewTimeTables"><h5>View All Time Tables</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" aria-current="page" href="/AddTimeTables"><h5>Add New Time Table</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/ViewTimeTables"><h5>Update Time Table Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/ViewTimeTables"><h5>Delete Time Table Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/AdminViewUserAccounts"><h5>View All User Accounts</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/veiwBookings"><h5>View Seat Booking Details</h5></a></b>
                </li>
                <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>

              </ul>


            </div>

          </nav>


          <div className="col-md-8 mt-4 mx-auto">
            <div className="col-lg-9 mt-2 mb-2" style={{ backgroundColor: '#0000A0', color: 'white', width: '900px' }}>

              <h3>Add New Time Tables</h3>
            </div>
            <form className="needs-validation" noValidate>

              <table style={{ width: "100%", backgroundColor: '#d7dbdd' }}>
                <center>
                  <img src={img5} style={{ width: '300px', height: '150px' }}></img>
                  <img src={img8} style={{ width: '350px', height: '150px' }}></img>
                  <img src={img12} style={{ width: '300px', height: '150px' }}></img></center>
                <tr>
                  <th><center>


                    <div className="form-group" style={{ marginBottom: '3px' }}>
                      <label style={{ marginleft: '100px', marginBottom: '10px', marginTop: '20px', marginRight: '110px' }}>Bus ID :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Bus_ID"
                        placeholder="Bus_ID"
                        value={this.state.Bus_ID}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginTop: '20px', marginRight: '115px' }}>Route :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Route"
                        placeholder="Route"
                        value={this.state.Route}
                        onChange={this.handleInputChange} />
                    </div>

                    {/* Bus_ID,Route,Start_Time,End_Time,Bus_Number */}

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '80px' }}>Start Time :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Start_Time"
                        placeholder="Start_Time"
                        value={this.state.Start_Time}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '90px' }}>End Time :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="End_Time"
                        placeholder="End_Time"
                        value={this.state.End_Time}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '65px' }}>Bus Number :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Bus_Number"
                        placeholder="Bus_Number"
                        value={this.state.Bus_Number}
                        onChange={this.handleInputChange} />
                    </div>


                    <button className="btn btn-success"><a href="/ViewTimeTables" style={{ textDecoration: 'none', color: 'white', marginTop: '5px' }}>Back</a></button>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px', marginLeft: '40px', marginBottom: '20px' }} onClick={this.onSubmit}>
                      <i className="far fa-click-square"></i>
                      &nbsp; Add new Schedule details
                    </button>
                  </center>
                  </th></tr></table>
            </form>


          </div>
        </center>
      </div>

    )
  }
}
