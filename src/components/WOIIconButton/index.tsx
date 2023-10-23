import { useState } from 'react';
import styled, { keyframes } from "styled-components";

export interface IconButtonProps {
    size?: number
    borderRadius?: number
    backgroundColor?: string
    hoverBackgroundColor?: string
    borderColor?: string
    borderThickness?: string
    loading?: boolean
    loaderColor?: string
    openLink?: string
    openLinkInNewTab?: boolean
    clickFunction?: () => void
    icon?: string
    iconColor?: string
    iconsSize?: number,
    isDisabled?: boolean,
}

const WOIIconButton = (props: IconButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { size, borderRadius = 0, backgroundColor = 'transparent', hoverBackgroundColor, borderColor = 'transparent', borderThickness = '0', loading = false,
        loaderColor = 'black', openLink, openLinkInNewTab = true, clickFunction, icon, iconColor, iconsSize, isDisabled = false } = props

    // Created styled button widget
    const IconButtonWidget = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito Sans';
        box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
        outline: none !important;
        border-radius: ${borderRadius}px;
        border-color: ${borderColor};
        border-style: solid;
        border-width: ${borderThickness};
        cursor: pointer;
    `;

    var buttonProperties = { backgroundColor: onHover ? (hoverBackgroundColor || backgroundColor) : backgroundColor, width: size, height: size } // Button properties

    var disabledButtonProperties = { backgroundColor: '#D9D9D9', cursor: 'not-allowed', width: size, height: size } // Disabled Button Properties

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
        <IconButtonWidget
            style={isDisabled ? { ...disabledButtonProperties } : { ...buttonProperties }}
            onClick={() => isDisabled ? null : openLink ? window.open(openLink, openLinkInNewTab ? '_blank' : '_self') : clickFunction?.()} // click to open web pages or run function
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
            disabled={isDisabled}
        >
            {loading ? < SpinnerWidget /> :
                <img src={icon} alt="icon" height={iconsSize} width={iconsSize} style={{ opacity: isDisabled ? 0.1 : 1, fill: iconColor }} />}
        </IconButtonWidget>
    );
};

export default WOIIconButton;