import React from 'react';

import { createRoot } from 'react-dom/client';

import './style.css';

import App from './components/App';

(async () => {
  const container = document.getElementById('app');
  const root = createRoot(container!);
  root.render(<App />);
})();
