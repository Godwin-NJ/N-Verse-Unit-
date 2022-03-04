import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import { SiHackaday } from "react-icons/si";

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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Staff</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
