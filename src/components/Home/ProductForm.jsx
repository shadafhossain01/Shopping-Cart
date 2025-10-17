import React from "react";

const ProductForm = () => {
  return (
    <div className="mt-[35px] ml-[70px]">
      <div className="shadow-xl p-[40px]">
        <h2 className="font-bold text-indigo-700 text-[24px] mb-[10px]">
          Add New Product !
        </h2>
        <form>
          <div className="mb-[7px]">
            <label className="font-medium">Product Name:</label>
            <input
              type="text"
              placeholder="Product 1"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Product Description:</label>
            <input
              type="text"
              placeholder="Product Description..."
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Category:</label>
            <select className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]">
              <option value="Choose a Category">Choose a Category</option>
              <option value="cap">Cap</option>
              <option value="Leather Shoe">Leather Shoe</option>
              <option value="Leather Belt">Leather Belt</option>
              <option value="Leather Jacket">Leather Jacket</option>
              <option value="Sneakers">Sneakers</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Image URL:</label>
            <input
              type="text"
              placeholder="https://"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="flex justify-between mb-[17px]">
            <div>
              <label className="font-medium">Price:</label>
              <input
                type="text"
                placeholder="100"
                className="block border-2  border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
              />
            </div>
            <div>
              <label className="font-medium">Upload date:</label>
              <input
                type="date"
                className="block border-2  border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
              />
            </div>
          </div>
          <div>
            <button className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
