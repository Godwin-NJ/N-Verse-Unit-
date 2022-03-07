import React, { Fragment } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { useGlobalContext } from "../context";

const Home = () => {
  const { openSideBar } = useGlobalContext();
  return (
    <Fragment>
      <section className="home-landing">
        <button className="bar-toggle" onClick={openSideBar}>
          <AiOutlineAlignLeft />
        </button>
        {/* <div className="home-body"><h2>home body</h2></div> */}
      </section>
    </Fragment>
  );
};

export default Home;
