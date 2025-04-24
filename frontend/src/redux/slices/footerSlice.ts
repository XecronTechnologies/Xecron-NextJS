import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialMedia {
    name: string;
    icon: string;
    url: string;
}

interface CompanyInfo {
    logo: string;
    description: string;
    locationIcon?: string;
    address: string;
    phoneIcon?: string;
    phone: string;
    socialMedia: SocialMedia[];
}

interface LinkItem {
    name: string;
    url: string;
}

interface FooterState {
    companyInfo: CompanyInfo;
    whatsNew:LinkItem[];
    pagelinks: LinkItem[];
    businessLinks: LinkItem[];
    extraLinks: LinkItem[];

}

const initialState: FooterState = {
    companyInfo: {
        logo: '/logo.png',
        description: "Innovating the Future with Cutting-Edge Solutions. Explore our advanced tech services today!",
        locationIcon: "https://img.icons8.com/?size=100&id=3723&format=png&color=000000",
        address: "123 Main St, Bengaluru, Karnataka",
        phoneIcon: "https://img.icons8.com/?size=100&id=14181&format=png&color=000000",
        phone: "+1 (123) 456-7890",
        socialMedia: [
            { name: "Facebook", icon: '/logo.png', url: "#" },
            { name: "Twitter", icon: '/logo.png', url: "#" },
            { name: "Instagram", icon: '/logo.png', url: "#" },
            { name: "LinkedIn", icon: '/logo.png', url: "#" },
        ],
    },
    pagelinks: [
        { name: "Home", url: '/' },
        { name: "Services", url: '/services' },
        // { name: "About", url: '/about' },
        { name: "Contact", url: '/contact' },
    ],
    businessLinks: [
        { name: "Career", url: "/career" },
        { name: "Client", url: "/client" },
        { name: "Partners", url: '/partners' },
        { name: "Investors", url: '/investors' },
        { name: "Press", url: '/press' },
    ],
    extraLinks: [
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Terms of Service", url: '/terms' },
        { name: "FAQ", url: 'faq' },
        { name: "Support", url: "/support" },
    ],
    whatsNew:[
        {name:"Attendence Mobile App", url:"/services/mobileapp-services"}
    ]
};



export const footerSlice = createSlice({
    name: 'footer',
    initialState: initialState,
    reducers: {
        updateCompanyInfo: (state, action: PayloadAction<Partial<CompanyInfo>>) => {
            state.companyInfo = { ...state.companyInfo, ...action.payload };
        },
        updatePageLinks: (state, action: PayloadAction<LinkItem[]>) => {
            state.pagelinks = action.payload;
        },
        updateBusinessLinks: (state, action: PayloadAction<LinkItem[]>) => {
            state.businessLinks = action.payload;
        },
        updateExtraLinks: (state, action: PayloadAction<LinkItem[]>) => {
            state.extraLinks = action.payload;
        },
    },
});

export const { updateCompanyInfo, updatePageLinks, updateBusinessLinks, updateExtraLinks } = footerSlice.actions;
export default footerSlice.reducer;