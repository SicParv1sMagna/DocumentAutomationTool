import { useState } from "react"
import RegisterUser from "../../Api/registerUser"
import ValidateRegistrationForm from "../../Validators/registrationFormValidation";

export const RegistrationForm = () => {
    const [error, setError] = useState("");

    const handleRegistrationSubmit = (e) => {
        e.preventDefault()

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeat-password").value;

        ValidateRegistrationForm(
            name,
            email,
            password,
            repeatPassword,
            setError
        );
        RegisterUser(name, email, password);

        console.log("API call")
    }
    return (
        <div>
            <form onSubmit={handleRegistrationSubmit}>
                <div>
                    <div>
                        <label>Имя</label>
                        <input
                            placeholder="Имя"
                            id="name"
                            type="text"
                            required>
                        </input>
                    </div>
                    <div>
                        <label>Почта</label>
                        <input
                            placeholder="Почта"
                            id="email"
                            type="text"
                            required>
                        </input>
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input
                            placeholder="Пароль"
                            id="password"
                            type="password"
                            required>
                        </input>
                    </div>
                    <div>
                        <label>Повторите пароль</label>
                        <input
                            placeholder="Повторите пароль"
                            id="repeat-password"
                            type="password"
                            required>
                        </input>
                    </div>
                    {error === "" ? (
                        null
                    ) : (
                        <label>{error}</label>
                    )}
                </div>
                <button type="submit">Зарегестрироваться</button>
            </form>
        </div>
    )
}
