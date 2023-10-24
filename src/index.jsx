import App from 'Containers/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('mount');

const root = createRoot(container);

root.render(<App />);
