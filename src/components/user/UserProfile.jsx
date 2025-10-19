import React from "react";

const UserProfile = ({user}) => {
  return (
    <div key={user.id} className="shadow-xl mb-[10px] p-[25px]">
      <img
        src="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
        className="w-[85px] mb-[20px]"
      />
      <h2 className="font-bold text-[15px] mb-[7px]">Name: {user.name}</h2>
      <h3 className="font-bold text-[15px] mb-[7px]">Profession: {user.profession}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Age: {user.age}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">City: {user.city}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Email: {user.email}</h3>
      <h3 className="font-bold text-[15px] mb-[7px]">Phone: {user.phone}</h3>
      <div className="flex gap-[15px] my-[15px]">
        <button className="btn bg-green-500 text-white font-bold">Edit</button>
        <button className="btn bg-red-500 text-white font-bold">Delete</button>
      </div>
    </div>
  );
};

export default UserProfile;
