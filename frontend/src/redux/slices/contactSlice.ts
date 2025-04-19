import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
    name: string;
    email: string;
    phone: string;
    message: string;
    isLoading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: ContactState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    isLoading: false,
    error: null,
    success: false,
};

// Type for form fields only
type ContactFormFields = Pick<ContactState, 'name' | 'email' | 'phone' | 'message'>;

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setContactField: (state, action: PayloadAction<{ 
            field: keyof ContactFormFields; 
            value: string 
        }>) => {
            state[action.payload.field] = action.payload.value;
        },
        submitContactStart: (state) => {
            state.isLoading = true;
            state.error = null;
            state.success = false;
        },
        submitContactSuccess: (state) => {
            state.isLoading = false;
            state.success = true;
            state.error = null; // Clear any previous errors
            // Option 1: Keep values to show success message with submitted data
            // Option 2: Clear form immediately (current implementation)
            state.name = '';
            state.email = '';
            state.phone = '';
            state.message = '';
        },
        submitContactFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.success = false;
        },
        resetContactState: () => {                 //  removed: resetContactState: (state) => { "because of npm run build"
            return initialState;
        },
    },
});

export const { 
    setContactField, 
    submitContactStart, 
    submitContactSuccess, 
    submitContactFailure, 
    resetContactState 
} = contactSlice.actions;

export default contactSlice.reducer;