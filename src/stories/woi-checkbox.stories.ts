import WOICheckBox from "../components/WOICheckBox";

export default {
    title: 'WOI Checkbox',
    component: WOICheckBox,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        size: 32,
        borderRadius: 8,
        borderWidth: 3,
        activeBorderColor: '#33B8FF',
        inActiveBorderColor: '#D3D3D3',
        activeBackgroundColor: '#FFFFFF',
        inActiveBackgroundColor: '#FFFFFF',
        icon: 'https://cdn-icons-png.flaticon.com/512/3106/3106690.png',
        iconSize: 36,
        isChecked: false,
    },
};