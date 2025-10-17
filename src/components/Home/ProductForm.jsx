import React from "react";
  import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/features/home/homeSlice";
import { Slide, toast, ToastContainer } from "react-toastify";

const ProductForm = () => {
  const dispatch=useDispatch()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      dispatch(addProduct(data))
      reset()
      toast.success("Products Added to Display", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    };

  return (
    <div className="mt-[35px] ml-[70px]">
      <div className="shadow-xl p-[40px]">
        <h2 className="font-bold text-indigo-700 text-[24px] mb-[10px]">
          Add New Product !
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[7px]">
            <label className="font-medium">Product Name:</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Product 1"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Product Description:</label>
            <input
              type="text"
              {...register("desc", { required: true })}
              placeholder="Product Description..."
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Category:</label>
            <select
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
              {...register("category", { required: true })}
            >
              <option value="Choose a Category">Choose a Category</option>
              <option value="cap">Cap</option>
              <option value="Leather Shoe">Leather Shoe</option>
              <option value="Leather Belt">Leather Belt</option>
              <option value="Leather Jacket">Leather Jacket</option>
              <option value="Sneakers">Sneakers</option>
              <option value="Tea">Tea</option>
              <option value="T-shirt">T-shirt</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Image URL:</label>
            <input
              {...register("image", { required: true })}
              type="text"
              placeholder="https://"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="flex justify-between mb-[17px]">
            <div>
              <label className="font-medium">Price:</label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="100"
                className="block border-2  border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
              />
            </div>
            <div>
              <label className="font-medium">Upload date:</label>
              <input
                {...register("date", { required: true })}
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default ProductForm;
