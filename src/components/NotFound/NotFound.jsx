import React from 'react';
import { BiSearch } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className="text-center mt-3">
      <h3>Search No Result</h3>
      <p className="text-muted">
        We're sorry. We cannot find any matches for your search term.
      </p>
      <BiSearch className="mt-1 text-muted" fontSize={'50px'} />
    </div>
  );
};

export default NotFound;
