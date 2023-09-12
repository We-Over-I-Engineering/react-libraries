
import CircleButton from "../components/CircleButton";

export default {
    title: 'Circle Button',
    component: CircleButton,
};

export const Default = {
    args: {
        text: 'Circle Button',
        textColor: '#ffffff',
        fontSize: 16,
        fontWeight: 400,
        backgroundColor: '#e64178',
        width: 100,
        height: 98,
        hoverTextColor: '#e64178',
        hoverBackgroundColor: '#ffffff',
        textTransform: 'capitalize',
        openLink: 'https://www.wikipedia.org/',
        openLinkInNewTab: false,
        isDisabled: false,
    },
};