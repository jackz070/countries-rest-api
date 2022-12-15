import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import CountryPage from "./pages/CountryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:countryName" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
