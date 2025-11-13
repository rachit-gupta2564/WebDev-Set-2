// src/pages/Home.jsx

import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import EmojiCard from '../components/EmojiCard';
import Loader from '../components/Loader';
import { EmojiContext } from '../context/EmojiContext';

const Home = () => {
  const { memes, loading } = useContext(EmojiContext);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start"
      style={{
        background: 'linear-gradient(180deg, #dde7fa 0%, #e5d8ff 100%)',
        paddingTop: '50px'
      }}
    >
      {/* Title */}
      <h1 className="text-center text-gray-900 font-bold text-3xl mb-7 tracking-tight">
        Emoji Search
      </h1>

      {/* Centered Search Bar */}
      <SearchBar />

      {/* Meme Cards Grid */}
      <div className="
        w-full max-w-6xl
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-6
        py-7
        place-items-center
      ">
        {loading ? <Loader /> : (
          memes.length === 0
            ? <p className="col-span-full text-center text-gray-400 text-lg">No memes found. Try searching!</p>
            : memes.map(meme => <EmojiCard key={meme.id} meme={meme} />)
        )}
      </div>
    </div>
  );
};

export default Home;
