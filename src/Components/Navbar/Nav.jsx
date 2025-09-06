import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-center bg-main-color fixed-top">
        <div className=" container px-5 mx-5  text-uppercase fw-bold">
          <Link className="navbar-brand text-white " to="/home">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav gap-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-white coloryBtn" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white coloryBtn" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white coloryBtn"
                  to="/protofilo"
                >
                  Protofilo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white coloryBtn"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
