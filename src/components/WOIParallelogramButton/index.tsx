import { useState } from 'react';
import styled, { keyframes } from "styled-components";

interface ParallelogramButtonProps {
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
    borderColor?: string
    borderThickness?: string
    loading?: boolean
    loaderColor?: string
    openLink?: string,
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    prefixIcon?: string
    suffixIcon?: string
    gradientDirection?: string,
    gradientColors?: string[],
    hoverGradientDirection?: string
    hoverGradientColors?: string[],
    isDisabled?: boolean
    skewType?: string
    skew?: number
}

const WOIParallelogramButton = (props: ParallelogramButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const { text, textColor, hoverTextColor, fontSize, fontWeight, width, height, backgroundColor, hoverBackgroundColor, borderColor, borderThickness, loading, loaderColor, gradientDirection, gradientColors, hoverGradientDirection, hoverGradientColors, textTransform, openLink, openLinkInNewTab, clickFunction, prefixIcon, suffixIcon, isDisabled, skewType, skew } = props;

    // Created styled button widget
    const ParallelogramButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        text-align: center;
        transform: skew(${skewType === 'left' ? null : '-'}${skew}deg);
        cursor: pointer;
        text-decoration: none;
        outline: none !important;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        border-color: ${borderColor};
        border-style: solid;
        border-width: ${borderThickness};
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
        <ParallelogramButtonWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties, backgroundColor: (onHover && hoverIndex === 0) ? hoverBackgroundColor : backgroundColor }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => { setHoverIndex(0); setHoverState(true) }} // set hover state true and change button background
            onMouseLeave={() => { setHoverIndex(-1); setHoverState(false) }} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >
            {/* Button Prefix Icon */}
            {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)` }} />}

            {/* Button Label */}
            {loading ? <SpinnerWidget style={{ transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)` }} /> :
                <p style={{ ...textProperties, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)`, color: (onHover && hoverIndex === 0) ? hoverTextColor : textColor }}>{text}</p>}

            {/* Button Suffix Icon */}
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)` }} />}
        </ParallelogramButtonWidget>
    );
};

export default WOIParallelogramButton;