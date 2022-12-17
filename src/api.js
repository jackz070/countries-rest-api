import { useQuery } from "react-query";

export const useCountries = () => {
  const result = useQuery(["countries"], () => {
    return fetch("https://restcountries.com/v3.1/all").then((res) =>
      res.json()
    );
  });
  return { ...result };
};

export const useCountry = (countryName) => {
  const result = useQuery(["country", countryName], () => {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
      (res) => res.json()
    );
  });
  return { ...result };
};
// TODO find a way to store countries found with name and with code at same query key
export const useCountryByCode = (countryCode) => {
  const result = useQuery(["countryByCode", countryCode], () => {
    return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`).then(
      (res) => res.json()
    );
  });
  return { ...result };
};
