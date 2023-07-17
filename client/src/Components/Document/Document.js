import React from "react";
import SideNavbarDoc from "../SideNavbar/SideNavbarDoc";
import "./Document.css";
import Active from "../../Store/store";
import ChooseForm from "../Chooseform/ChooseForm";
import { observer } from "mobx-react-lite";

const Document = () => {

    return (
        <div className="document">
            <SideNavbarDoc />
            <h1>Выберите документ</h1>
            {Active.statement === "active" ?
            console.log("asd") :
            null}
        </div>
    )
}

export default Document;