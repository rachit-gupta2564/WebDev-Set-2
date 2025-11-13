// src/utils/api.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.imgflip.com/get_memes';

export async function fetchMemesBySearch(term = '') {
  try {
    const response = await fetch(BASE_URL);
    const json = await response.json();
    const memes = json.data.memes || [];
    if (!term || term.trim() === "") return [];
    return memes.filter(meme =>
      meme.name.toLowerCase().includes(term.toLowerCase())
    );
  } catch (error) {
    return [];
  }
}
