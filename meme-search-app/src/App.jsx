import React from 'react';
import { EmojiProvider } from './context/EmojiContext';
import Home from './pages/Home';

const App = () => (
  <EmojiProvider>
    <Home />
  </EmojiProvider>
);

export default App;
