import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Axios from "axios"
//replace url
Axios.defaults.baseURL = "http://localhost:8080"

// My Components
import Header from "./components/Header"
import Home from "./components/Home"
import Front from "./components/Front"
import CreateUser from "./components/CreateUser"
import DisplayUsers from "./components/DisplayUsers"
function Main() {

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("appToken")))

 // const [flashMessages, setFlashMessages] = useState([])
/*
  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg))
  }
*/
  return (
    <BrowserRouter>

      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <Front />} />
        <Route path="/createuser" element ={<CreateUser />} />
        <Route path="/allusers" element = {<DisplayUsers/>}/>
      
      </Routes>

    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}