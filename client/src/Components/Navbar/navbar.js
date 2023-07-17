import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {

    const [doc, setDoc] = useState("default");
    const [compl, setCompl] = useState("default");
    const [etDoc, setEtDoc] = useState("default");
    const [regl, setRegl] = useState("default");

    const ActiveDoc = () => {
        setDoc("actives");
        setCompl("default");
        setEtDoc("default");
        setRegl("default");
    }

    const ActiveCompl = () => {
        setDoc("default");
        setCompl("actives");
        setEtDoc("default");
        setRegl("default");
    }

    const ActiveEtDoc = () => {
        setDoc("default");
        setCompl("default");
        setEtDoc("actives");
        setRegl("default");
    }

    const ActiveRegl = () => {
        setDoc("default");
        setCompl("default");
        setEtDoc("default");
        setRegl("actives");
    }

    return (
        <div className='navbar'>
            <div className='title'>
                <a href='/'>GTA</a>
            </div>
            <div className='Menu'>
                <div className="item">
                    <Link to="/document" className={doc} onClick={ActiveDoc}>ПРОВЕРКА ДОКУМЕНТА</Link>
                </div>
                <div className='item'>
                    <Link to="/complect" className={compl} onClick={ActiveCompl}>ПРОВЕРКА КОМПЛЕКТА</Link>
                </div>
                <div className='item'>
                    <Link to="/etDocument" className={etDoc} onClick={ActiveEtDoc}>ЭТАЛОННЫЙ ДОКУМЕНТ</Link>
                </div>
                <div className='item'>
                    <Link to="/reglament" className={regl} onClick={ActiveRegl}>РЕГЛАМЕНТ</Link>
                </div>
            </div>
            <div className='LogOut'>
                <button>Выйти</button>
            </div>
        </div>
    );
}

export default Navbar;