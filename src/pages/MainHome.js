import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const MainHome = () => {
  const [isloading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isloading]);

  if (isloading) return <Loading />;
  return (
    <section className="main-home">
      <h2>Done Loading</h2>
    </section>
  );
};

export default MainHome;
