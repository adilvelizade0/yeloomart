import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component.jsx";
import Navbar from "../../components/Navbar/Navbar.component.jsx";
import MobileNavigator from "../../components/MobileNavigator/MobileNavigator.component.jsx";
import BottomBar from "../../components/BottomBar/BottomBar.component.jsx";
import ProductDetail from "../../components/ProductDetail/ProductDetail.component.jsx";

const Product = () => {
  const {
    state: { id },
  } = useLocation();
  return (
    <>
      <div className="sticky-top">
        <div
          className="
        d-none d-lg-block
      "
        >
          <Navbar />
        </div>
        <MobileNavigator name="Məhsul" />
        <Breadcrumb />
      </div>
      <main className="pt-3 pb-5 pb-lg-0 mb-5 mt-lg-0">
        <div className="container">
          <ProductDetail id={id} />
        </div>
      </main>
      <BottomBar />
    </>
  );
};

export default Product;
