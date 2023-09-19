import React from "react";
import "./Navbar.scss";
import { Outlet, NavLink } from "react-router-dom";
import Bookmark from '../../assets/icon-nav-bookmark.svg'

const Navbar = () => {
  return (
    <header className="main">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/bookmark"><img src={Bookmark} alt="" /></NavLink>
      </nav>
      <section className="pages">
        <Outlet />
      </section>
    </header>
  );
};

export default Navbar;
