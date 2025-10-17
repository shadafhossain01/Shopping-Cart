import React from "react";
import ProductsDisplay from "../../components/Home/ProductsDisplay";
import ProductForm from "../../components/Home/ProductForm";

const Home = () => {

  return (
    <div className="flex">
      <ProductsDisplay />
      <ProductForm/>
    </div>
  );
};

export default Home;
