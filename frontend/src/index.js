import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
    return(
        <div className="container-fluid bg-secondary py-5">
            <Login/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
