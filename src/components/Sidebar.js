import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { SiHackaday } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { closeSideBar, isSidebarOpen } = useGlobalContext();

  return (
    <nav className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div>
        <div className="nav-header">
          <span>iCON</span>
          <button className="nav-toggle" onClick={closeSideBar}>
            <SiHackaday />
          </button>
        </div>
        <div>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
