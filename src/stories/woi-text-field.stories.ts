import WOITextField from '../components/WOITextField';

export default {
    title: 'WOI Text Field',
    component: WOITextField,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        label: "Label text",
        labelColor: "#000000",
        placeholder: "Placeholder here...",
        placeholderColor: "#00000050",
        supportingText: 'Supporting text',
        supportingTextColor: '#000000',
        borderColor: '#007EDA',
        backgroundColor: '#F3F7FD',
        backgroundOpacity: '1',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 16,
        borderType: 'solid',
        boxShadow: 'none',
        leftIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z" />
                    </svg>`,
        leftIconSize: 24,
        leftIconColor: 'black',
        rightIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                </svg>`,
        rightIconColor: 'black',
        rightIconSize: 24,
        isDisabled: true
    },
};