import React, { useState } from "react";
import "./search.scss";
import { useSearch } from "./useSearch";

const Search = () => {
  const {
    submitForm,
    handleFirstChange,
    handleLastChange,
    fixed,
    first,
    last,
  } = useSearch();

  return (
    <div className={`search ${fixed ? "fixed" : ""}`}>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            value={first}
            onChange={handleFirstChange}
            name="first"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            value={last}
            onChange={handleLastChange}
            name="last"
            id="lastName"
          />
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Search;
