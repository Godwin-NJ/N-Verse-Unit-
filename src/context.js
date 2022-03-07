import React, { useState, useEffect, useContext } from "react";
import { employee } from "./Data/staff";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [staff, setStaff] = useState(employee);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };
  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ openSideBar, closeSideBar, isSidebarOpen, staff }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
