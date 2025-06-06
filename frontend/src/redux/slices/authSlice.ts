import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: null | {
        uid: string;
        email: string | null;
        display: string | null;
    };
    loading: boolean;
    error: string | null;
}

const initialState : AuthState = {
    user:null,
    loading:false,
    error:null,
};

const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers:{
        loginStart(state){
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state,action:PayloadAction<AuthState["user"]>){
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        loginFailure(state, action:PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
        logout(state){
            state.user = null;
        },
    },
});

export const {loginStart,loginSuccess,loginFailure,logout} = authSlice.actions;
export default authSlice.reducer;