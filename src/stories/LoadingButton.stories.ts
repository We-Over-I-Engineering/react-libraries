
import LoadingButton from '../components/LoadingButton';

export default {
    title: 'Loading Button',
    component: LoadingButton,
};

export const Default = {
    args: {
        text: 'Submit',
        textColor: '#e64178',
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: '#ffffff',
        width: 200,
        height: 48,
        hoverTextColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        textTransform: 'capitalize',
        loading: true,
        loaderColor: '#000000',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: 'false',
        isDisabled: false,
        borderRadius: '20px',
        loadingIcon: '',
    },
};