import React from 'react';

const Search = ({ placeholder, search, setSearch }) => {
  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Search;