import { useState } from 'react';
import styled from "styled-components";

interface IconButtonProps {
    text?: string
    textColor?: string
    hoverTextColor?: string
    fontSize?: number
    fontWeight?: number
    width?: number
    height?: number
    backgroundColor?: string
    hoverBackgroundColor?: string
    textTransform?: string
    borderRadius?: number
    openLink?: string
    openLinkInNewTab?: boolean,
    clickFunction?: () => void
    prefixIcon?: string
    suffixIcon?: string
    isDisabled?: boolean
}

const IconButton = (props: IconButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, openLink, openLinkInNewTab, clickFunction, prefixIcon, suffixIcon, isDisabled, borderRadius } = props

    // Created styled button widget
    const IconButtonWidget = styled.button`
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
        text-transform: ${textTransform || 'capitalize'};

    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        TextTransform: textTransform,
        width, height, borderRadius,
    }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        TextTransform: textTransform,
        cursor: 'not-allowed',
        width, height, borderRadius,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight, TextTransform: textTransform,
        marginLeft: text ? 10 : 0,
        marginRight: text ? 10 : 0,
    }


    return (
        <IconButtonWidget
            style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >
            {/* Button Prefix Icon */}
            {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}
            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>
            {/* Button Suffix Icon */}
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}
        </IconButtonWidget>
    );
};

export default IconButton;