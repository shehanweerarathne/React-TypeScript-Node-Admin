import React, {SyntheticEvent, useState} from 'react';
import axios from "axios";
import {environment} from "../../environment/environment";
import jwt_decode, {JwtPayload} from "jwt-decode";
import {Navigate} from "react-router-dom";

const UserLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const {data} = await axios.post(environment.APIEndpoint + 'login', {
          email,password
      },{withCredentials:true});
      console.log(data)
        localStorage.setItem('ip_token', data.token);
        // @ts-ignore
        localStorage.setItem('user_id', jwt_decode(data.token).id);
        setRedirect(true)
    }
    if(redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
            <input type="email" className="form-control" placeholder="Email address" required={true} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" className="form-control" placeholder="Password" required={true} onChange={e=>setPassword(e.target.value)}/>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
            <p className="mt-5 mb-3 text-muted">© 2022</p>
        </form>
    );
};

export default UserLogin;
