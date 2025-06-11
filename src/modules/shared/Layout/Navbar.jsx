import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
import Brand from "../ui/Brand";

const Navbar = () => {
  const { user } = useAuth();

  const link = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/myapplications">My Application</Link>
      </li>
      <li>
        <Link to="/recruiter/addjob">Add Job</Link>
      </li>
      <li>
        <Link to="/recruiter/mypostedjob">My Posted Job</Link>
      </li>
    </>
  );

  return (
    <motion.nav
      className="navbar bg-base-100 shadow-sm z-10 sticky top-[8px]"
      {...topToBottom}
    >
      <div className="navbar-start">
        <div className="dropdown dropdown-right dropdown-hover ">
          <div tabIndex={0} role="button" className=" lg:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 min-w-[150px] p-2 shadow mt-6 border"
          >
            {link}
          </ul>
        </div>
        <Brand />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Signout>
            <button className="btn btn-soft btn-primary">Sign Out</button>
          </Signout>
        ) : (
          <Link to="/auth/signin" className="btn">
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
