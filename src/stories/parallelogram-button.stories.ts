
import ParallelogramButton from '../components/ParallelogramButton';

export default {
    title: 'Parallelogram Button',
    component: ParallelogramButton,
};

export const Default = {
    args: {
        text: 'Submit',
        textColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
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
    },
};