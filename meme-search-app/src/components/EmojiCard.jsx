// src/components/EmojiCard.jsx
import React from 'react';

const getKeywords = (name) => name.split(" ").slice(0, 3).join(", ");

const EmojiCard = ({ meme }) => (
  <div className="
    bg-white rounded-lg shadow border border-gray-200
    flex flex-col items-center justify-center
    px-3 py-3
    w-40 h-32
    transition-all duration-150
    hover:shadow-xl hover:-translate-y-1
    cursor-pointer
    overflow-hidden
  ">
    <img
      src={meme.url}
      alt={meme.name}
      className="w-9 h-9 object-contain mb-1"
    />
    <h3 className="text-[15px] font-medium text-center mb-1 text-gray-900 truncate w-full">{meme.name}</h3>
    <p className="text-xs text-gray-500 text-center truncate w-full">{getKeywords(meme.name)}</p>
  </div>
);

export default EmojiCard;
