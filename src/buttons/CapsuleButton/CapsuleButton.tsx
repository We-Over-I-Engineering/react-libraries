import React, { useState } from 'react';
import styled from "styled-components";

interface CapsuleButtonProps {
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
    openLink?: string,
    clickFunction?: Function,
    prefixIcon?: string,
    suffixIcon?: string,
    gradientDirection?: string,
    gradientColors?: string[],
    isDisabled?: boolean
}

const CapsuleButton = (props: CapsuleButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, openLink, clickFunction, prefixIcon, suffixIcon, gradientDirection, gradientColors, isDisabled } = props

    // Created styled button widget
    const CapsuleButtonWidget = styled.button`
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
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        TextTransform: textTransform,
        width, height,
        backgroundImage: gradientDirection ? `linear-gradient(to ${gradientDirection}, ${gradientColors?.join(', ')})` : undefined
    }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        TextTransform: textTransform,
        cursor: 'not-allowed',
        width, height,
        backgroundImage: 'none'
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight, TextTransform: textTransform,
        paddingLeft: '10px',
        paddingRight: '10px'
    }


    return (
        <CapsuleButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => openLink ? window.open(openLink, '_blank') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >

            {/* Button Prefix Icon */}
            {prefixIcon && <img src={prefixIcon} alt="prefixIcon" />}

            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>

            {/* Button Suffix Icon */}
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" />}
        </CapsuleButtonWidget>
    );
};

export default CapsuleButton;