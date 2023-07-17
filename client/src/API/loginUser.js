import axios from "axios";
import { URL } from "../config/config";

export default function LoginUser(email, password) {
    axios.post(`${URL}/auth/sign-in`, {
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