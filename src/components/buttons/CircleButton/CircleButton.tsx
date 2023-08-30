import React, { useState } from 'react';
import styled from "styled-components";

interface CircleButtonProps {
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
}

const CircleButton = (props: CircleButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, openLink } = props

     // Created styled button widget
    const CircleButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        font-family: 'Nunito Sans';
        align-items: center;
        text-align: center;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        outline: none !important;
        border-radius: 100%;
        border: none;
        cursor: pointer;
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        TextTransform: textTransform,
        width, height,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight, TextTransform: textTransform
    }

    return (
        <CircleButtonWidget style={{ ...buttonProperties }}
            onClick={() => window.open(openLink, '_blank')} // click to open web pages
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >
            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>
        </CircleButtonWidget>
    );
};

export default CircleButton;