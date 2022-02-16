import React from "react";
import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [typed, setTyped] = useState("");

  return (
    <div>
      <div className='col-sm-8 col-lg-6 mx-auto my-3'>
        <input
          onChange={(e) => {
            setTyped(e.target.value);
            handleSearch(typed);
          }}
          className='w-100 px-3 py-2 border border-2 rounded'
          type='text'
          placeholder='Search...'
          value={typed}
        />
      </div>
    </div>
  );
};

export default Search;
