import axios from "axios";

export default function LoginUser(email, password) {
    axios.post("http://localhost:8080/auth/sign-in", {
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