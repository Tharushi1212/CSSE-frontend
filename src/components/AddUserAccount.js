import React, { Component } from 'react';
import axios from 'axios';
import img7 from './Images/7.jpg';
import img9 from './Images/9.jpg';

export default class AddUserAccount extends Component {

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

  onSubmit = (e) => {
    e.preventDefault();

    const { First_Name, Last_Name, NIC, Email, Contact, Address } = this.state;

    const data = {
      First_Name: First_Name,
      Last_Name: Last_Name,
      NIC: NIC,
      Email: Email,
      Contact: Contact,
      Address: Address

    }
    console.log(data)

    if (First_Name == "" || Last_Name == "" || NIC == "" || Email == "" || Contact == "" || Address == "") {
      alert("Enter all details for creating new user account")
      return 0;
    }
    else if (Contact.length < 10 || Contact.length > 10) {
      alert("Contact cannot be greater than or less than 10 characters")
      return 0;
    }
    else

      axios.post("http://localhost:8080/useraccount/createUserAccount", data).then((res) => {
        console.log("response", res)
        if (res.status == 201) {
          alert("New User account is created!")
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
                  <b><a className="nav-link" aria-current="page" href="/CusViewTimeTables"><h5>View Bus Time Table</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/ViewUserAccounts"><h5>View User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link active" aria-current="page" href="/AddUserAccount"><h5>Create New User Account</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" aria-current="page" href="/ViewUserAccounts"><h5>Update User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/ViewUserAccounts"><h5>Delete User Account Details</h5></a></b>
                </li>
                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                  <b><a className="nav-link" href="/"><h5>Online Seat Booking</h5></a></b>
                </li>
                <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>
              </ul>


            </div>

          </nav>


          <div className="col-md-8 mt-4 mx-auto">
            <div className="col-lg-9 mt-2 mb-2" style={{ backgroundColor: '#0000A0', color: 'white', width: '900px' }}>

              <h3>Add New User account</h3>
            </div>
            <form className="needs-validation" noValidate>
              

              <table style={{ width: "100%", backgroundColor: '#d7dbdd' }}>
              <center><img src={img7} style={{ width: '200px', height: '200px', marginRight: '80px' }}></img>
                <img src={img9} style={{ width: '200px', height: '200px' }}></img></center>
                <tr>
                  <th><center>


                    <div className="form-group" style={{ marginBottom: '3px' }}>
                      <label style={{ marginleft: '100px', marginBottom: '10px', marginTop: '20px', marginRight: '100px' }}>First_Name :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="First_Name"
                        placeholder="First_Name"
                        value={this.state.First_Name}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginTop: '20px', marginRight: '105px' }}>Last_Name :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Last_Name"
                        placeholder="Last_Name"
                        value={this.state.Last_Name}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '160px' }}>NIC :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="NIC"
                        placeholder="NIC"
                        value={this.state.NIC}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '145px' }}>Email :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Email"
                        placeholder="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '130px' }}>Contact :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Contact"
                        placeholder="Contact"
                        value={this.state.Contact}
                        onChange={this.handleInputChange} />
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '10px', marginRight: '130px' }}>Address :</label>
                      <input type="text" style={{ width: "500px" }}
                        className="form-contorl"
                        name="Address"
                        placeholder="Address"
                        value={this.state.Address}
                        onChange={this.handleInputChange} />
                    </div>


                    <button className="btn btn-success"><a href="/ViewUserAccounts" style={{ textDecoration: 'none', color: 'white', marginTop: '5px' }}>Back</a></button>

                    <button className="btn btn-success" type="submit" style={{ marginTop: '15px', marginLeft: '40px', marginBottom: '20px' }} onClick={this.onSubmit}>
                      <i className="far fa-click-square"></i>
                      &nbsp; Add new user details
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
