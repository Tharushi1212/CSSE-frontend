import React, { Component } from 'react';
import axios from 'axios';
import img1 from './Images/1.png';
import img3 from './Images/3.png';

export default class HomePage extends Component {


  render() {
    return (
      <div>
        <center>
          <center><h1 style={{ color: '#FF0000' }}>...Welcome To Ticketing System for Public Transport Network...</h1></center>
          <h3>The Best Public Transport Network</h3>
          <h5></h5>
          <img src={img1} style={{ width: '1100px', height: '350px' }}></img>



          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <center>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"><center>
                  <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px', marginLeft: '380px', marginTop: '10px', width: '300px', marginBottom: '10px' }}>
                    <b><a className="nav-link active" aria-current="page" href="/login"><h5>Login here as an admin</h5></a></b>
                  </li></center><center>
                    <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px', marginLeft: '150px', marginTop: '10px', width: '300px', marginBottom: '10px' }}>
                      <b><a className="nav-link active" aria-current="page" href="/register"><h5>Login here as a passenger</h5></a></b>
                    </li></center>


                </ul>
              </div>
            </center>
          </nav>

          <img src={img3} style={{ width: '800px', height: '350px' }}></img>

        </center>
      </div>


    )
  }
}
