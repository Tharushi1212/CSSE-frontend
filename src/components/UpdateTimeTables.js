import React, { Component } from 'react';
import axios from 'axios';
import img11 from './Images/11.jpg';

export default class UpdateTimeTables extends Component {

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

  onSubmit = async (e) => {
    e.preventDefault();
    const id = window.location.href.toString();
    console.log(id.substr(38, id.length - 1));

    const finalid = id.substr(38, id.length - 1);

    const { Bus_ID, Route, Start_Time, End_Time, Bus_Number } = this.state;

    const data = {
      Bus_ID: Bus_ID,
      Route: Route,
      Start_Time: Start_Time,
      End_Time: End_Time,
      Bus_Number: Bus_Number
    }
    console.log("update data", data)

    let res = await axios.patch(`http://localhost:8080/timetables/updateTimeTable${finalid}`, data);
    console.log("res".res);
    if (res.data.Bus_ID != null) {
      alert("Time Table Details Updated Successfully")

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
  }
  getdata = async () => {
    const id = window.location.href.toString();
    console.log(id.substr(38, id.length - 1));

    const finalid = id.substr(38, id.length - 1);
    //const finalid = this.props.match.params.id;

    let res = await axios.get(`http://localhost:8080/timetables/getTimeTables${finalid}`);
    console.log(finalid.substr(38, id.length - 1));
    console.log("res", res);
    if (res.data.Bus_ID != null) {
      this.setState({
        Bus_ID: res.data.Bus_ID,
        Route: res.data.Route,
        Start_Time: res.data.Start_Time,
        End_Time: res.data.End_Time,
        Bus_Number: res.data.Bus_Number,

      });
      console.log(this.state);

    }
  }

  componentDidMount() {
    this.getdata();
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
                <b><a className="nav-link" aria-current="page" href="/AddTimeTables"><h5>Add New Time Table</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link active" href="/ViewTimeTables"><h5>Update Time Table Details</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" href="/ViewTimeTables"><h5>Delete Time Table Details</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                <b><a className="nav-link" href="/AdminViewUserAccounts"><h5>View All User Accounts</h5></a></b>
              </li>
              <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/"><h5>View Seat Booking Details</h5></a></b>
                </li>
              <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>

            </ul>


          </div>

        </nav>
        </center>
        <div className="col-md-8 mt-4 mx-auto">
          <center><div className="col-lg-9 mt-2 mb-2" style={{ backgroundColor: '#0000A0', color: 'white' }}>

            <center><h3>Update Time Table Details</h3></center>
          </div></center>

          <form className="needs-validation" noValidate>

            <table style={{ width: "100%", backgroundColor: '#d7dbdd' }}>
              <center>
                <img src={img11} style={{ width: '500px', height: '150px' }}></img></center>
              <tr>
                <th><td>

                </td>
                  <center>


                    <div className="form-group" style={{ marginBottom: '15px', marginTop: '10px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '175px' }}>Bus_ID</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Bus_ID"
                        placeholder="Bus_ID"
                        value={this.state.Bus_ID}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '180px' }}>Route</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Route"
                        placeholder="Route"
                        value={this.state.Route}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '145px' }}>Start_Time</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Start_Time"
                        placeholder="Start_Time"
                        value={this.state.Start_Time}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '155px' }}>End_Time</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="End_Time"
                        placeholder="End_Time"
                        value={this.state.End_Time}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '130px' }}>Bus_Number</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Bus_Number"
                        placeholder="Bus_Number"
                        value={this.state.Bus_Number}
                        onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success"><a href="/ViewTimeTables" style={{ textDecoration: 'none', color: 'white' }}>Back</a></button>
                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px', marginBottom: '15px', marginLeft: '70px' }} onClick={this.onSubmit}>
                      <i className="far fa-check-square"></i>
                      &nbsp; Update Details
                    </button>

                  </center>
                </th>
                <th>

                </th></tr></table>
          </form>
        </div>

      </div>

    )
  }
}
