import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();

  // Extract query from URL
  const query = new URLSearchParams(location.search).get("q");

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Here you would fetch/display search results based on the query */}
    </div>
  );
};

export default SearchResults;
