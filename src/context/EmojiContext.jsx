// src/context/EmojiContext.jsx
import React, { createContext, useState } from 'react';
import { fetchMemesBySearch } from '../utils/api';

export const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async (term = "") => {
    setLoading(true);
    const data = await fetchMemesBySearch(term);
    setMemes(data);
    setLoading(false);
  };

  return (
    <EmojiContext.Provider value={{ memes, fetchMemes, loading }}>
      {children}
    </EmojiContext.Provider>
  );
};
