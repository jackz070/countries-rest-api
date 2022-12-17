import React from "react";
import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <header className="flex items-center justify-between sm:h-16 h-24 dark:bg-darkPrimary bg-white shadow-md py-5 sm:px-12 px-4">
      <Link to="/" className="font-extrabold text-lg">
        Where in the world?
      </Link>
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
