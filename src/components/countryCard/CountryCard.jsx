import React from "react";
import { Link } from "react-router-dom";
import Information from "./Information";

const CountryCard = ({ country }) => {
  console.log(country);
  return (
    <div className="p-8 w-[95%] flex mx-auto justify-center">
      <Link
        className="w-fit h-[350px] flex flex-col shadow-md hover:scale-[103%] transition-all duration-500 ease-out"
        to={`/country/${country.name.common}`}
      >
        <img
          src={country.flags.png}
          className="h-1/2 object-fit rounded-t-sm w-[280px]"
        />
        <div className="dark:bg-darkPrimary bg-white dark:text-lightPrimary text-lightModeText p-6 text-xs leading-6 h-1/2 rounded-b-sm">
          <h2 className="text-lg font-semibold mb-4">{country.name.common}</h2>
          <Information label="Population" data={country.population} />
          <Information label="Region" data={country.region} />
          <Information label="Capital" data={country.capital} />
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
