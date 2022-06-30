import React from "react";

function Search({ onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" 
      name="search" 
      placeholder="Search..." 
      onChange={onSearchChange} />
      
    </div>
  );
}

export default Search;
