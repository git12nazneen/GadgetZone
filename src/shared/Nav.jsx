
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import logo from "../assets/logo.png";
import { useState } from "react";

const Nav = () => {
  const { user, logOut } = useAuth();
  // console.log('nav,', user)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // logout implement

  const handleSignOut = () => {
    logOut().then().catch();
    swal({
      text: "logout success",
      icon: "success",
    });
  };

  const navLinks = (
    <>
      <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive ? 'text-[#f14902] border-b-2 border-[#f14902] font-bold' : 'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/room" 
        className={({ isActive }) =>
          isActive ? 'text-[#f14902] border-b-2 border-[#f14902] font-bold' : 'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
        }
      >
        Rooms
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) =>
          isActive ? 'text-[#f14902] border-b-2 border-[#f14902] font-bold' : 'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
        }
      >
        About us
      </NavLink>

      <NavLink 
        to="/myRoom" 
        className={({ isActive }) =>
          isActive ? 'text-[#f14902] border-b-2 border-[#f14902] font-bold' : 'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
        }
      >
        My Rooms
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) =>
          isActive ? 'text-[#f14902] border-b-2 border-[#f14902] font-bold' : 'my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
        }
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div className="bg-opacity-60 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <nav className="relative bg-gray-200 shadow dark:bg-gray-800 ">
        <div className="container px-6 mx-auto md:flex md:justify-between md:items-center h-20">
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-24 " src={logo} alt="" />
            </a>
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">{navLinks}</div>
            <div className="flex justify-center md:block">
              <div>
                {user?.email ? (
                  <div className="dropdown dropdown-end z-50">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <button
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content={user?.displayName}
                        >
                          <img
                            src={
                              user?.photoURL
                                ? user.photoURL
                                : "https://media.istockphoto.com/id/1211308812/vector/account.jpg?s=1024x1024&w=is&k=20&c=VzSNfBzXzlHYLix-nJp3hiLxUjTayBuLJOKsWHY2yj4="
                            }
                            alt="User"
                          />
                        </button>
                        <Tooltip id="my-tooltip"></Tooltip>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                    >
                      <li>
                        <button className="btn btn-sm btn-ghost">
                          {user?.displayName || "name not found"}
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={handleSignOut}
                          className="btn btn-sm btn-ghost"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link to="/login">
                    <a className="px-7 py-3 bg-black rounded-2xl text-white hover:bg-[#f14902] hover:text-black">
                      Login
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;



