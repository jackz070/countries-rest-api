import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import CountryPage from "./pages/CountryPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route path="/country/:countryName" element={<CountryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
