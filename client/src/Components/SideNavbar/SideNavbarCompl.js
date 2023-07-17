import { useState, useEffect } from "react";
import React from "react";
import "./SideNavbar.css"
import { Link } from "react-router-dom";
const SideNavbarCompl = () => {
    const [statement, setStatement] = useState("default");
    const [form, setForm] = useState("default");
    const [os, setOs] = useState("default");
    const [psi, setPsi] = useState("default");
    const [property, setProperty] = useState("default");

    const ActiveStatement = () => {
        setStatement("active");
        setForm("default");
        setOs("default");
        setPsi("default");
        setProperty("default");
    }
    const ActiveForm = () => {
        setStatement("default");
        setForm("active");
        setOs("default");
        setPsi("default");
        setProperty("default");
    }
    const ActiveOs = () => {
        setStatement("default");
        setForm("default");
        setOs("active");
        setPsi("default");
        setProperty("default");
    }
    const ActivePsi = () => {
        setStatement("default");
        setForm("default");
        setOs("default");
        setPsi("active");
        setProperty("default");
    }
    const ActiveProperty = () => {
        setStatement("default");
        setForm("default");
        setOs("default");
        setPsi("default");
        setProperty("active");
    }

    return (
        <div className="sideNav">
            <Link to="/statement" className={statement} onClick={ActiveStatement}>ЗАЯВЛЕНИЕ</Link>
            <Link to="/form17" className={form} onClick={ActiveForm}>ФОРМА 17</Link>
            <Link to="/os" className={os} onClick={ActiveOs}>ОС</Link>
            <Link to="/psi" className={psi} onClick={ActivePsi}>ПСИ</Link>
            <Link to="/property" className={property} onClick={ActiveProperty}>ДОКУМЕНТЫ НА СОБСТВЕННОСТЬ</Link>
        </div>
    )
}

export default SideNavbarCompl;