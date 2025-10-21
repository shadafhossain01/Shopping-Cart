import React, { useState } from "react";
import UserShowcase from "../../components/user/UserShowcase";
import UserForm from "./UserForm";

const User = () => {
    const [updateUser, setUpdateUser] = useState(false);
    const [updateUserID, setUpdateUserID] = useState(null);
      const [formData, setformData] = useState({
        name: "",
        profession: "",
        age: "",
        city: "",
        phone: "",
        email: "",
      });

  return (
    <div className="flex justify-between mt-[40px]">
      <UserShowcase
        setformData={setformData}
        setUpdateUser={setUpdateUser}
        setUpdateUserID={setUpdateUserID}
      />
      <UserForm
        formData={formData}
        setformData={setformData}
        setUpdateUser={setUpdateUser}
        updateUser={updateUser}
        updateUserID={updateUserID}
      />
    </div>
  );
};

export default User;
