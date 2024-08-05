import React from "react";


export default function Navbar(props) {
    return(
        <nav className={props.darkMode ? "dark": ""}>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            <img src="/images/shubham-logo.png" className="logo"alt="my-logo"/>
            <h1>MY TRAVEL JOURNAL</h1>
        </nav>
    )
}