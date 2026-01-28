import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />

      {/* Dashboard Content Area */}
      <div className=" bg-gray-50 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;