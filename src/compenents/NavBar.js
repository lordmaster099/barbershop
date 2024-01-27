import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" flex items-center bg-gray-700 py-2 mx-0 text-white">
      <Link to="/" className=" px-4  py-4 relative left-3">
        Clip Craft Barbers
      </Link>

      <ul className=" flex absolute right-0 space-x-4 px-7 items-stretch">
        <li>
          <Link to="/" className=" px-4  py-4 ">
            home
          </Link>
        </li>
        <li>
          <Link to="/FAQ" className=" px-4  py-4 ">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/Reservations" className=" px-4  py-4 ">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/AboutUs" className=" px-4  py-4 ">
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
