import React from "react";
import { useGetDeleteDataMutation } from "../../redux/features/user/userApi";

const UserProfile = ({ user, setformData, setUpdateUser, setUpdateUserID }) => {

  const [getDeleteData] = useGetDeleteDataMutation();

  const handleEditUser = (user) => {
    setformData(user);
    setUpdateUser(true);
    setUpdateUserID(user.id)
  };

  const handleDeleteUser=async(id)=>{
    await getDeleteData(id)
  }

  return (
    <div className="shadow-xl mb-[10px] p-[15px]">
      <img
        src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
        className="w-[85px] mb-[20px]"
      />
      <h2 className="font-bold text-[15px] mb-[7px]">Name: {user.name}</h2>
      <h3 className="font-bold text-[15px] mb-[7px]">
        Profession: {user.profession}
      </h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Age: {user.age}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">City: {user.city}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Email: {user.email}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Phone: {user.phone}</h3>
      <div className="flex gap-[15px] my-[15px]">
        <button
          className="btn bg-green-500 text-white font-bold"
          onClick={() => handleEditUser(user)}
        >
          Edit
        </button>
        <button
          className="btn bg-red-500 text-white font-bold"
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
