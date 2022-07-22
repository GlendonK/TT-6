import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function HeaderLoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false);
    localStorage.removeItem("appToken");
    localStorage.removeItem("Username");
    useNavigate;
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <Link className="btn btn-sm btn-success mr-2" to="/editprofile">
        Edit Profile
      </Link>
      <Link className="btn btn-sm btn-success mr-2" to="/createuser">
        Create User
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
