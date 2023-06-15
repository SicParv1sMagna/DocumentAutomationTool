import { useState } from "react";

import LoginUser from "../../Api/loginUser";
import ValidateLoginForm from "../../Helpers/Validators/loginFormValidation";


export const LoginForm = () => {
    const [error, setError] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        ValidateLoginForm(email, password, setError);
        LoginUser(email, password);
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <div>
                        <label>Почта</label>
                        <input placeholder="Email" id="email" type="text"></input>
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input placeholder="Password" id="password" type="password"></input>
                    </div>
                        {error === "" ? (
                            null
                        ) : (
                            <label>{error}</label>
                        )
                        }
                </div>
                <button type="submit">Авторизоваться</button>
            </form>
        </div>
    )
}
