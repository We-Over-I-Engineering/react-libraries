
import ParallelogramButton from '../components/WOIParallelogramButton';

export default {
    title: 'WOI Parallelogram Button',
    component: ParallelogramButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        text: 'WOI Parallelogram Button',
        textColor: '#ffffff',
        hoverTextColor: '#e64178',
        fontSize: 16,
        fontWeight: 400,
        width: 300,
        height: 48,
        backgroundColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        borderColor: '#e64178',
        borderThickness: '3px',
        loading: false,
        loaderColor: '#6d5252',
        textTransform: 'capitalize',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: false,
        prefixIcon: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
        suffixIcon: 'https://cdn-icons-png.flaticon.com/512/32/32213.png',
        isDisabled: false,
        gradientDirection: 'left',
        gradientColors: ['purple', 'yellow'],
        hoverGradientDirection: 'left',
        hoverGradientColors: ['yellow', 'purple'],
        skewType: 'left',
        skew: 20
    },
};