import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import navigationReducer from "./slices/navigationbarSlice";
import footerReducer from "./slices/footerSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        navigationBar: navigationReducer,
        footer:footerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;