import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


const Navbar = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bolder" to="/">Metflix</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark " to="/">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link position-relative text-dark" to="/favourite">
                Favourites
              </Link>
            </li>
            
          </ul>
          <button className="btn btn-primary"><Link className="text-light text-decoration-none" to="/register">Sign Up</Link></button>
            </div>
          </div>
        </nav>
  )
};

export default Navbar;
