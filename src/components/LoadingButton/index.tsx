import { useState } from 'react';
import styled, { keyframes } from "styled-components";

interface LoaderButtonProps {
    text?: string
    textColor?: string
    fontSize?: number
    fontWeight?: number
    width?: number
    height?: number
    backgroundColor?: string
    hoverTextColor?: string
    hoverBackgroundColor?: string,
    textTransform?: string,
    clickFunction?: Function,
    borderRadius?: string,
    loading?: boolean,
    loadingIcon?: any
    loaderColor?: string
}

const LoaderButton = (props: LoaderButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { loading, loaderColor, text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, borderRadius } = props

    // Created styled button widget
    const LoaderButtonWidget = styled.button`
    display: flex;
    justify-content: center;
    font-family: 'Nunito Sans';
    align-items: center;
    text-align: center;
    box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
    outline: none !important;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    text-transform: ${textTransform || 'none'}; // Apply text-transform
  `;

    const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;

    const SpinnerWidget = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid ${loaderColor || '#000000'};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${spinner} 0.5s linear infinite;
  `;



    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        TextTransform: textTransform || 'none',
        width, height, borderRadius,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight, TextTransform: textTransform || 'none',
        paddingLeft: '10px',
        paddingRight: '10px'
    }


    return (
        <LoaderButtonWidget style={{ ...buttonProperties }}
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >
            {loading ? <SpinnerWidget /> : <p style={{ ...textProperties }}>{text}</p>}
        </LoaderButtonWidget >
    );
};

export default LoaderButton;