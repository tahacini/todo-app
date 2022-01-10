import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/taskSlice";

const localStorageMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };

const hydrateStore = () => {
  if (localStorage.getItem("applicationState")) {
    return JSON.parse(localStorage.getItem("applicationState"));
  }
};

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
  preloadedState: hydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
