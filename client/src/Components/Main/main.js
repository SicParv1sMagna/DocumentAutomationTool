import React, { useState } from "react";
import './main.css'

const Main = () => {

    return (
        <div className="containerMain">
            <div className="privet">
                <p>
                    Данная программа создана для
                    автоматизированной проверки одного документа
                    или целого комлекта.

                </p>
            </div>
            <div className="grid2">
                <div className="LogIn">
                    <p>
                        Для продолжения войдите в
                        свой аккаунт
                    </p>
                    <form className='Form'>
                        <input className='Pole' type="text" name="name" placeholder="Логин" id="name" required />
                        <input type="text" name="name" placeholder="Пароль" id="name" required />
                        <p>Неверный логин или пароль</p>
                        <button type="submit">Войти</button>
                    </form>
                    <div className="registration">
                        <button>Зарегистрироваться</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;