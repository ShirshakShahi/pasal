import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RoutesConstant } from "../constants/routes_config";
import ProductListing from "../components/product/ProductListing";
import HomePage from "../pages/HomePage";

const RoutesConfig: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={RoutesConstant.ALL_PRODUCT}
            element={<ProductListing />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default RoutesConfig;
