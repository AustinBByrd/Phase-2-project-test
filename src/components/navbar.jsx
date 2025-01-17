import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Search from "./Search";
import SearchResultsList from "./SearchResultsList";
import "./navbar.css";
import "./search.css";

const searchInputStyles = {
  width: '300px',
  height: '20px',
  fontSize: '18px',
  padding: '10px',
};

export const Navbar = ({toggleTheme}) => {
  return (
    <div className="navbar">
      <div className="links">
        <div className="search-container">
          <Search id="nav-search" inputStyles={searchInputStyles} />
          <SearchResultsList />
        </div>
        <Link id="nav-shop" to="/" > Shop </Link>
        <Link id="nav-contact" to="/contact"> Contact </Link>
        <Link id="nav-cart" to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
      <div className="right-buttons">
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to="/admin"><button>Admin Login</button></Link>
      </div>
    </div>
  );
};
