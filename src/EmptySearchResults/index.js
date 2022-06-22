import React from "react";
import "./EmptySearchResults.css";

function EmptySearchResults({ searchedText }) {
  return (
    <div className="EmptySearchResults-container">
      <p>There are no tasks matching {searchedText}</p>
    </div>
  );
}

export { EmptySearchResults };
