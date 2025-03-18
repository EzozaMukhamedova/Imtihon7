import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";
import { developersApi } from "./developersApi";
// import authReducer from './features/auth/authSlice';
import { postApi } from "./postApi";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [developersApi.reducerPath]: developersApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(postsApi.middleware)
      .concat(developersApi.middleware)
      .concat(postApi.middleware),
});

export default store;
