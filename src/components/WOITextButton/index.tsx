import { useState } from 'react';
import styled, { keyframes } from "styled-components";

interface ButtonProps {
    text?: string
    textColor?: string
    hoverTextColor?: string
    fontSize?: number
    fontWeight?: number
    width?: number
    height?: number
    borderRadius?: number
    textTransform?: string
    backgroundColor?: string
    hoverBackgroundColor?: string
    borderColor?: string
    borderThickness?: string
    loading?: boolean
    loaderColor?: string
    openLink?: string
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    prefixIcon?: string,
    suffixIcon?: string,
    gradientDirection?: string,
    gradientColors?: string[],
    hoverGradientDirection?: string
    hoverGradientColors?: string[],
    isDisabled?: boolean,
}

const Button = (props: ButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { text, textColor, hoverTextColor, fontSize, fontWeight, width, height, borderRadius, borderThickness, borderColor, textTransform, backgroundColor, hoverBackgroundColor, loading, loaderColor, openLink, openLinkInNewTab, clickFunction, prefixIcon, suffixIcon, gradientDirection, gradientColors, hoverGradientDirection, hoverGradientColors, isDisabled } = props

    // Created styled button widget
    const ButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        font-family: 'Nunito Sans';
        align-items: center;
        text-align: center;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        outline: none !important;
        border-radius: ${borderRadius}px;
        border-color: ${borderColor};
        border-style: solid;
        border-width: ${borderThickness};
        cursor: pointer;
        text-transform: ${textTransform || 'capitalize'};
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        width, height,
        backgroundImage: onHover ?
            `linear-gradient(to ${hoverGradientDirection}, ${hoverGradientColors?.join(', ')})`
            : `linear-gradient(to ${gradientDirection}, ${gradientColors?.join(', ')})`
    }

    var disabledButtonProperties = { backgroundColor: '#D9D9D9', cursor: 'not-allowed', width, height, backgroundImage: 'none' } // Disabled Button Properties

    var textProperties = { fontSize, fontWeight, marginLeft: text ? 10 : 0, marginRight: text ? 10 : 0, } // Label properties

    const spinner = keyframes`0% { transform: rotate(0deg)} 100% {transform: rotate(360deg)}`;

    const SpinnerWidget = styled.div`
        border: 3px solid #f3f3f3;
        border-top: 3px solid ${loaderColor || '#000000'};
        border-radius: 50%;
        width: 24px;
        height: 24px;
        animation: ${spinner} 0.5s linear infinite;
    `;

    return (
        <ButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >
            {/* Prefix Icon */}
            {!loading && prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}

            {/* Loading Spinner + Text */}
            {loading ? <SpinnerWidget /> :
                < p style={{ ...textProperties, color: onHover ? hoverTextColor : textColor, opacity: isDisabled ? 0.1 : 1 }}>{text}</p>}

            {/* Suffix Icon */}
            {!loading && suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}
        </ButtonWidget>
    );
};

export default Button;