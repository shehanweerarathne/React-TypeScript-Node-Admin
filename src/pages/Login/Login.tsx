import React, {Component, SyntheticEvent} from 'react';
import './Login.css'
import axios from "axios";
import {environment} from "../../environment/environment";
import jwt_decode, { JwtPayload } from 'jwt-decode';

class Login extends Component {

    password: string = '';
    email: string = '';


    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const formData = {
            email: this.email,
            password: this.password
        }
        const response = await axios.post(environment.APIEndpoint + 'login', formData);
        localStorage.setItem('ip_token', response.data.token);
        const decodedToken =  jwt_decode<JwtPayload>(response.data.token)
        // @ts-ignore
        console.log(decodedToken.id)
        // @ts-ignore
        localStorage.setItem('user_id', jwt_decode(response.data.token).id);
    }


    render() {
        return (
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                 className="img-fluid" alt="Sample image"/>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={this.submit}>
                                <div className="form-outline mb-4">
                                    <input type="email" className="form-control form-control-lg"
                                           placeholder="Enter a valid email address" required={true}
                                           onChange={e => this.email = e.target.value}/>
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-3">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Enter password" required={true}
                                           onChange={e => this.password = e.target.value}/>
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a
                                        href="register" className="link-danger">Register</a>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;
