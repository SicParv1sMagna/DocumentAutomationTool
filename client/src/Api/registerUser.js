import axios from "axios";

export default function RegisterUser(name, email, password) {
    axios.post("http://localhost:8080/auth/sign-up", {
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
