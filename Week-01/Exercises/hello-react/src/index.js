import React from 'react';
import ReactDOM from 'react-dom/client';  // Allows me to write JSX for browsers. If this was for mobile, this line would be different.
import App from './App';
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
