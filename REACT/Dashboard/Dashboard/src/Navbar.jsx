import React from "react"

export default function Navbar() {
    return (

        <nav className="nav-container">
                <img className="logo" src="/TestLogo.svg" />
            <div className="nav-center">
                <span id='nav-span' ><img src="/home.png" />OverView</span>
                <span id='nav-span' ><img src="/group.png" />Patients</span>
                <span id='nav-span'><img src="/calenda.png" />Schedule</span>
                <span id='nav-span' ><img src="/chatbubble.png" />Message</span>
                <span id='nav-span'><img src="/creditcard.png" />Transactions</span>
            </div>
            <div className="nav-right">
            <img className="dr-logo" src="/senior-woman.png" />
            <p>Dr.Jose Simmons<br />Genral Practioner</p>
            </div>
            <img className="setting-logo" src="/setting.png" alt="setting" />
            </nav>
    )
}