import {BrowserRouter} from "react-router-dom";
import axios from "axios";
import {environment} from "../environment/environment";
import {Observable} from 'rxjs';


export class AdminService {
    baseUrl: string = '';

    constructor(
        private http = axios
    ) {
        this.baseUrl = environment.APIEndpoint;
    }

    async CustomerSignUp(model: object) {
        return await axios.post(this.baseUrl + 'register', model)
    }
}
