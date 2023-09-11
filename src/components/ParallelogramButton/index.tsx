import React, { useState } from 'react';
import styled from "styled-components";

interface ParallelogramButtonProps {
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
    clickFunction?: Function,
    prefixIcon?: string,
    suffixIcon?: string,
    gradientDirection?: string,
    gradientColors?: string[],
    isDisabled?: boolean
}

const ParallelogramButton = (props: ParallelogramButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(-1);
    const { text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, openLink, clickFunction, prefixIcon, suffixIcon, gradientDirection, gradientColors, isDisabled } = props

    // Created styled button widget
    const ParallelogramButtonRightInclinedWidget = styled.button`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        text-align: center;
        border: 0px;
        transform: skew(-20deg);
        cursor: pointer;
        text-decoration: none;
        background-color: #e64178;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
    `;

    const ParallelogramButtonLeftInclinedWidget = styled.button`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        text-align: center;
        border: 0px;
        transform: skew(20deg);
        cursor: pointer;
        text-decoration: none;
        background-color: #33B8FF;
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
    `;

    // Button properties
    var buttonProperties = {
        TextTransform: textTransform,
        width, height,
        backgroundImage: gradientDirection ? `linear-gradient(to ${gradientDirection}, ${gradientColors?.join(', ')})` : undefined
    }

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        TextTransform: textTransform,
        cursor: 'not-allowed',
        width, height,
        backgroundImage: 'none'
    }

    // Label properties
    var textProperties = {
        fontSize, fontWeight, TextTransform: textTransform,
        paddingLeft: '10px',
        paddingRight: '10px',
    }


    return (
        <>
            <ParallelogramButtonRightInclinedWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties, backgroundColor: (onHover && hoverIndex === 0) ? hoverBackgroundColor : backgroundColor }}
                onClick={() => openLink ? window.open(openLink, '_blank') : clickFunction?.()} // click to open web pages or run function
                onMouseEnter={() => { setHoverIndex(0); setHoverState(true) }} // set hover state true and change button background
                onMouseLeave={() => { setHoverIndex(-1); setHoverState(false) }} // unset hover state and revert hover changes to default
                disabled={isDisabled}
            >

                {/* Button Prefix Icon */}
                {prefixIcon && <img src={prefixIcon} alt="prefixIcon" />}

                {/* Button Label */}
                <p style={{ ...textProperties, transform: 'skew(20deg)', color: (onHover && hoverIndex === 0) ? hoverTextColor : textColor }}>{text}</p>

                {/* Button Suffix Icon */}
                {suffixIcon && <img src={suffixIcon} alt="suffixIcon" />}
            </ParallelogramButtonRightInclinedWidget>
            <br />
            <ParallelogramButtonLeftInclinedWidget style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties, backgroundColor: (onHover && hoverIndex === 1) ? hoverBackgroundColor : backgroundColor }}
                onClick={() => openLink ? window.open(openLink, '_blank') : clickFunction?.()} // click to open web pages or run function
                onMouseEnter={() => { setHoverIndex(1); setHoverState(true) }} // set hover state true and change button background
                onMouseLeave={() => { setHoverIndex(-1); setHoverState(true) }}// unset hover state and revert hover changes to default
                disabled={isDisabled}
            >

                {/* Button Prefix Icon */}
                {prefixIcon && <img src={prefixIcon} alt="prefixIcon" />}

                {/* Button Label */}
                <p style={{ ...textProperties, transform: 'skew(-20deg)', color: (onHover && hoverIndex === 1) ? '#33B8FF' : textColor }}>{text}</p>

                {/* Button Suffix Icon */}
                {suffixIcon && <img src={suffixIcon} alt="suffixIcon" />}
            </ParallelogramButtonLeftInclinedWidget>

        </>
    );
};

export default ParallelogramButton;