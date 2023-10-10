import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export interface TextFieldProps {
    placeholder?: string;

    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontDecoration?: string;
    color?: string;

    label?: string;
    supportingText?: string;
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

    isDisabled?: boolean;
    isSuccess?: boolean;

}

const WOITextField = (props: TextFieldProps) => {
    const { supportingText, label, labelColor, labelFontDecoration, labelFontFamily, labelFontSize, labelFontWeight, placeholder, backgroundColor, borderWidth, borderType, borderColor, borderRadius, fontSize, fontFamily, fontWeight, fontDecoration, color, isDisabled, isSuccess } = props

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

    color: ${color || '#000000'};
    font-family: ${fontFamily || 'Roboto'};
    font-size: ${fontSize || '18px'};
    font-style: normal;
    font-weight: ${fontWeight || '400'};
    line-height: normal;
    opacity: ${isDisabled ? 0.5 : 1};
    cursor: ${isDisabled ? 'not-allowed' : 'auto'};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    }
    `;

    var successTextInputProperties = { border: '1px solid #00B87C', backgroundColor: 'green' } // Success Text Input Properties

    const LabelTextWidget = styled.label`
    display: flex;
    flex-direction: column;
    margin: 4px 0px 4px 4px;
    font-family: ${labelFontFamily || fontFamily || 'Roboto'};
    font-size: ${labelFontSize || fontSize || '14px'};
    font-style: normal;
    font-weight: ${labelFontWeight || fontWeight || '400'};
    line-height: normal;
    color: ${labelColor || '#000000'};
    opacity: ${isDisabled ? 0.5 : 1};
    cursor: ${isDisabled ? 'not-allowed' : 'auto'};
    `;

    return (
        <>
            <LabelTextWidget>{label}</LabelTextWidget>
            <TextFieldWidget placeholder={placeholder} disabled={isDisabled} />
            <LabelTextWidget>{supportingText}</LabelTextWidget>
        </>
    );
};

export default WOITextField;