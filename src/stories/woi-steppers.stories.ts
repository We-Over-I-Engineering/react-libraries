import WOISteppers from "../components/WOISteppers";

export default {
    title: 'WOI Steppers',
    component: WOISteppers,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        text: ['Personal Info', 'Account Info', ' Review'],
        toggleBorder: true,
        containerBorderRadius: '8px',
        containerBorderStyle: '1px solid',
        containerBorderColor: '#000000',
        containerBackgroundColor: '#FFFFFF',
        icon: 'https://cdn-icons-png.flaticon.com/512/8028/8028277.png',
        iconHeight: '14px',
        iconWidth: '14px',
        stepNameFontSize: '14px',
        stepFontFamily:'Inter, sans-serif',
        stepNameFontweight: '500',
        stepNameColor: '#6B7280',
        activeColor: '#000000',
        numberFontSize: '10px',
        numberFontFamily:'Inter, sans-serif',
        numberColor: '#6B7280',
        numberFontWeight: '500',
        numberContainerWidth: '16px',
        numberContainerHeight: '16px',
        numberContainerPadding: '0px 0px 0px 0px',
        numberBorderStyle: '1px solid',
        numberBorderColor: '#6B7280',
        numberBorderRadius: '50%',
        currentStep: '1',

    },
};