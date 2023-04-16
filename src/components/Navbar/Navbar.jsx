import React from "react";
import "./styles.css";
import VerticalDivider from "../VerticalDivider/VerticalDivider.jsx";
import { Link } from "react-router-dom";
import filterSolid from "../../images/filter-solid.svg";

const Navbar = ({
  title,
  filter,
  searchPlaceholder,
  setTollFlag,
  setLogsFlag,

}) => {


    
  return (
    <nav className="navbar">
      <div className="left">
        <div className="navbar-title">{title}</div>
        <VerticalDivider />
        {filter && (
          <div className="navbar-filter">
            <img src={filterSolid} alt="filter" />
          </div>
        )}
        <div className="navbar-search">
          <input
            className="search"
            type="text"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="navbar-buttons">
        <button onClick={() => setLogsFlag(true)}>Add vehicle entry </button>
        <button onClick={() => setTollFlag(true)}>Add new toll</button>
        <Link to={filter ? "/tollList" : "/"}>
          <button>{filter ? "View all tolls" : "Back to vehicle logs"}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
