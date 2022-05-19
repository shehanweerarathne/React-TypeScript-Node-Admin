import axios from 'axios';
import React, {Component, SyntheticEvent} from 'react';
import './Register.css'
import {AdminService} from "../../services/admin.service";
import {environment} from "../../environment/environment";


class Register extends Component {

    password: string = '';
    first_name: string = '';
    last_name: string = '';
    email: string = '';
    password_confirm: string = '';


    submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const formData = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        }
        const response = await axios.post(environment.APIEndpoint + 'register', formData);
        console.log(response.data)
    }

    render() {
        return (
            <form className="form-signin" onSubmit={this.submit}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

                <input type="text" className="form-control" placeholder="First Name" required={true}
                       onChange={e => this.first_name = e.target.value}/>
                <input type="text" className="form-control" placeholder="Last Name" required={true}
                       onChange={e => this.last_name = e.target.value}/>
                <input type="email" className="form-control" placeholder="Email address" required={true}
                       onChange={e => this.email = e.target.value}/>
                <input type="password" className="form-control" placeholder="Password" required={true}
                       onChange={e => this.password = e.target.value}/>
                <input type="password" className="form-control" placeholder="Password Confirm" required={true}
                       onChange={e => this.password_confirm = e.target.value}/>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted">© 2022</p>
            </form>

        );
    }
}

export default Register;
