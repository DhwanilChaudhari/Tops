import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../ReduxFile/actions";

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default Search;
