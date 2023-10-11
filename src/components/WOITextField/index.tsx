import { useState } from "react";
import styled from "styled-components";
import { default as ErrorIcon } from "../../assets/svgs/WOITextFieldErrorIcon.svg";
import { default as SuccessIcon } from "../../assets/svgs/WOITextFieldSuccessIcon.svg";

export interface TextFieldProps {
    // Label Text Properties
    label?: string
    labelFontSize?: string
    labelFontWeight?: string
    labelFontFamily?: string
    labelFontDecoration?: string
    labelColor?: string

    // Placeholder Properties
    placeholder?: string
    placeholderFontSize?: string
    placeholderFontWeight?: string
    placeholderFontFamily?: string
    placeholderFontDecoration?: string
    placeholderColor?: string

    // Input Field Properties
    fontSize?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontDecoration?: string;
    color?: string;

    // Left Icon 
    leftIcon?: string
    leftIconSize?: number;
    leftIconColor?: string;

    // Right Icon
    rightIcon?: string;
    rightIconSize?: number;
    rightIconColor?: string;

    // Container
    backgroundColor?: string;
    backgroundOpacity?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    borderType?: string;
    boxShadow?: string;

    // Supporting Text Properties
    supportingText?: string;
    supportingTextFontSize?: string;
    supportingTextFontWeight?: string;
    supportingTextFontFamily?: string;
    supportingTextFontDecoration?: string;
    supportingTextColor?: string;

    // Actions
    onComplete?: () => void;

    // Status
    isDisabled?: boolean;
}

const WOITextField = (props: TextFieldProps) => {
    const [input, setInput] = useState('');
    const [isError, setError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    var {
        label, labelFontSize, labelFontWeight, labelFontFamily, labelFontDecoration, labelColor,
        placeholder, placeholderFontSize, placeholderFontWeight, placeholderFontFamily, placeholderFontDecoration, placeholderColor,
        leftIcon, leftIconSize,
        rightIcon, rightIconSize,
        fontSize, fontFamily, fontWeight, color, backgroundColor, borderWidth, borderType, borderColor, borderRadius,
        supportingText, supportingTextFontSize, supportingTextFontWeight, supportingTextFontFamily, supportingTextFontDecoration, supportingTextColor,
        isDisabled
    } = props;


    // Created styled button widget
    const TextFieldWidget = styled.input`
        display: flex;
        align-items: center;
        width: 346px;
        height: 56px;
        padding: 0px 16px 0 40px;
        gap: 16px;
        outline: none;
        border-radius: ${borderRadius || '4px'};
        border: ${borderWidth || '1px'} ${borderType || 'solid'} ${isSuccess ? '#00B87C' : isError ? '#ff3333' : borderColor || '#00000050'};
        background: ${backgroundColor};
        color: ${color || '#000000'};
        font-family: ${fontFamily || 'Nunito Sans'};
        font-size: ${fontSize || '16px'};
        font-style: normal;
        text-transform: capitalize;
        font-weight: ${fontWeight || '400'};
        line-height: normal;
        opacity: ${isDisabled ? 0.5 : 1};
        cursor: ${isDisabled ? 'not-allowed' : 'auto'};
      
        &::placeholder,  &::-webkit-input-placeholder {
            font-family: ${placeholderFontFamily || 'Nunito Sans'};
            font-size: ${placeholderFontSize || '14px'};
            font-weight: ${placeholderFontWeight || '400'};
            text-decoration: ${placeholderFontDecoration || 'normal'};
            color: ${placeholderColor || '#000000'};
            opacity: ${isDisabled ? 0.5 : 1};
        }
        
        &:-ms-input-placeholder {
            font-family: ${placeholderFontFamily || 'Nunito Sans'};
            font-size: ${placeholderFontSize || '12px'};
            font-weight: ${placeholderFontWeight || '400'};
            text-decoration: ${placeholderFontDecoration || 'normal'};
            color: ${placeholderColor || '#000000'};
            opacity: ${isDisabled ? 0.5 : 1};
        }

        &:focus {
            outline: none;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border: ${borderWidth || '1px'} ${borderType || 'solid'} ${isSuccess ? '#00B87C' : isError ? '#ff3333' : borderColor || '#E0E0E0'};
            &::placeholder {
                opacity: 0;
            }
        }
    `;

    const ContainerWidget = styled.div`
        position: relative;
        width: max-content;
        height: auto;
    `;

    const LeftIconWidget = styled.object`
        position: absolute;
        left: 3%;
        top: 50%;
        transform: translate(-8%, -50%);
    `;

    const RightIconWidget = styled.object`
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translate(-8%, -50%);
    `;

    const LabelTextWidget = styled.label`
        display: flex;
        flex-direction: column;
        margin: 4px 0px 12px 4px;
        font-family: ${labelFontFamily || 'Nunito Sans'};
        font-size: ${labelFontSize || '16px'};
        font-style: normal;
        font-weight: ${labelFontWeight || '400'};
        line-height: normal;
        text-decoration: ${labelFontDecoration || 'normal'};
        color: ${labelColor || '#000000'};
    `;

    const SupportingTextWidget = styled.p`
        display: flex;
        flex-direction: column;
        margin: 12px 0px 0px 4px;
        font-family: ${supportingTextFontFamily || 'Nunito Sans'};
        font-size: ${supportingTextFontSize || '12px'};
        font-style: normal;
        font-weight: ${supportingTextFontWeight || '400'};
        line-height: normal;
        text-decoration: ${supportingTextFontDecoration || 'normal'};
        color: ${supportingTextColor || '#000000'};
    `;

    const handleInput = (e: any) => setInput(e.target.value);

    const validateField = () => {
        if (input === '') { setError(true); }
        else { setSuccess(true); }
    }

    return (
        <>
            <LabelTextWidget>{label}</LabelTextWidget>
            <ContainerWidget>
                <TextFieldWidget placeholder={placeholder} disabled={isDisabled}
                    onBlur={validateField}
                    onDragEnter={validateField}
                    value={input}
                    onChange={handleInput} />
                <LeftIconWidget data={leftIcon} height={leftIconSize} width={leftIconSize} />
                <RightIconWidget data={isSuccess ? SuccessIcon : isError ? ErrorIcon : rightIcon} height={rightIconSize} width={rightIconSize} />
            </ContainerWidget>
            <SupportingTextWidget>{supportingText}</SupportingTextWidget>
        </>
    );
};

export default WOITextField;