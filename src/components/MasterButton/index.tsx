import { useState } from 'react';
import styled from "styled-components";

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
    const [onHoverGradient, setHoverGradientState] = useState(false);



    const { text, textColor, hoverTextColor, fontSize, fontWeight, width, height, borderRadius, textTransform, backgroundColor, hoverBackgroundColor, loading, loaderColor, openLink, openLinkInNewTab, clickFunction, prefixIcon, suffixIcon, gradientDirection, gradientColors, hoverGradientDirection, hoverGradientColors, isDisabled } = props

    // Created styled button widget
    const ButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        font-family: 'Nunito Sans';
        align-items: center;
        text-align: center;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        outline: none !important;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        text-transform: ${textTransform || 'capitalize'};
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        width, height, borderRadius,
    }

    // Gradiant button properties
    var gradiantButtonProperties = {
        width, height, borderRadius,
        backgroundImage: onHoverGradient ?
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
        fontSize, fontWeight,
        marginLeft: text ? 10 : 0,
        marginRight: text ? 10 : 0,
    }



    return (
        <>
            {/* Button */}
            <ButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
                onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
                onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
                onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
                disabled={isDisabled}
            >
                {/* Button Prefix Icon */}
                {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} />}
                {/* Button Label */}
                <p style={{ ...textProperties, color: onHover ? hoverTextColor : textColor, }}>{text}</p>
                {/* Button Suffix Icon */}
                {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} />}
            </ButtonWidget>

            {/* Break */}
            <br /><br />

            {/* Gradient Button */}
            <ButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...gradiantButtonProperties }}
                onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
                onMouseEnter={() => setHoverGradientState(true)} // set hover state true and change button background
                onMouseLeave={() => setHoverGradientState(false)} // unset hover state and revert hover changes to default
                disabled={isDisabled}
            >

                {/* Button Prefix Icon */}
                {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}
                {/* Button Label */}
                <p style={{ ...textProperties, color: onHoverGradient ? hoverTextColor : textColor, }}>{`${text} Gradient Button`}</p>
                {/* Button Suffix Icon */}
                {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1 }} />}
            </ButtonWidget>

        </>
    );
};

export default Button;