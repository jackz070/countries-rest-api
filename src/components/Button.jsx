import React from "react";

const Button = ({ content }) => {
  return (
    <button className="dark:bg-darkPrimary bg-lightPrimary px-2 py-2 min-w-[7rem] font-light shadow-lg dark:hover:brightness-95 hover:brightness-[98%] active:scale-[98%] text-sm">
      {content}
    </button>
  );
};

export default Button;
