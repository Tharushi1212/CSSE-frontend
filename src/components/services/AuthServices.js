import axios from "axios";

let RegisterURL = "http://localhost:8080/user/signup";
let LoginURL = "http://localhost:8080/user/signin";
let AuthURL = "http://localhost:8080/user/auth";
let getAllUsers = "http://localhost:8080/user/getAllUsers";
let CreateUser = "http://localhost:8080/user/createUser";
let UpdateUser = "http://localhost:8080/user/updateUserById/";
let DeleteUser = "http://localhost:8080/user/deleteUser/";
let GetUserByIDUrl = "http://localhost:8080/user/getUserById/";

export async function RegisterStudent(data) {
  const alldata = {
    Fullname: data.Fullname,
    pNumber: data.pNumber,
    email: data.email,
    password: data.password,
    userRole: "customer",
  };

  return await axios.post(RegisterURL, alldata);
}

export async function registeradmin(data) {
  const alldata = {
    Fullname: data.Fullname,
    pNumber: data.pNumber,
    email: data.email,
    password: data.password,
    userRole: "admin",
  };

  return await axios.post(RegisterURL, alldata);
}

export async function LoginCustomer(data) {
  const alldata = {
    email: data.email,
    password: data.password,
  };

   
  let result;
  await axios.post(LoginURL, alldata)
     .then(function(data) {
         //console.log("success data",data)
         result = data;
     })
     .catch(function (error) {
         if (error.response) {
           //console.log(error.response.data);
           result = error.response;
           
         } else if (error.request) {
           //console.log(error.request);
           result = error.request;
         } 
     
       });
  return result;
}

export async function AuthCustomer(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios.get(AuthURL, config);
}

export async function GetallUsers() {
  return axios.get(getAllUsers);
}

export async function CreateAdmin(data) {
  const alldata = {
    Fullname: data.Fullname,
    email: data.email,
    pNumber: data.pNumber,
    password: data.password,
    userRole: data.userRole,
  };

  return await axios.post(CreateUser, alldata);
}

export async function UpdateAdmin(id, data) {
  const alldata = {
    Fullname: data.Fullname,
    pNumber: data.pNumber,
    email: data.email,
    password: data.password,
    userRole: data.userRole,
  };

  return await axios.patch(UpdateUser + id, alldata);
}

export async function DeleteAdmin(id) {
  return await axios.delete(DeleteUser + id);
}

export async function GetUserByID(id) {
  return await axios.get(GetUserByIDUrl + id);
}
