import React from "react";
import "./Navbar.scss";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="main">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/bookmark">Book</NavLink>
      </nav>
      <section className="pages">
        <Outlet />
      </section>
    </header>
  );
};

export default Navbar;
