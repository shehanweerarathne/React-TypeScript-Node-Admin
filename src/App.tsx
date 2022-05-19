import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Users from "./pages/Users/Users";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register/Register";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login/Login";
import UserLogin from "./pages/UserLogin/UserLogin";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="users" element={<Users/>} />
                    <Route path="register" element={<Register/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="ulogin" element={<UserLogin/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
