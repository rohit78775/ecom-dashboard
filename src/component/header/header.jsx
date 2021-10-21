import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to={"/"}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>
              Home{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"register"}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
