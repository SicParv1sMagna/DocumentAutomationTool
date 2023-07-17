import React from "react";
import "./PSI.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const PSI = () => {

    return (
        <div>
            <SideNavbarDoc />
            <div className="PSI">
                <h1>Загрузите документ на проверку</h1>
                <button>Выбрать файл</button>
            </div>
        </div>
    )
}

export default PSI;