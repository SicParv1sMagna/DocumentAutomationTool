import RegisterUser from "../../Api/registerUser"

export const RegistrationForm = () => {
    const handleRegistrationSubmit = (e) => {
        e.preventDefault()

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log(name, email, password);

        RegisterUser(name, email, password);

        console.log("API call")
    }
    return (
        <div>
            <form onSubmit={handleRegistrationSubmit}>
                <div>
                    <input placeholder="Имя" id="name" type="text"></input>
                    <input placeholder="Почта" id="email" type="text"></input>
                    <input placeholder="Пароль" id="password" type="password"></input>
                    <input placeholder="Повторите пароль" type="password"></input>
                </div>
                <button type="submit">Зарегестрироваться</button>
            </form>
        </div>
    )
}
