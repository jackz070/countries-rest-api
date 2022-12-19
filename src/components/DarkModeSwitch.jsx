import React from "react";

import { BsMoon, BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = React.useState(localStorage.theme === "dark");

  const handleChange = () => {
    console.log("changed");
    if (darkMode) {
      setDarkMode(false);
      localStorage.theme = "light";
      setTimeout(() => {
        document.body.classList.remove("dark");
      }, 170);
    } else {
      setDarkMode(true);
      localStorage.theme = "dark";
      setTimeout(() => {
        document.body.classList.add("dark");
      }, 170);
    }
  };

  return (
    <div className="flex items-center justify-between w-fit h-fit z-[20000]">
      <label className=" flex items-center text-xs relative overflow-hidden">
        <input
          type="checkbox"
          className="absolute left-1/2 -translate-x-1/2 w-fit h-fit peer appearance-none rounded-md "
          checked={darkMode}
          onChange={handleChange}
        />
        {darkMode ? <BsFillMoonFill id="moon-filled" /> : <BsMoon id="moon" />}
        <span className="ml-2">Dark mode</span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
