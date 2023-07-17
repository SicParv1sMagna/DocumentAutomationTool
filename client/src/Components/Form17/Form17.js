import React from "react";
import "./Form17.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const Form17 = () => {

    return (
        <div>
            <SideNavbarDoc />
            <div className="Form17">
                <h1>Загрузите документ на проверку</h1>
                <button>Выбрать файл</button>
            </div>
        </div>
    )
}

export default Form17;