import React, { useState, useRef, useEffect } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const pageListWrap = useRef(null);
  const pageWrap = useRef(null);

  useEffect(() => {
    const linksHeight = pageWrap.current.clientHeight;
    console.log(linksHeight);

    if (showNav) {
      pageListWrap.current.style.height = `${linksHeight}px`;
    } else {
      pageListWrap.current.style.height = "0px";
    }
  }, [showNav]);

  return (
    <nav>
      <div>
        <div className="nav-header">
          <span>iCON</span>
          <button className="nav-toggle" onClick={() => setShowNav(!showNav)}>
            <AiOutlineAlignLeft />
          </button>
        </div>
        <div ref={pageListWrap} className="links-container">
          <ul ref={pageWrap} className="list">
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
