import React, { useState } from 'react';
import styled from "styled-components";

interface RectangleButtonProps {
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
    clickFunction?: Function
}

const RectangleButton = (props: RectangleButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, openLink, clickFunction } = props;

    // Created styled button widget
    const RectangleButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        font-family: 'Nunito Sans';
        align-items: center;
        text-align: center;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        outline: none !important;
        border-radius: 8px;
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
        <RectangleButtonWidget style={{ ...buttonProperties }}
            onClick={() => openLink ? window.open(openLink, '_blank') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >
            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>
        </RectangleButtonWidget>
    );
};

export default RectangleButton;