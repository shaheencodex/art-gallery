import React from "react";

function Header() {
  return (
    <header className="topbar">
      <img src="/search.svg" alt="search icon" />
      <input type="text" placeholder="Search Here" className="search"></input>
      <img src="/Filters.svg" alt="Filter Icon" />
      <button className="filter-btn">Filter</button>
    </header>
  );
}

export default Header;
