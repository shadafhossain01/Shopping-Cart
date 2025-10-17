import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default App
