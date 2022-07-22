import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "./Page";
import Axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createAdmin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("appToken"))
  );
  async function handleSubmit(e) {
    console.log("createuser attempt");
    e.preventDefault();
    try {
      const response = await Axios.post("/createuser", {
        username: username,
        password: password,
        email: email,
        createAdmin: createAdmin,
      });
      if (response.data.success == "true") {
        console.log(response.data.result == success);

        console.log("User Created Successfully");
      } else {
        console.log("Error occured.");
        console.log(response.data.error);
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }
  const handleOnChange = () => {
    setAdmin(!createAdmin);
  };

  return (
    <Page title="Create User" loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
      {localStorage.isAdmin == 1 ? (
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <div  >
        <label>
          Username:
          <input onChange={e => setUsername(e.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autoComplete="off" required={true} />
          
        </label>
        <label>
            Password:
            <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="password" autoComplete="off" required={true} />

        </label>
        <label>
            Email:
            <input onChange={e => setEmail(e.target.value)} name="email" className="form-control form-control-sm input-dark" type="text" placeholder="Email" autoComplete="off"  />

        </label>
        <p>
        <label>
            Create As Admin:
            <input onChange={handleOnChange} checked={createAdmin} name="createAdmin" className="form-control form-control-sm input-dark" type="checkbox" />

        </label>
        </p>
        </div>
        <button className="btn btn-success btn-sm">Create user</button>
        
=======
          <div>
            <label>
              Username:
              <input
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                className="form-control form-control-sm input-dark"
                type="text"
                placeholder="Username"
                autoComplete="off"
                required={true}
              />
            </label>
            <label>
              Password:
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="form-control form-control-sm input-dark"
                type="password"
                placeholder="password"
                autoComplete="off"
                required={true}
              />
            </label>
            <label>
              Email:
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                className="form-control form-control-sm input-dark"
                type="text"
                placeholder="Email"
                autoComplete="off"
              />
            </label>
            <p>
              <label>
                Create As Admin:
                <input
                  onChange={handleOnChange}
                  checked={createAdmin}
                  name="createAdmin"
                  className="form-control form-control-sm input-dark"
                  type="checkbox"
                />
              </label>
            </p>
          </div>
          <button className="btn btn-success btn-sm">create user</button>
>>>>>>> f126b963da0754b6c972a59369927357d3d9f3c5
        </form>
      ) : (
        <p className="lead text-muted text-center">
          You are not authorised to view this page
        </p>
      )}
    </Page>
  );
}

export default CreateUser;
