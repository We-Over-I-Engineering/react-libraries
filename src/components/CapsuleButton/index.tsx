import { useState } from 'react';
import styled from "styled-components";

interface CapsuleButtonProps {
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
    prefixIcon?: string
    suffixIcon?: string
    isDisabled?: boolean
}

const CapsuleButton = (props: CapsuleButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, backgroundColor, textTransform, openLinkInNewTab, width, height, hoverTextColor, hoverBackgroundColor, openLink, clickFunction, prefixIcon, suffixIcon, isDisabled } = props

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
        text-transform: ${textTransform || 'capitalize'};
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        width, height,
    }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        cursor: 'not-allowed',
        width, height,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight,
        marginLeft: 16,
        marginRight: 16
    }

    return (
        <CapsuleButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >

            {/* Button Prefix Icon */}
            {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }}  />}

            {/* Button Label */}
            <p style={{ ...textProperties }}>{text}</p>

            {/* Button Suffix Icon */}
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }}  />}
        </CapsuleButtonWidget>
    );
};

export default CapsuleButton;