import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Roadmap from "./pages/Roadmap";

require('jquery')
require('bootstrap')

function App() {
    return(
        <div className="container-fluid bg-light">
            <Navbar/>
            <Roadmap/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
