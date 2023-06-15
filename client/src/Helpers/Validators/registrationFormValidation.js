const emptyFieldsErr = "Заполните все поля.";
const invalidEmailErr = "Введите валидный адрес почты.";
const invalidPasswordErr = "Пароль должен содержать цифры и хотя бы одну заглавную букву";
const invalidComparePasswordsErr = "Пароли должны совпадать.";

export default function ValidateRegistrationForm(name, email, password, repeatPassword, setError) {
    if (name === "" || email === "" || password === "" || repeatPassword === "") {
        setError(emptyFieldsErr);
        return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setError(invalidEmailErr);
        return;
    }

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/.test(password)) {
        setError(invalidPasswordErr);
    }

    if (password !== repeatPassword) {
        setError(invalidComparePasswordsErr);
        return;
    }

    setError("");
}