import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialMedia {
    name: string;
    icon: string;
    url: string;
}

interface CompanyInfo {
    logo: string;
    description: string;
    address: string;
    phone: string;
    socialMedia: SocialMedia[];
}

interface LinkItem {
    name: string;
    url: string;
}

interface FooterState {
    companyInfo: CompanyInfo;
    pagelinks: LinkItem[];
    businessLinks: LinkItem[];
    extraLinks: LinkItem[];
}

const initialState: FooterState = {
    companyInfo: {
        logo: '/logo.png',
        description: "Xecron Technologies Description",
        address: "123 Main St, Bengaluru, Karnataka",
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
        { name: "About", url: '/about' },
        { name: "Services", url: '/services' },
        { name: "Contact", url: '/contact' },
    ],
    businessLinks: [
        { name: "Careers", url: "/careers" },
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