import React, { useContext, useState } from 'react';
import { EmojiContext } from '../context/EmojiContext';

const SearchBar = () => {
  const { fetchMemes } = useContext(EmojiContext);
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMemes(input);
  };

  return (
    <form
      className="flex w-full max-w-[700px] mx-auto bg-transparent"
      onSubmit={handleSearch}
      style={{ marginBottom: '12px' }}
    >
      <input
        type="text"
        placeholder="Search memes..."
        className="flex-grow px-5 py-3 text-lg border border-gray-300 rounded-l-lg focus:outline-none shadow-sm"
        value={input}
        onChange={e => setInput(e.target.value)}
        aria-label="Search box"
        style={{
          background: "white",
          borderRadius: "10px 0 0 10px",
        }}
      />
      <button
        type="submit"
        className="bg-gray-900 text-white px-0 w-[44px] h-[44px] flex items-center justify-center rounded-r-lg hover:bg-gray-700 border-l-0"
        aria-label="Search"
        style={{
          borderRadius: "0 10px 10px 0",
        }}
      >
        {/* Search icon */}
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
