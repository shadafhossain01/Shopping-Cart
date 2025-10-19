import React, { useState } from "react";
import { Slide, ToastContainer } from "react-toastify";

const UserForm = () => {

    const [updateUser,setUpdateUser]=useState(false)

  return (
    <div className="mt-[35px] ml-[70px]">
      <div className="shadow-xl p-[40px] sticky top-[10px]">
        <h2 className="font-bold text-indigo-700 text-[24px] mb-[10px]">
          Add New User !
        </h2>
        <form>
          <div className="mb-[7px]">
            <label className="font-medium">User Name:</label>
            <input
              type="text"
              placeholder="MD Shadaf Hossain"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">User Profession:</label>
            <input
              type="text"
              placeholder="Developer"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">City:</label>
            <input
              type="text"
              placeholder="Dhaka"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Age:</label>
            <input
              type="text"
              placeholder="20"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Phone Number:</label>
            <input
              type="number"
              placeholder="+8801745874025"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          <div className="mb-[7px]">
            <label className="font-medium">Email:</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>

          <div className="mt-[25px]">
            {updateUser ? (
              <button className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer">
                Update User
              </button>
            ) : (
              <button className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer">
                Add User
              </button>
            )}
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

export default UserForm;
