import React, { ChangeEvent, FormEvent, useState } from "react";
import "./search.scss";
import { useDispatch } from "react-redux";
import { findUserAction } from "../../store/actions/findUserAction";
import { resetListAction } from "../../store/actions/resetListAction";

const Search = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const dispatch = useDispatch();
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      findUserAction({
        first,
        last,
      })
    );
  };

  const handleFirstChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0 && last.length === 0) {
      // This happens when user deletes the text in the field
      dispatch(resetListAction());
    }
    setFirst(e.target.value);
  };
  const handleLastChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0 && first.length === 0) {
      // This happens when user deletes the text in the field
      dispatch(resetListAction());
    }
    setLast(e.target.value);
  };
  return (
    <div className="search">
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
