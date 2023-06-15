const emptyFieldsErr = "Заполните все поля.";
const invalidEmailErr = "Введите валидный адрес почты."

export default function ValidateLoginForm(email, password, setError) {
    if (email === "" || password === "") {
        setError(emptyFieldsErr);
        return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setError(invalidEmailErr);
        return;
    }

    setError("");
}
