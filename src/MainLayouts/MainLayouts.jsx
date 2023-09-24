import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const MainLayouts = () => {
  return (
    <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-4 md:mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
