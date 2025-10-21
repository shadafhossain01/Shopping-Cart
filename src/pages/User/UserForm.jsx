import { Slide, toast, ToastContainer } from "react-toastify";
import { useAddDataMutation, useGetUpdateDataMutation } from "../../redux/features/user/userApi";

const UserForm = ({
  formData,
  setformData,
  updateUser,
  setUpdateUser,
  updateUserID,
}) => {
  const [addData] = useAddDataMutation();
  const [getUpdateData] = useGetUpdateDataMutation();

  // Add User Functionality
  const handleAddUser = (e) => {
    e.preventDefault();

    // From Field is Empty or not Checking
    if (
      formData.name == "" ||
      formData.profession == "" ||
      formData.age == "" ||
      formData.city == "" ||
      formData.phone == "" ||
      formData.email == ""
    ) {
      toast.error("From Field Should not Empty", {
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
      return
    }

    addData(formData);
    setformData({
      name: "",
      profession: "",
      age: "",
      city: "",
      phone: "",
      email: "",
    });
    toast.success("User Created Successfully", {
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

  // Update User Functionality
  const handleUpdateUser = (e) => {
    e.preventDefault();
    getUpdateData({
      id: updateUserID,
      data: formData,
    });
    setformData({
      name: "",
      profession: "",
      age: "",
      city: "",
      phone: "",
      email: "",
    });
    setUpdateUser(false);
  };

  return (
    <div className="mt-[35px] ml-[70px]">
      <div className="shadow-xl p-[40px] sticky top-[10px]">
        <h2 className="font-bold text-indigo-700 text-[24px] mb-[10px]">
          Add New User !
        </h2>
        <form>
          {/* User Name  */}
          <div className="mb-[7px]">
            <label className="font-medium">User Name:</label>
            <input
              value={formData.name}
              onChange={(e) =>
                setformData({ ...formData, name: e.target.value })
              }
              type="text"
              placeholder="MD Shadaf Hossain"
              required
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          {/* User Profession  */}
          <div className="mb-[7px]">
            <label className="font-medium">User Profession:</label>
            <input
              value={formData.profession}
              onChange={(e) =>
                setformData({ ...formData, profession: e.target.value })
              }
              type="text"
              required
              placeholder="Developer"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          {/* User City  */}
          <div className="mb-[7px]">
            <label className="font-medium">City:</label>
            <input
              value={formData.city}
              onChange={(e) =>
                setformData({ ...formData, city: e.target.value })
              }
              type="text"
              required
              placeholder="Dhaka"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          {/* User Age  */}
          <div className="mb-[7px]">
            <label className="font-medium">Age:</label>
            <input
              value={formData.age}
              onChange={(e) =>
                setformData({ ...formData, age: e.target.value })
              }
              type="text"
              required
              placeholder="20"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          {/* User Phone Number  */}
          <div className="mb-[7px]">
            <label className="font-medium">Phone Number:</label>
            <input
              type="text"
              required
              value={formData.phone}
              onChange={(e) =>
                setformData({ ...formData, phone: e.target.value })
              }
              placeholder="+8801745874025"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>
          {/* User Email  */}
          <div className="mb-[7px]">
            <label className="font-medium">Email:</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setformData({ ...formData, email: e.target.value })
              }
              type="email"
              required
              placeholder="user@example.com"
              className="block border-2 w-[350px] border-gray-300 rounded-[4px] p-[4px] bg-gray-200 mt-[5px]"
            />
          </div>

          {/* User Update or Add Btn  */}
          <div className="mt-[25px]">
            {updateUser ? (
              <button
                className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer"
                onClick={handleUpdateUser}
              >
                Update User
              </button>
            ) : (
              <button
                className="bg-indigo-500 w-full p-[8px] text-white rounded-[5px] cursor-pointer"
                onClick={handleAddUser}
              >
                Add User
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Toastify Notification */}
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
