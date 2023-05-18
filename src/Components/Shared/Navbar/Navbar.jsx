import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../../Providers/AuthProvider";
import Logo from "../../../../src/assets/Logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const displayName = user?.displayName;
  const photoURL = user?.photoURL;

  console.log(displayName);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active-btn" : "inactive-btn")}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-btn" : "inactive-btn")}
        to="/all-toys"
      >
        All Toys
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-btn" : "inactive-btn")}
        to="/my-toys"
      >
        My Toys
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-btn" : "inactive-btn")}
        to="/add-toy"
      >
        Add A Toy
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "active-btn" : "inactive-btn")}
        to="/blog"
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#FBFFDC] rounded-lg shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <figure className="normal-case text-xl">
          <img
            src={Logo}
            className="w-[90px] hover:w-[97px] rounded-xl shadow-xl "
            alt=""
          />
        </figure>

        <h2 className="ml-6 font-extrabold text-3xl hover:text-4xl font-Cambria text-[#0A4D68] bg-[#98eecc] px-3 py-1 shadow-xl rounded-xl">
          Baby Zone
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
        {user?.photoURL && (
          <div>
            <img
              className="w-10 h-10 rounded-full mx-3"
              src={photoURL}
              alt=""
              data-tooltip-id="userPro"
              data-tooltip-content={displayName}
            />
          </div>
        )}

        <Tooltip
          id="userPro"
          place="bottom"
          variant="success"
          className=""
          style={{
            fontWeight: "bold",
            borderRadius: "10px",
            fontSize: "18px",
            backgroundColor: "#0A4D68",
            padding: "7px 20px",
            fontFamily: "Cambria",
          }}
        />

        {user ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-btn" : "inactive-btn"
            }
            to="/"
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-btn" : "inactive-btn"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
