import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";
import authentification from "./authSlice";

export default configureStore({
  reducer: {
    books,
    authentification,
  },
});
