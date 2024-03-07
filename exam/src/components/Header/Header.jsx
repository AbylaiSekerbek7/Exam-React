import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div id="container">
      <nav>
        <div id="logo"><Link to={"/"}>Books</Link></div>
        <ul>
          <li>
              <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
              <Link to={"/contacts"}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
