import React from "react";
import igniteLogo from '../../assets/ignite-logo.svg';
import  './global.css';

export function Header(){
    return (
        <header className="top">
            <div className="header-container">
                <div className="header-content">
                    <img src={igniteLogo} alt="ignite" />
                </div>
                <div className="header-content">
                    <p>Ignite Feed</p>
                </div>
            </div>
        </header>
    )
}