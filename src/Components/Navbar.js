import { Link, useLocation } from "react-router-dom";
import { faCog, faHome, faList } from "@fortawesome/free-solid-svg-icons";

import SideBar from "./SideBar";
import { useState } from "react";

export default function Navbar() {

    const [showSideBar, setShowSideBar] = useState(false);
    const links=[{
        name:"Home",
        path:"/",
        icon: faHome,
    },
    {
        name:"Recipes",
        path:"/recipes",
        icon: faList,
    },{
        name:"Settings",
        path:"/settings",
        icon:faCog,
    }]
    function closeSideBar(){
        setShowSideBar(false);
    }
    const location=useLocation();
    return (
        <>
            <div className="navbar container">
            <Link to={"/"}  className="logo" href="#!">R<span>e</span>d C<span>aff</span>ino</Link>
            <div className="nav-links">
                {links.map((link)=>
                    <Link className={location.pathname===link.path?"active":" "} to={link.path} key={link.name}>{link.name}</Link>
                )}
            </div>
            <div onClick={()=>{setShowSideBar(!showSideBar)}} className={showSideBar?"sideBar-btn active":"sideBar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>

            </div>
        </div>
        { 
            showSideBar && <SideBar close={closeSideBar} links={links}/>
        }
        </>
    )
}
