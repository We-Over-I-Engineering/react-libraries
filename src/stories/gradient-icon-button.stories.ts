
import GradientIconButton from '../components/GradientIconButton';

export default {
    title: 'Gradient Icon Button',
    component: GradientIconButton,
};

export const Default = {
    args: {
        text: 'Submit',
        textColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        width: 200,
        height: 48,
        hoverTextColor: '#ffffff',
        hoverBackgroundColor: '#ffffff',
        textTransform: 'capitalize',
        openLink: 'https://www.wikipedia.org/',
        prefixIcon: '',
        suffixIcon: '',
        isDisabled: false,
        gradientDirection: 'right',
        gradientColors: ['red', 'blue'],
        borderRadius: '50px',
    },
};