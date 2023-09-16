
import GradientIconButton from '../components/GradientIconButton';

export default {
    title: 'Gradient Icon Button',
    component: GradientIconButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        text: 'Gradient Icon Button',
        textColor: '#ffffff',
        hoverTextColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        width: 300,
        height: 50,
        borderRadius: 50,
        textTransform: 'capitalize',
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