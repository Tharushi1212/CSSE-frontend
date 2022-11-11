import React, { Component } from "react";
import axios from "axios";

export default class AdminViewUserAccounts extends Component {
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
            .get("http://localhost:8080/useraccount/getAllUserAccount")
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
                `http://localhost:8080/useraccount/RemoveUserAccount/${finalid}`
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
                post.First_Name.toLowerCase().includes(searchKey) ||
                post.NIC.toLowerCase().includes(searchKey)
        );
        this.setState({ posts: result });
    }

    handleSearchArea = async (e) => {
        const searchKey = e.currentTarget.value;
        await axios
            .get("http://localhost:8080/useraccount/getAllUserAccount")
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
                                <b><a className="nav-link" aria-current="page" href="/ViewTimeTables"><h5>View All Time Tables</h5></a></b>
                            </li>
                            <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                <b><a className="nav-link" aria-current="page" href="/AddTimeTables"><h5>Add New Time Table</h5></a></b>
                            </li>
                            <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                <b><a className="nav-link" href="/ViewTimeTables"><h5>Update Time Table Details</h5></a></b>
                            </li>
                            <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                <b><a className="nav-link" href="/ViewTimeTables"><h5>Delete Time Table Details</h5></a></b>
                            </li>
                            <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                <b><a className="nav-link active" href="/AdminViewUserAccounts"><h5>View All User Accounts</h5></a></b>
                            </li>
                            <li className="nav-item" style={{ backgroundColor: '#C0C0C0', color: 'black', marginRight: '5px' }}>
                                <b><a className="nav-link" href="/veiwBookings"><h5>View Seat Booking Details</h5></a></b>
                            </li>
                            <button className="btn btn-success"><a href="/HomePage" style={{ textDecoration: 'none', color: 'white' }}>Log Out</a></button>

                        </ul>


                    </div>

                </nav>
                </center>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-9 mt-2 mb-2"
                            style={{ backgroundColor: "#0000A0", color: "white" }}
                        >
                            <h3>All User Account Details</h3>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search (First_Name / NIC)"
                                name="searchQuery"
                                onChange={this.handleSearchArea}
                            ></input>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th Scope="col">#</th>
                                <th Scope="col">First_Name</th>
                                <th Scope="col">Last_Name</th>
                                <th Scope="col">NIC</th>
                                <th Scope="col">Email</th>
                                <th Scope="col">Contact</th>
                                <th Scope="col">Address</th>

                            </tr>
                        </thead>

                        <tbody>
                            {this.state.posts.map((post, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{post.First_Name}</td>
                                    <td>{post.Last_Name}</td>
                                    <td>{post.NIC}</td>
                                    <td>{post.Email}</td>
                                    <td>{post.Contact}</td>
                                    <td>{post.Address}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
