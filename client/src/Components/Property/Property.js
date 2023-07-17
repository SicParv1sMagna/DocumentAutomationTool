import React from "react";
import "./Property.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const Property = () => {

    return (
        <div>
            <SideNavbarDoc />
            <div className="Property">
                <h1>Загрузите документ на проверку</h1>
                <button>Выбрать файл</button>
            </div>
        </div>
    )
}

export default Property;