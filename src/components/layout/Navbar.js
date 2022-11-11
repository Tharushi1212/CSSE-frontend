import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../../assets/logo1.png";

const Navbar = () => {
  const navigate = useNavigate();

  let userRole = localStorage.getItem("userRole");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <img src={Login} alt="" width="280" height="50" />
          </a>

          <div className="container-fluid">
            <></>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "customer" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/AddUserAccount"
                    aria-current="page"
                  >
                    Online Seat Booking{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "customer" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/CusViewTimeTables"
                    aria-current="page"
                  >
                    {" "}
                    Time Tables
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "customer" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/AddUserAccount"
                    aria-current="page"
                  >
                    Create Accounts{" "}
                  </a>
                </li>

               
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/AddTimeTables"
                    aria-current="page"
                  >
                    {" "}
                    Create Time Tables{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/ViewUserAccounts"
                    aria-current="page"
                  >
                    {" "}
                    All User Accounts
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    style={{
                      display: userRole == "admin" ? "flex" : "none",
                      textDecoration: "none",
                    }}
                    class="nav-link"
                    href="/ViewUserAccounts"
                    aria-current="page"
                  >
                    {" "}
                    All Seat Booking Details
                  </a>
                </li>
                
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="btn btn-secondary toggle"
            aria-haspopup="true"
            aria-expanded="false"
            type="submit"
            style={{
              float: "right",
              marginRight: "10px",
              display: userRole ? "flex" : "none",
            }}
          >
            {"Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
