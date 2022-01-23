import { Link, useLocation } from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';

function SideBar({links,close}) {
  const location=useLocation();
  return <div className='sidebar' onClick={close}>
    {links.map((link)=>
                    <Link to={link.path} className={location.pathname===link.path?"sidebar-links active":"sidebar-links"} key={link.name}>
                    <FontAwesomeIcon icon={link.icon}/>
                    {link.name}
                    </Link>
                )}
  </div>;
}

export default SideBar;
