import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateUserAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {
      First_Name: "",
      Last_Name: "",
      NIC: "",
      Email: "",
      Contact: "",
      Address: ""
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
    const finalid = id.substr(40, id.length - 1);
    console.log(finalid);

    const { First_Name, Last_Name, NIC, Email, Contact, Address } = this.state;

    const data = {
      First_Name: First_Name,
      Last_Name: Last_Name,
      NIC: NIC,
      Email: Email,
      Contact: Contact,
      Address: Address
    }
    console.log("update data", data)

    let res = await axios.patch(`http://localhost:8080/useraccount/updateUserAccount/${finalid}`, data);
    console.log("res", res);
    if (res.data.First_Name != null) {
      alert("User Details Updated Successfully")

      this.setState(
        {
          First_Name: "",
          Last_Name: "",
          NIC: "",
          Email: "",
          Contact: "",
          Address: ""
        }
      )
    }
  }
  getdata = async () => {
    const id = window.location.href.toString();
    const finalid = id.substr(40, id.length - 1);
    console.log(finalid);


    //const id = this.props.match.params.id;

    let res = await axios.get(`http://localhost:8080/useraccount/getUserAccount/${finalid}`);
    console.log("res", res);
    if (res.data.First_Name != null) {
      this.setState({
        First_Name: res.data.First_Name,
        Last_Name: res.data.Last_Name,
        NIC: res.data.NIC,
        Email: res.data.Email,
        Contact: res.data.Contact,
        Address: res.data.Address

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
                  <b><a className="nav-link" aria-current="page" href="/CusViewTimeTables"><h5>View Bus Time Table</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" aria-current="page" href="/ViewUserAccounts"><h5>View User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/AddUserAccount"><h5>Create New User Account</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" aria-current="page" href="/ViewUserAccounts"><h5>Update User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" href="/ViewUserAccounts"><h5>Delete User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/bookingTicket"><h5>Online Seat Booking</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/userViewBookings"><h5>View Seat Booking Details</h5></a></b>
                </li>
                <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>
              </ul>


            </div>

          </nav></center>
        <div className="col-md-8 mt-4 mx-auto">
          <center><div className="col-lg-9 mt-2 mb-2" style={{ backgroundColor: '#0000A0', color: 'white' }}>

            <center><h3>Update User Account Details</h3></center>
          </div></center>

          <form className="needs-validation" noValidate>

            <table style={{ width: "100%", backgroundColor: '#d7dbdd' }}>
              <tr>
                <th><td>

                </td>
                  <center>


                    <div className="form-group" style={{ marginBottom: '15px', marginTop: '10px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '175px' }}>First_Name</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="First_Name"
                        placeholder="First_Name"
                        value={this.state.First_Name}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '180px' }}>Last_Name</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Last_Name"
                        placeholder="Last_Name"
                        value={this.state.Last_Name}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '235px' }}>NIC</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="NIC"
                        placeholder="NIC"
                        value={this.state.NIC}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '225px' }}>Email</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Email"
                        placeholder="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '205px' }}>Contact</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Contact"
                        placeholder="Contact"
                        value={this.state.Contact}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px', marginRight: '205px' }}>Address</label>
                      <input type="text" style={{ width: "350px" }}
                        className="form-contorl"
                        name="Address"
                        placeholder="Address"
                        value={this.state.Address}
                        onChange={this.handleInputChange} />
                    </div>

                    <button className="btn btn-success"><a href="/ViewUserAccounts" style={{ textDecoration: 'none', color: 'white' }}>Back</a></button>
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
