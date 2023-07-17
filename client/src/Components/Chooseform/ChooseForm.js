import React from "react";
import "./ChooseForm.css";
import { useState } from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";

const ChooseForm = () => {

    return (
        <div className="CF">
            <SideNavbarDoc />
            <div className="diffForm">
                <h1>Выберите форму заявления</h1>
                <div className="ChooseBtn">
                    <div><a href="#"><button>Форма 3В</button></a></div>
                    <div><a href="#"><button>Форма 4Б</button></a></div>
                    <div><a href="#"><button>Форма 4В</button></a></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseForm;