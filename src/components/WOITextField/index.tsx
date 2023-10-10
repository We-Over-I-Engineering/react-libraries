import styled from "styled-components";

export interface TextFieldProps {
    placeholder?: string;

    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontDecoration?: string;
    color?: string;

    label?: string;
    labelFontSize?: string;
    labelFontWeight?: string;
    labelFontFamily?: string;
    labelFontDecoration?: string;
    labelColor?: string;

    leftIconSize?: string;
    leftIconColor?: string;
    leftIconWeight?: string;

    rightIconSize?: string;
    rightIconColor?: string;
    rightIconWeight?: string;

    backgroundColor?: string;
    backgroundOpacity?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    borderType?: string;
    boxShadow?: string;

    onChange?: () => void;
    onComplete?: () => void;

}

const WOITextField = (props: TextFieldProps) => {
    const { placeholder, backgroundColor, borderWidth, borderType, borderColor, borderRadius } = props

    // Created styled button widget
    const TextFieldWidget = styled.input`
    display: flex;
    width: 346px;
    height: 56px;
    padding: 0px 16px;
    align-items: center;
    gap: 16px;
    border-radius: ${borderRadius || '4px'};
    border: ${borderWidth || '1px'} ${borderType || 'solid'} ${borderColor || '#E0E0E0'};
    background: ${backgroundColor};
    `;

    return (
        <TextFieldWidget placeholder={placeholder} />
    );
};

export default WOITextField;