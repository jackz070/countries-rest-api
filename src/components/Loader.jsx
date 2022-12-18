import React from "react";

export const Loader = () => {
  return (
    <div class="w-full min-h-screen flex justify-center items-center bg-transparent">
      <div class="flex min-h-screen w-full items-center justify-center ">
        <div class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-darkPrimary to-lightPrimary animate-spin">
          <div
            class="h-16 w-16 rounded-full dark:bg-darkSecondary bg-lightPrimary"
            role="alert"
            aria-label="Loading"
          ></div>
        </div>
      </div>
    </div>
  );
};
