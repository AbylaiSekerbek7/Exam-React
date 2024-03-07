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
          <li className="dropdown"><a href="#">Functions &nbsp;<i className="fa fa-caret-down"></i></a>
            <div className="dd">
              <div id="up_arrow"></div>
            <ul>
              <li><Link to={"/add"}>Add Book</Link></li>
              <li><Link to={""}>Something...</Link></li>
            </ul>
            </div>
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
