import { configureStore } from "@reduxjs/toolkit";

// Filhal hum ek khali reducer de rahe hain taake error na aaye
export const store = configureStore({
  reducer: {
    // Jab hum apna Admin slice banayengi, toh wo yahan ayega
    user: (state = {}) => state, 
  },
});