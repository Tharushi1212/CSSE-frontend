import React, { Component } from "react";
import axios from "axios";
import img10 from './Images/10.jpg';

export default class CusViewTimeTables extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        console.log("executed component");
        this.retrievePosts();
    }

    retrievePosts() {
        axios
            .get("http://localhost:8080/timetables/getAllTimeTables")
            .then((res) => {
                console.log("data", res.data);
                this.setState({
                    posts: res.data,
                });
            });
    }

    onDelete = (finalid) => {
        axios
            .delete(
                `http://localhost:8080/timetables/RemoveTimeTable/${finalid}`
            )
            .then((res) => {
                alert("Delete Successfully");
                this.retrievePosts();
            });
    };

    filterData(posts, searchKey) {
        console.log(posts);
        const result = posts.filter(
            (post) =>
                post.Bus_ID.toLowerCase().includes(searchKey) ||
                post.Route.toLowerCase().includes(searchKey)
        );
        this.setState({ posts: result });
    }

    handleSearchArea = async (e) => {
        const searchKey = e.currentTarget.value;
        await axios
            .get("http://localhost:8080/timetables/getAllTimeTables")
            .then((res) => {
                console.log("data", res.data);
                this.filterData(res.data, searchKey);
            });
    };

    render() {
        return (
            <div>
                <center>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                    <b><a className="nav-link active" aria-current="page" href="/CusViewTimeTables"><h5>View Bus Time Table</h5></a></b>
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
                                    <b><a className="nav-link" href="/"><h5>Online Seat Booking</h5></a></b>
                                </li>
                                <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>
                            </ul>


                        </div>

                    </nav></center>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-9 mt-2 mb-2"
                            style={{ backgroundColor: "#0000A0", color: "white" }}
                        >
                            <h3>All Time Table Details</h3>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search (Bus ID / Route)"
                                name="searchQuery"
                                onChange={this.handleSearchArea}
                            ></input>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th Scope="col">#</th>
                                <th Scope="col">Bus ID</th>
                                <th Scope="col">Route</th>
                                <th Scope="col">Start Time</th>
                                <th Scope="col">End Time</th>
                                <th Scope="col">Bus Number</th>

                            </tr>
                        </thead>
                        {/* Bus_ID,Route,Start_Time,End_Time,Bus_Number */}
                        <tbody>
                            {this.state.posts.map((post, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.Bus_ID}</td>
                                    <td>{post.Route}</td>
                                    <td>{post.Start_Time}</td>
                                    <td>{post.End_Time}</td>
                                    <td>{post.Bus_Number}</td>

                                </tr>

                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}
