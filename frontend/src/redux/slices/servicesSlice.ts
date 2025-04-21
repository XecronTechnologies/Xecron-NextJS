import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    redirect:string;

}

interface ServiceState {
    services: Service[];
    loading: boolean;
    error: string | null;
}

const initialState: ServiceState = {
    services: [
        {
            id: 'web-dev',
            title: "Web Development",
            description: 'Professional website and web application development for small businesses with SEO optimization and user-friendly interfaces.',
            features: [
                "Custom React-based websites",
                "SEO optimized content",
                "Responsive Design",
                "Fast loading times",
                "User-Friendly interfaces",
                "Mini Web Applications",
            ],
            icon: '💻',
            redirect:"/services/webapp-services"

        },
        {
            id: "mobile-dev",
            title: "Mobile App Development",
            description: "React Native mobile applications for small businesses to help them react customers on the go.",
            features: [
                "Cross-platforms apps(iOS & Android)",
                "Clean and intuitive UI",
                "Small business focused features",
                "Performance optimized",
                "Easy to maintain",
                "Mini applications for specific needs",
            ],
            icon: "📱",
            redirect:"/services/mobileapp-services"
        }
    ],
    loading: false,
    error: null
};

const servicesSlice = createSlice({
    name: "services",
    initialState: initialState,
    reducers: {
        addService: (state, action: PayloadAction<Service>) => {
            state.services.push(action.payload);
        },
        removeService: (state, action: PayloadAction<string>) => {
            state.services = state.services.filter(service => service.id !== action.payload);
        },
        updateService: (state, action: PayloadAction<Service>) => {
            const index = state.services.findIndex(service => service.id === action.payload.id);
            if (index !== -1) {
                state.services[index] = action.payload;
            }
        }
    }
})

export const { addService, removeService, updateService } = servicesSlice.actions;
export default servicesSlice.reducer;