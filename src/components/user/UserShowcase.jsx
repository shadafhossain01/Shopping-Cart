import React from "react";
import { useGetDataQuery } from "../../redux/features/user/userApi";
import UserProfile from "./UserProfile";

const UserShowcase = ({ setformData, setUpdateUser, setUpdateUserID }) => {
  const { data, isLoading, error } = useGetDataQuery();
  if (isLoading) <p>Loading...</p>;
  if (error) <p>{error.message}</p>;

  return (
    <div className="grid grid-cols-3 gap-[25px]">
      {data?.map((user) => (
        <UserProfile
          user={user}
          key={user.id}
          setformData={setformData}
          setUpdateUser={setUpdateUser}
          setUpdateUserID={setUpdateUserID}
        />
      ))}
    </div>
  );
};

export default UserShowcase;
