import React, { useState } from "react";
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
  tollList,
  setTollFilter,
  tollFilter,
  tollSearch,
  setTollSearch,
  entrySearch,
  setEntrySearch,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterClick = () => {
    // console.log("clicked");
    setTollFilter("");
    setShowDropdown(!showDropdown);
  };

  console.log("tollfilter here is ", tollFilter);
  return (
    <nav className="navbar">
      <div className="left">
        <div className="navbar-title">{title}</div>
        <VerticalDivider />
        {filter && (
          <div className="navbar-filter">
            <img src={filterSolid} alt="filter" onClick={handleFilterClick} />
            {showDropdown && (
              <select
                name="filter"
                value={tollFilter}
                onChange={(e) => {
                  console.log("here i come");
                  setTollFilter(e.target.value);
                }}
              >
                <option value="">All</option>
                {tollList.map((item, index) => (
                  <option key={index} value={item.tollName}>
                    {item.tollName}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
        <div className="navbar-search">
          <input
            value={tollSearch}
            onChange={(e) => {
              if (filter) {
                setEntrySearch(e.target.value);
              } else {
                setTollSearch(e.target.value);
              }
            }}
            className="search"
            type="text"
            placeholder={searchPlaceholder}
          />
        </div>
      </div>

      <div className="navbar-buttons">
        <button onClick={() => setLogsFlag(true)}>Add vehicle entry</button>
        <button onClick={() => setTollFlag(true)}>Add new toll</button>
        <Link to={filter ? "/tollList" : "/"}>
          <button>{filter ? "View all tolls" : "Back to vehicle logs"}</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
