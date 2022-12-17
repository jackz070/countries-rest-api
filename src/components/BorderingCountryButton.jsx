import React from "react";
import { Link } from "react-router-dom";
import { useCountryByCode } from "../api";
import Button from "./Button";

const BorderingCountryButton = ({ countryCode }) => {
  const { data: country, isSuccess, isLoading } = useCountryByCode(countryCode);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <Link to={`/country/${country[0]?.name?.common}`}>
          <Button content={country[0]?.name?.common} />
        </Link>
      )}
    </div>
  );
};

export default BorderingCountryButton;
