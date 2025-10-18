import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userPic from "../../assets/shadafhossain.png"

const Navbar = () => {

  const cartItem=useSelector(state=>state.cart)
  const totalPrice=cartItem.reduce((total,eachItem)=>total+eachItem.price*eachItem.quantity,0)

  return (
    <div className="navbar shadow-sm py-5 bg-indigo-800 ">
      <div className="mx-auto w-[1200px] flex justify-between items-center ">
        <div className="flex-1">
          <Link to="/" className=" text-[24px] text-white font-bold">
            Shopping Cart
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end mr-[15px]">
            <Link to="/" className="text-white font-semibold">
              Home
            </Link>
          </div>
          <div className="dropdown dropdown-end mr-[15px]">
            <Link to="/cart" className="text-white font-semibold">
              Cart
            </Link>
          </div>
          <div className="dropdown dropdown-end mr-[15px]">
            <Link to="/post" className="text-white font-semibold">
              Post
            </Link>
          </div>
          <div className="dropdown dropdown-end mr-[15px]">
            <Link to="/user" className="text-white font-semibold">
              User
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-[25px] "
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItem.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartItem.length} Items
                </span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <Link to="/cart">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar bg-white"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={userPic} />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
