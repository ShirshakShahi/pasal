import React, { Suspense, lazy } from "react";
import Navbar from "../components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { RoutesConstant } from "../constants/routes_config";
import Spinner from "../components/Spinner";
const ProductListing = lazy(
  () => import("../components/product/ProductListing")
);
const HomePage = lazy(() => import("../pages/HomePage"));
const Filter = lazy(() => import("../components/Filter"));

const RoutesConfig: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path={RoutesConstant.ALL_PRODUCT}
              element={<ProductListing />}
            />

            <Route
              path={`${RoutesConstant.CATEGORY}/:category`}
              element={<Filter />}
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default RoutesConfig;
