import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import navigationReducer from "./slices/navigationbarSlice";
import footerReducer from "./slices/footerSlice";
import contactReducer from "./slices/contactSlice"
import servicesReducer from "./slices/servicesSlice"

export const store = configureStore({
    reducer:{
        auth:authReducer,
        navigationBar: navigationReducer,
        footer:footerReducer,
        contact:contactReducer,
        services:servicesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;