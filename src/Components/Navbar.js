import { useState } from "react"

export default function Navbar() {

    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div className="navbar container">
            <a  className="logo" href="#!">R<span>e</span>d C<span>aff</span>ino</a>
            <div className="nav-links">
                <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
            </div>
            <div onClick={()=>{setShowSideBar(!showSideBar)}} className={showSideBar?"sideBar-btn active":"sideBar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

            </div>
        </div>
    )
}
