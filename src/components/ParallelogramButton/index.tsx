import { useState } from 'react';
import styled from "styled-components";

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
    openLink?: string,
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    prefixIcon?: string
    suffixIcon?: string
    isDisabled?: boolean
    skewType?: string
    skew?: number
}

const ParallelogramButton = (props: ParallelogramButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const { text, textColor, hoverTextColor, fontSize, fontWeight, width, height, backgroundColor, hoverBackgroundColor, textTransform, openLink, openLinkInNewTab, clickFunction, prefixIcon, suffixIcon, isDisabled, skewType, skew } = props;

    // Created styled button widget
    const ParallelogramButtonRightInclinedWidget = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        text-align: center;
        border: 0px;
        transform: skew(${skewType === 'left' ? null : '-'}${skew}deg);
        cursor: pointer;
        text-decoration: none;
        background-color: #e64178;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        text-transform: ${textTransform || 'capitalize'};
    `;

    // Button properties
    var buttonProperties = { width, height }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        cursor: 'not-allowed',
        width, height,
    }

    // Label properties
    var textProperties = {
        fontSize, fontWeight,
        marginLeft: text ? 10 : 0,
        marginRight: text ? 10 : 0,
    }


    return (
        <ParallelogramButtonRightInclinedWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties, backgroundColor: (onHover && hoverIndex === 0) ? hoverBackgroundColor : backgroundColor }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => { setHoverIndex(0); setHoverState(true) }} // set hover state true and change button background
            onMouseLeave={() => { setHoverIndex(-1); setHoverState(false) }} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >
            {/* Button Prefix Icon */}
            {prefixIcon && <img src={prefixIcon} alt="prefixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)` }} />}
            {/* Button Label */}
            <p style={{ ...textProperties, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)`, color: (onHover && hoverIndex === 0) ? hoverTextColor : textColor }}>{text}</p>
            {/* Button Suffix Icon */}
            {suffixIcon && <img src={suffixIcon} alt="suffixIcon" height={16} width={16} style={{ opacity: isDisabled ? 0.1 : 1, transform: `skew(${skewType === 'left' ? '-' : null}${skew}deg)` }} />}
        </ParallelogramButtonRightInclinedWidget>
    );
};

export default ParallelogramButton;