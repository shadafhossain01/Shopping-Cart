import React from "react";
import { useSelector } from "react-redux";

const ProductsDisplay = () => {

    const data=useSelector(state=>state.cart)

  return (
    <div className="grid grid-cols-2 gap-x-7">
      {data.map((product) => (
        <div
          className="card bg-base-100 w-96 shadow-sm my-[30px]"
          key={product.id}
        >
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className="w-[384px] h-[200px] object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <h3 className="font-medium text-[15px]">Category: <span className="text-indigo-500 font-semibold text-[18px]">{product.category}</span></h3>
            <p>{product.desc}</p>
            <div className="card-actions justify-between items-center">
              <button className="font-bold text-indigo-600 text-[20px] ">
                ${product.price}
              </button>
              <button className="btn btn-primary mt-[5px]">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
