import React from "react";
import "./OS.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const OS = () => {

    return (
        <div>
            <SideNavbarDoc />
            <div className="OS">
                <h1>Загрузите документ на проверку</h1>
                <button>Выбрать файл</button>
            </div>
        </div>
    )
}

export default OS;