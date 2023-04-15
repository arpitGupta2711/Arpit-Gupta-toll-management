import React from "react";
import "./styles.css";
import VerticalDivider from "../VerticalDivider/VerticalDivider.jsx";
import { Link, useLocation } from "react-router-dom";
import filterSolid from "../../images/filter-solid.svg";
import { ReactComponent as SearchIcon } from "../../images/search-solid.svg";

const Navbar = ({ title, filter }) => {
  const location = useLocation();
  const placeholderText = (
    <span>
      <SearchIcon />
      Search
    </span>
  );
  console.log(location);
  return (
    <nav className="navbar">
      <div className="left">
        <div className="navbar-title">{title}</div>
        <VerticalDivider />
        {filter && (
          <div className="navbar-filter">
          
              <img src={filterSolid} alt="filter"/>
            
          </div>
        )}
        <div className="navbar-search">
          <input className="search" type="text"  placeholder="Search Vehicle"/> 
        </div>
      </div>

      <div className="navbar-buttons">
        <button>Add vehicle entry </button>
        <button>Add new toll</button>
        <Link to={filter ? "/tollList" : "/"}>
          <button>{filter ? "View all tolls" : "Back to vehicle logs"}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
