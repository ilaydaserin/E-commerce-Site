import React from "react";
import Category from "./Category";
import Products from "./Products";
import SpecificCategory from "./SpecificCategory";
import Product from "./Product";
import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          {/*<SpecificCategory/>*/ }
          <Outlet/>
        </div>
        <div className="col-sm-4"><Category/></div>
      </div>
    </>
  );
}

export default ProductLayout;
