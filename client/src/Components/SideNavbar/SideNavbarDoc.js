import { useState, useEffect } from "react";
import React from "react";
import "./SideNavbar.css"
import { Link } from "react-router-dom";
import Active from "../../Store/store.js";
import { observer } from "mobx-react-lite";
import ChooseForm from "../Chooseform/ChooseForm";

const SideNavbarDoc = observer(() => {
    // const AStatement = () => {
    //     Active.ActiveStatement();
    // }
    const statement = "default_side";
    const form = "default_side";
    const os = "default_side";
    const psi = "default_side";
    const property = "default_side";


    return (
        <div className="sideNav">
            <Link to="/statement" className={statement}>ЗАЯВЛЕНИЕ</Link>
            <Link to="/form17" className={form}>ФОРМА 17</Link>
            <Link to="/os" className={os}>ОС</Link>
            <Link to="/psi" className={psi}>ПСИ</Link>
            <Link to="/property" className={property}>ДОКУМЕНТЫ НА СОБСТВЕННОСТЬ</Link>
        </div>
    )
});

export default SideNavbarDoc;