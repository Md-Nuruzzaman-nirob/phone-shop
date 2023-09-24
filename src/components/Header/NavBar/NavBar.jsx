import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="shadow-lg rounded-xl">
      <nav className="flex justify-between items-center py-5 px-3">
        <Logo></Logo>
        <ul className="flex items-center gap-5 text-lg md:text-2xl">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-blue-600" : ""
            }
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
