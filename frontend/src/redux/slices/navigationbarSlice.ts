import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavItems {
    name: string;
    url: string;
}
interface NavigationState {
    navItems: NavItems[];
}

const initialState: NavigationState = {
    navItems: [
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: "Services", url: "/services" },
        { name: "Career", url: "/career" },
        { name: "Contact", url: "/contact" },
        // { name: "Login", url: "/login" },
    ],
};

export const navigationbarSlice = createSlice({
    name: "navigationBar",
    initialState: initialState,
    reducers: {
        updateNavItems: (state, action: PayloadAction<NavItems[]>) => {
            state.navItems = action.payload;
        },
    },
});

export const { updateNavItems } = navigationbarSlice.actions;
export default navigationbarSlice.reducer;