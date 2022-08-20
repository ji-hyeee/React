import React from "react"
import logo from './logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--logo" />
            <p>Musicalbnb</p>
        </nav>
    )
}