import axios from "axios";
import { URL } from "../config/config";

export default function RegisterUser(name, email, password) {
    axios.post(`${URL}/auth/sign-up`, {
        name: name,
        email: email,
        password: password,
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
}