import React, { ChangeEvent, FormEvent, useState } from "react";
import "./search.scss";

const Search = () => {
  const [value, setValue] = useState("");
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div className="search">
      <form onSubmit={submitForm}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Search;
