import React, { useState } from 'react';
import styled from "styled-components";
import SpinnerSVG from './SpinnerSVG';

interface LoaderButtonProps {
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
    clickFunction?: Function,
    borderRadius?: string,
    loading?: boolean,
    loadingIcon?: any
}

const LoaderButton = (props: LoaderButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { loading, loadingIcon, text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, borderRadius } = props

    // Created styled button widget
    const LoaderButtonWidget = styled.button`
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
    `;

    // Button properties
    var buttonProperties = {
        backgroundColor: onHover ? hoverBackgroundColor : backgroundColor,
        TextTransform: textTransform,
        width, height, borderRadius,
    }

    // Label properties
    var textProperties = {
        color: onHover ? hoverTextColor : textColor,
        fontSize, fontWeight, TextTransform: textTransform,
        paddingLeft: '10px',
        paddingRight: '10px'
    }


    return (
        <LoaderButtonWidget style={{ ...buttonProperties }}
            onMouseEnter={() => setHoverState(true)} // set hover state true and change button background
            onMouseLeave={() => setHoverState(false)} // unset hover state and revert hover changes to default
        >

            {
                loading ?

                    // loading spinner
                    loadingIcon ? loadingIcon :
                        <SpinnerSVG width='50px' height='50px' />
                    :
                    // button text
                    <p style={{ ...textProperties }}>{text}</p>
            }


        </LoaderButtonWidget>
    );
};

export default LoaderButton;