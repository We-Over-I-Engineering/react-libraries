import { useState } from 'react';
import styled from "styled-components";

interface GradientIconButtonProps {
    text?: string
    textColor?: string
    fontSize?: number
    fontWeight?: number
    width?: number
    height?: number
    borderRadius?: number
    hoverTextColor?: string
    textTransform?: string
    openLink?: string,
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    prefixIcon?: string
    suffixIcon?: string
    gradientDirection: string
    hoverGradientDirection: string
    gradientColors: string[],
    hoverGradientColors: string[]
    isDisabled?: boolean
}

const GradientIconButton = (props: GradientIconButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, fontSize, fontWeight, width, height, borderRadius, hoverTextColor, textTransform, prefixIcon, suffixIcon, openLink, openLinkInNewTab, clickFunction, gradientDirection, gradientColors, hoverGradientDirection, hoverGradientColors, isDisabled } = props;

    // Created styled button widget
    const GradientIconButtonWidget = styled.button`
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
        width, height, borderRadius,
        backgroundImage: onHover ?
            `linear-gradient(to ${hoverGradientDirection}, ${hoverGradientColors?.join(', ')})`
            : `linear-gradient(to ${gradientDirection}, ${gradientColors?.join(', ')})`
    }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        cursor: 'not-allowed',
        width, height, borderRadius,
        backgroundImage: 'none'
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight,
        marginLeft: 16,
        marginRight: 16
    }

    return (
        <GradientIconButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
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
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }}  />}
        </GradientIconButtonWidget>
    );
};

export default GradientIconButton;