
import MasterButton from '../components/MasterButton';

export default {
    title: 'Master Button',
    component: MasterButton,
};

export const Default = {
    args: {
        text: 'Master Button',
        textColor: '#ffffff',
        hoverTextColor: '#000000',
        fontSize: 16,
        fontWeight: 400,
        width: 320,
        height: 50,
        borderRadius: 20,
        textTransform: 'capitalize',
        backgroundColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        loading: false,
        loaderColor: '#6d5252',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: true,
        prefixIcon: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
        suffixIcon: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
        gradientDirection: 'left',
        gradientColors: ['purple', 'yellow'],
        hoverGradientDirection: 'left',
        hoverGradientColors: ['yellow', 'purple'],
        isDisabled: false,
    },
};