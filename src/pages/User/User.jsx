import React from "react";
import UserShowcase from "../../components/user/UserShowcase";
import UserForm from "./UserForm";

const User = () => {
  return <div className="flex justify-between mt-[40px]">
  <UserShowcase/>
  <UserForm/>
  </div>;
};

export default User;
