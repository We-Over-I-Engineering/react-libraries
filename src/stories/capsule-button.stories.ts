
import CapsuleButton from '../components/CapsuleButton';

export default {
    title: 'Capsule Button',
    component: CapsuleButton,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        text: 'Capsule Button',
        textColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: '#e64178',
        width: 200,
        height: 48,
        hoverTextColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: false,
        prefixIcon: '',
        suffixIcon: '',
        isDisabled: false,
        textTransform: 'capitalize'
    },
};