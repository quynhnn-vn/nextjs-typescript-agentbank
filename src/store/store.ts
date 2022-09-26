import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
