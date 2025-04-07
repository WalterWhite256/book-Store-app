import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cart/cartSlice.js';
import  booksApi  from '../redux/features/cart/booksApi.js'; // Adjust path if needed
import ordersApi from './features/orders/ordersApi.js';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer, // 👈 RTK Query reducer
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware), // 👈 RTK Query middleware
});
