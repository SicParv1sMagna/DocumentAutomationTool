import LoginUser from "../../Api/loginUser";

export const LoginForm = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        LoginUser(email, password);

        console.log("API call");
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <input placeholder="Email" id="email" type="text"></input>
                    <input placeholder="Password" id="password" type="password"></input>
                </div>
                <button type="submit">Авторизоваться</button>
            </form>
        </div>
    )
}
