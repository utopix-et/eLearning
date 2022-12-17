import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

import { Routes, Route, BrowserRouter } from "react-router-dom";

require('jquery')
require('bootstrap')

function App() {
    return(
        <div className="container-fluid bg-light">
            <Navbar/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
