import React, { useState } from "react";
import { useCountries } from "../api";
import CountryCard from "./countryCard/CountryCard";

import { AiOutlineSearch } from "react-icons/ai";
import { Loader } from "./Loader";

// TODO handle different query states
const CountriesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  // TODO implement some "notFound" marker to provide this information when searching
  const [notFound, setNotFound] = useState(false);

  const { data: countries, isSuccess, isLoading, isError } = useCountries();

  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchTerm((prev) => e.target.value);
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilterByRegion(e.target.value);
  };

  const searchByName = (country) => {
    return (
      (country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.name.official
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) &&
      country.region.includes(filterByRegion)
    );
  };

  React.useEffect(() => {
    const list = document.getElementById("theList");
    if (isSuccess && list.children.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [searchTerm, filterByRegion]);
  // TODO countries do not change, they are only filtered when searched. Implement countriesToBeDisplayed to accomodate for the change in filter options or else just hardcode them in, maybe check displayed countries and disable those not present in the list
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <div className="w-full min-h-screen justify-start mt-48 items-center flex flex-col">
        <div className=" text-2xl font-semibold">Oops!</div>
        <div className="text-sm text-darkGray ">Something went wrong...</div>
        <Link
          to="/"
          className="text-sm underline text-darkGray dark:hover:text-lightPrimary hover:text-darkPrimary"
        >
          Go to Homepage
        </Link>
      </div>
    );
  }
  if (isSuccess) {
    return (
      <section className="">
        <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between">
          <div className="box-border relative sm:m-8 sm:mb-4 sm:w-fit w-[90%] mt-4 mb-4 mx-auto ">
            <input
              type="textarea"
              value={searchTerm}
              onChange={handleSearchInput}
              placeholder="Search for a country..."
              aria-label="Search for a country"
              className="dark:placeholder:text-white dark:text-white dark:bg-darkPrimary bg-white shadow-md px-12 py-2 placeholder:text-xs relative sm:w-fit w-full "
            />
            <AiOutlineSearch className="absolute top-3 left-4 text-lg dark:text-white text-gray-500" />
          </div>
          <div className=" ">
            <select
              defaultValue={"Filter by Region"}
              className="dark:placeholder:text-white dark:text-white dark:bg-darkPrimary bg-white shadow-md sm:m-8 sm:mb-4 m-4 ml-5 px-8 py-3 text-xs border-transparent border-r-8"
              onChange={handleFilterChange}
            >
              <option selected value="Filter by Region" disabled>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        {notFound && (
          <div className="flex flex-col h-screen items-center justify-start mt-24">
            <div className="text-xl">No countries found</div>
            <div className="text-xs text-darkGray ">
              Try changing search term or filtering options
            </div>
          </div>
        )}
        <div
          className="w-screen grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1600px] mx-auto"
          id="theList"
        >
          {countries
            ?.filter((country) => searchByName(country))
            .map((country) => (
              <CountryCard country={country} key={country.name.common} />
            ))}
        </div>
      </section>
    );
  }
};

export default CountriesList;
