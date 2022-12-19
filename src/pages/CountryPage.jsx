import React from "react";
import { QueryClient } from "react-query";
import { Link, useParams } from "react-router-dom";
import { useCountry } from "../api";
import Information from "../components/countryCard/Information";
import BorderingCountryButton from "../components/BorderingCountryButton";
import Button from "../components/Button";
import { AiOutlineArrowLeft } from "react-icons-all-files/ai/AiOutlineArrowLeft";
import { Loader } from "../components/Loader";

const CountryPage = () => {
  const { countryName } = useParams();

  const {
    data: country,
    isSuccess,
    isLoading,
    isError,
  } = useCountry(countryName);

  console.log(country);
  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess) {
    return (
      <div className="mx-auto">
        {country?.status === 404 && (
          <div className="w-full min-h-screen justify-start mt-48 items-center flex flex-col">
            <div className=" text-2xl font-semibold">Country not found</div>
            <div className="text-sm text-darkGray ">
              Try searching for different country
            </div>
            <Link
              to="/"
              className="text-sm underline text-darkGray dark:hover:text-lightPrimary hover:text-darkPrimary"
            >
              Go to Homepage
            </Link>
          </div>
        )}
        {!country?.status && (
          <div className="lg:p-16 md:p-12 p-6 ">
            <Button
              content={
                <Link to="/" className="flex items-center justify-center">
                  <AiOutlineArrowLeft />
                  <span className="ml-4 text-sm">Back</span>
                </Link>
              }
            />

            <div className="flex sm:flex-row flex-col">
              <div className="flex-1 min-w-[35%] sm:mt-[12vh] mt-[6vh]">
                <img src={country[0]?.flags?.png} className="w-full h-fit" />
              </div>
              <div className="lg:p-24 sm:p-12 p-0 sm:mt-0 mt-8">
                <h2 className="sm:text-4xl text-3xl font-extrabold mb-8">
                  {country[0]?.name?.common}
                </h2>
                <div className="flex xl:flex-row flex-col flex-wrap w-full mb-12">
                  <div className="flex flex-col gap-2">
                    <Information
                      label="Native Name"
                      data={
                        Object.values(country[0]?.name?.nativeName)[0]?.common
                      }
                    />
                    <Information
                      label="Population"
                      data={country[0]?.population}
                    />
                    <Information label="Region" data={country[0]?.region} />
                    <Information
                      label="Subegion"
                      data={country[0]?.subregion}
                    />
                    <Information label="Capital" data={country[0]?.capital} />
                  </div>
                  <div className="flex flex-col gap-2 xl:ml-16 ml-0 xl:mt-0 mt-8">
                    <Information
                      label="Top Level Domain"
                      data={country[0]?.tld}
                    />
                    <Information
                      label="Currencies"
                      data={country[0]?.currencies}
                    />
                    <Information
                      label="Languages"
                      data={country[0]?.languages}
                    />
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col xl:items-center items-starttext-md gap-2">
                  {country[0]?.borders && (
                    <div className="">Border Countries:</div>
                  )}
                  <div className="flex flex-wrap max-w-xl items-start">
                    {country[0]?.borders?.map((borderingCountry) => (
                      <div className="m-2">
                        <BorderingCountryButton
                          countryCode={borderingCountry}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default CountryPage;
