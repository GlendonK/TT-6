import "./App.css";
import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard.jsx"
import { Login } from "./pages/Login.jsx"

function App() {
  useEffect(() => {
    console.log("Main Page");
  }, []);

  const [name, setName] = useState("");

  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
