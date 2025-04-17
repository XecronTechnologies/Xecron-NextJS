import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import footerReducer from "./slices/footerSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        footer:footerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;