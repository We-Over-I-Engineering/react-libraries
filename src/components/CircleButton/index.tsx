import { useState } from 'react';
import styled from "styled-components";

interface CircleButtonProps {
    text?: string
    textColor?: string
    fontSize?: number
    fontWeight?: number
    backgroundColor?: string
    textTransform?: string
    width?: number
    height?: number
    hoverTextColor?: string
    hoverBackgroundColor?: string
    openLink?: string
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    isDisabled?: boolean
}

const CircleButton = (props: CircleButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, textTransform, width, height, hoverTextColor, hoverBackgroundColor, openLink, openLinkInNewTab, clickFunction, isDisabled } = props

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
        text-transform: ${textTransform || 'capitalize'};
    `;

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        cursor: 'not-allowed',
        width, height,
    }

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        width, height,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight,
    }

    return (
        <CircleButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >
            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>
        </CircleButtonWidget>
    );
};

export default CircleButton;