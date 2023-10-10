import { default as LeftIcon } from "../assets/svgs/WOITextFieldLeftIcon.svg";
import { default as RightIcon } from "../assets/svgs/WOITextFieldRightIcon.svg";
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
        borderRadius: '6px',
        borderWidth: '1px',
        borderType: 'solid',
        boxShadow: 'none',
        leftIcon: LeftIcon,
        leftIconSize: 24,
        rightIcon: RightIcon,
        rightIconSize: 24,
        isDisabled: false,
    },
};