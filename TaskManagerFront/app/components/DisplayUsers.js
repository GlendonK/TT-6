import React, { useEffect, useState } from "react";
import Page from "./Page";
import Axios from "axios";

function DisplayUsers() {
  const [result, setResult] = useState([]);
  useEffect(async () => {
    try {
      const response = await Axios.get("/displayusers");
      if (response.data) {
        setResult(response.data);
        console.log(response.data);
        //console.log(localStorage.isAdmin);
      } else {
        console.log("no response.");
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }, []);
  return (
    <Page title="Users">
      <div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Username</th>
              <th>Email</th>
              <th>Groups</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, i) => (
              <tr key={item.Username}>
                <td>{i + 1}</td>
                <td>{item.Username}</td>
                <td>{item.Email}</td>
                <td>{item.userGroups}</td>
                <td>{item.isAdmin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="lead text-muted text-center">Please Log In</p>
    </Page>
  );
}

export default DisplayUsers;
