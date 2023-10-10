import WOITextField from '../components/WOITextField';

export default {
    title: 'WOI Text Field',
    component: WOITextField,
    tags: ['autodocs'],
};

// placeholder?: string;

//     fontSize?: string;
//     fontWeight?: string;
//     fontFamily?: string;
//     fontDecoration?: string;
//     color?: string;

//     label?: string;
//     labelFontSize?: string;
//     labelFontWeight?: string;
//     labelFontFamily?: string;
//     labelFontDecoration?: string;
//     labelColor?: string;

//     leftIconSize?: string;
//     leftIconColor?: string;
//     leftIconWeight?: string;

//     rightIconSize?: string;
//     rightIconColor?: string;
//     rightIconWeight?: string;

//     backgroundColor?: string;
//     backgroundOpacity?: string;
//     borderColor?: string;
//     borderWidth?: string;
//     borderRadius?: string;
//     borderType?: string;
//     boxShadow?: string;

export const Default = {
    args: {
        isDisabled: false,

        borderColor: '#007EDA',
        backgroundColor: '#F3F7FD',
        backgroundOpacity: '1',
        borderRadius: '6px',
        borderWidth: '1px',
        borderType: 'solid',
        placeholder: 'Placeholder Text',

        fontSize: '16px',
        fontWeight: '400',
        fontFamily: 'Roboto',
        fontDecoration: 'none',
        color: '#007EDA',

        label: 'Label Text',
        supportingText: 'Supporting Text',
        labelFontSize: '16px',
        labelFontWeight: '400',
        labelFontFamily: 'Roboto',
        labelFontDecoration: 'none',
        labelColor: '#000000',

        leftIcon: '',
        leftIconSize: '24px',
        leftIconColor: '#007EDA',
        leftIconWeight: '400',

        rightIcon: '',
        rightIconSize: '24px',
        rightIconColor: '#007EDA',
        rightIconWeight: '400',

        boxShadow: 'none',


    },
};