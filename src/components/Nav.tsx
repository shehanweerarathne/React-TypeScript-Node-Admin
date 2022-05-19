import React, {useEffect, useState} from "react";
import axios from 'axios';
import {environment} from "../environment/environment";
import {Authorization} from "../util/Authorization";
import {Navigate} from "react-router-dom";
import {async} from "rxjs";

const authorization = new Authorization();
let data;

const Nav = ()=>{
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const instance = axios.create({
            baseURL: environment.APIEndpoint,
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ authorization.getTokenFromLocalStorage()}
        });
        instance.get('user',{
            params:localStorage.getItem("user_id")
        })
            .then(response => {
                data = response.data
                console.log(data)
            })

    },[]);

    const Logout = () =>{
        // remove user from local storage to log user out
        localStorage.removeItem('ip_token');
        localStorage.removeItem('user_id');
        window.location.href = '/ulogin';
    }

    return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search"
                       aria-label="Search"/>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <button className="nav-link px-3" onClick={Logout}>Sign out</button>
                    </div>
                </div>
            </header>
        )
}
export default Nav;
