import React, { ChangeEvent, FormEvent, useState } from "react";
import "./search.scss";
import { useDispatch } from "react-redux";
import { findUserAction } from "../../store/actions/findUserAction";

const Search = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const dispatch = useDispatch();
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(findUserAction({
      first,
      last
    }))
  };
  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => setFirst(e.target.value);
  const handleLastChange = (e: ChangeEvent<HTMLInputElement>) => setLast(e.target.value);
  return (
    <div className="search">
      <form onSubmit={submitForm}>
        <input type="text" value={first} onChange={handleFirstChange} name="first"/>
        <input type="text" value={last} onChange={handleLastChange} name="last"/>
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default Search;
