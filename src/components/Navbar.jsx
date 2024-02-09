import { useState } from "react";
import logo from "../components/images/logo.png"

function Navbar () {


    return (
        <div className="navbar">
            <img className="logo-image" src={logo} alt="" />
            <h2>App Name</h2>
        </div>
    )
}

export default Navbar