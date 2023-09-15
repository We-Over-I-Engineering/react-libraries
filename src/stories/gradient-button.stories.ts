
import GradientButton from '../components/GradientButton';

export default {
    title: 'Gradient Button',
    component: GradientButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        text: 'Gradient Button',
        textColor: '#ffffff',
        hoverTextColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        width: 200,
        height: 48,
        borderRadius: 50,
        textTransform: 'capitalize',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: true,
        gradientDirection: 'right',
        gradientColors: ['red', 'blue'],
        hoverGradientDirection: 'right',
        hoverGradientColors: ['blue', 'red'],
        isDisabled: false,
    },
};