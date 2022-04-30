import React, { useState} from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <Link to="./" className="navbar__logo">
          TRVL <i className="fa fa-plane"></i>
        </Link>

        <div className="nav__links">
          <div className="menu-icon">
            <i
              className={click ? `fa fa-times` : `fa fa-bars`}
              onClick={handleClick}
            ></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" className="nav__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav__link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
