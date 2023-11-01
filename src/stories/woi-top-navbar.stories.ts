
import WOITopNavbar from '../components/WOITopNavbar';

export default {
    title: 'WOI Top Navbar',
    component: WOITopNavbar,
    tags: ['autodocs'],
};

// headerIconLink?: string
// headerLink?: string
// headerText?: string
// iconPosition?: string // left, right, center
// iconSize?: number
// menuItems?: MenuItemProps[]
// textColor?: string
// hoverTextColor?: string
// fontSize?: number
// fontWeight?: number
// borderRadius?: number
// hoverUnderline?: boolean
// backgroundColor?: string
// borderColor?: string
// borderThickness?: string
// openLinkInNewTab?: boolean
// headerFunction?: () => void
// clickFunction?: () => void

export const Default = {
    args: {
        headerLogo: `<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>`,
        headerIconLink: '',
        headerLink: 'https://www.google.com',
        headerText: 'magnifico',
        iconPosition: 'left',
        iconSize: 50,
        menuItems: [
            {
                name: 'Home',
                link: 'https://www.google.com',
            },
            {
                name: 'About',
                link: 'https://www.google.com',
                drop: [
                    {
                        name: 'About Us',
                        link: 'https://www.google.com',
                    },
                    {
                        name: 'Our Team',
                        link: 'https://www.google.com',
                    },
                ],
            },
            {
                name: 'Contact',
                link: 'https://www.google.com',
            },
        ],
        textColor: '#000000',
        hoverTextColor: '#2563EB',
        fontSize: 20,
        fontWeight: 400,
        fontFamily: 'Roboto',
        borderRadius: 0,
        hoverUnderline: true,
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderThickness: '0px',
        openLinkInNewTab: true,
        headerFunction: () => { },
        clickFunction: () => { },
    },
};