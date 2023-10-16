import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ContainerWidget, TextAreaWidget, TextFieldWidget } from "./index.style";

export const SuccessIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" fill="#00B87C" />
    </svg>`;
export const ErrorIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="#ff3333" />
    </svg>`;

export interface TextFieldProps {
    // Label Text Properties
    label?: string
    labelFontSize?: number
    labelFontWeight?: string
    labelFontFamily?: string
    labelFontDecoration?: string
    labelColor?: string
    // Placeholder Properties
    placeholder?: string
    placeholderFontSize?: number
    placeholderFontWeight?: string
    placeholderFontFamily?: string
    placeholderFontDecoration?: string
    placeholderColor?: string
    // Input Field Properties
    type?: string
    fontSize?: number
    fontWeight?: string
    fontFamily?: string
    fontDecoration?: string
    color?: string
    multline?: number
    // Left Icon 
    leftIcon?: string
    leftIconSize?: number
    leftIconColor?: string
    // Right Icon
    rightIcon?: string
    rightIconSize?: number
    rightIconColor?: string
    // Container
    backgroundColor?: string
    backgroundOpacity?: string
    borderColor?: string
    borderWidth?: number
    borderRadius?: number
    borderType?: string
    boxShadow?: string
    // Supporting Text Properties
    supportingText?: string
    supportingTextFontSize?: number
    supportingTextFontWeight?: string
    supportingTextFontFamily?: string
    supportingTextFontDecoration?: string
    supportingTextColor?: string
    // Actions
    onComplete?: () => void
    // Status
    isDisabled?: boolean
}


const WOITextField: React.FC<TextFieldProps> = (props) => {
    const [input, setInput] = useState('');
    const [isError, setError] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [focusState, setFocusState] = useState(false);
    var { type, label, labelFontSize, labelFontWeight, labelFontFamily, labelFontDecoration, labelColor, placeholder,
        leftIcon, leftIconSize, leftIconColor, rightIcon, rightIconSize, rightIconColor, isDisabled, multline,
        supportingText, supportingTextFontSize, supportingTextFontWeight, supportingTextFontFamily, supportingTextFontDecoration, supportingTextColor,
    } = props;

    // Label
    const LabelTextWidget = styled.label`
        display: flex;
        flex-direction: column;
        margin: 4px 0px 12px 4px;
        font-family: ${labelFontFamily ? labelFontFamily : 'Nunito Sans'};
        font-size: ${labelFontSize ? labelFontSize + 'px' : '16px'};
        font-style: normal;
        font-weight: ${labelFontWeight ? labelFontWeight : '400'};
        line-height: normal;
        text-decoration: ${labelFontDecoration ? labelFontDecoration : 'normal'};
        color: ${labelColor ? labelColor : '#000000'};
    `;

    // Left Icon Widget
    const LeftIconWidget = styled.div`
        position: absolute;
        left: 3%;
        top: ${multline ? '20%' : '50%'};
        transform: ${multline ? 'translate(-20%, -50%)' : 'translate(-8%, -50%)'};
        height: ${leftIconSize}px;
        width: ${leftIconSize}px;
        opacity: ${isDisabled ? 0.5 : 1};
        cursor: ${isDisabled ? 'not-allowed' : 'auto'};
        svg path{
            fill: ${isSuccess ? '#00B87C' : isError ? '#ff3333' : focusState ? props.borderColor : leftIconColor}
        }
    `;

    // Right Icon Widget
    const RightIconWidget = styled.div`
        position: absolute;
        right: 3%;
        top: ${multline ? '20%' : '50%'};
        transform: ${multline ? 'translate(-20%, -50%)' : 'translate(-8%, -50%)'};
        height: ${rightIconSize}px;
        width: ${rightIconSize}px;
        opacity: ${isDisabled ? 0.2 : 1};
        cursor: ${isDisabled ? 'not-allowed' : 'auto'};
        svg path{
            fill: ${isSuccess ? '#00B87C' : isError ? '#ff3333' : focusState ? props.borderColor : rightIconColor}
        }
    `;

    // Supporting Text Widget
    const SupportingTextWidget = styled.p`
        display: flex;
        flex-direction: column;
        margin: 12px 0px 0px 4px;
        font-family: ${supportingTextFontFamily ? supportingTextFontFamily : 'Nunito Sans'};
        font-size: ${supportingTextFontSize ? supportingTextFontSize + 'px' : '12px'};
        font-style: normal;
        font-weight: ${supportingTextFontWeight ? supportingTextFontWeight : '400'};
        line-height: normal;
        text-decoration: ${supportingTextFontDecoration ? supportingTextFontDecoration : 'normal'};
        color: ${supportingTextColor ? supportingTextColor : '#000000'};
    `;

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (!isDisabled) {

                // if the click is outside the input container,
                // if it has input, then focus and validate
                // if no input, then just go out of focus

                if (containerRef.current && (containerRef.current as Element).contains(e.target as Node) &&
                    inputRef.current && inputRef.current !== e.target) {

                    if ((inputRef.current as HTMLInputElement).value) {
                        inputValidator((inputRef.current as HTMLInputElement).value);

                    } else {
                        setFocusState(false)
                    }

                } else {


                    if (containerRef.current && (containerRef.current as Element).contains(e.target as Node)) {
                        setFocusState(true);
                    } else {
                        if (inputRef.current && !(inputRef.current as HTMLInputElement).value) {
                            setFocusState(false);
                            setError(false);
                            setSuccess(false);
                        }
                        setFocusState(false);
                    }


                }
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isDisabled]);

    const containerRef: React.MutableRefObject<null> = useRef(null);
    const inputRef: React.MutableRefObject<null> = useRef(null);


    // Input validator
    const inputValidator = (value: any) => {

        setInput(value);
        setFocusState(false);
        if (value === '') { setError(true); setSuccess(false); }
        else { setSuccess(true); setError(false); }
    }

    return (
        <div ref={containerRef}>
            <LabelTextWidget>{label}</LabelTextWidget>
            <ContainerWidget variant={{ ...props, isSuccess, isError }}>
                {leftIcon ? <LeftIconWidget dangerouslySetInnerHTML={{ __html: leftIcon }} /> : null}
                {multline ?
                    <TextAreaWidget
                        defaultValue={input}
                        rows={multline}
                        ref={inputRef}
                        disabled={isDisabled}
                        placeholder={placeholder}
                        variant={{ ...props, isSuccess, isError }}
                    /> : <TextFieldWidget
                        type={type || "text"}
                        defaultValue={input}
                        ref={inputRef}
                        disabled={isDisabled}
                        placeholder={placeholder}
                        variant={{ ...props, isSuccess, isError }}
                    />}
                {rightIcon ? <RightIconWidget dangerouslySetInnerHTML={{ __html: isSuccess ? SuccessIcon : isError ? ErrorIcon : rightIcon }} /> : null}
            </ContainerWidget >
            <SupportingTextWidget>{supportingText}</SupportingTextWidget>
        </div>
    );
};

export default WOITextField;