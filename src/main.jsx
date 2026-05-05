import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"; // Redux connect karne ke liye
import { store } from "./store"; // Aapka banaya hua store
import App from './App.jsx';
import './index.css'; // Tailwind aur basic CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>
);