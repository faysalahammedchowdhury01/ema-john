import React from 'react';

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div className="col-sm-8 col-lg-6 mx-auto my-4">
        <input
          onChange={async (e) => {
            handleSearch(e.target.value);
          }}
          className="w-100 px-3 py-2 border border-0 rounded"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
