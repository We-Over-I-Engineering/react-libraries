
import WOITopNavbar from '../components/WOITopNavbar';

export default {
    title: 'WOI Top Navbar',
    component: WOITopNavbar,
    tags: ['autodocs'],
};

// headerIcon?: string
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
        headerIcon: 'https://www.w3schools.com/howto/img_avatar.png',
        headerLink: 'https://www.google.com',
        headerText: 'WOI Top Navbar',
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