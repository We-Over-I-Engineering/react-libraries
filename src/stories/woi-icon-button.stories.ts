
import WOIIconButton from '../components/WOIIconButton';

export default {
    title: 'WOI Icon Button',
    component: WOIIconButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        size: 50,
        borderRadius: 100,
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#007dff',
        borderColor: '#007dff',
        borderThickness: '3px',
        loading: false,
        loaderColor: '#6d5252',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: true,
        icon: `https://www.pngmart.com/files/15/Circle-Facebook-Logo-PNG-Pic.png`,
        iconColor: 'white',
        iconsSize: 32,
        isDisabled: false,
    },
};