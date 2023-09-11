
import MasterButton from '../components/MasterButton';

export default {
    title: 'Master Button',
    component: MasterButton,
};

export const Default = {
    args: {
        text: 'Submit',
        textColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: '#e64178',
        width: 200,
        height: 48,
        hoverTextColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        textTransform: 'capitalize',
        loading: 'false',
        loaderColor: '#000000',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: 'false',
        prefixIcon: '',
        suffixIcon: '',
        isDisabled: false,
        gradientDirection: '',
        gradientColors: [],
        borderRadius: '20px'
    },
};