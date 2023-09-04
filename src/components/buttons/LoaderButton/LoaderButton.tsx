import React, { useState } from 'react';
import styled from "styled-components";

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
    loading?: boolean
}

const LoaderButton = (props: LoaderButtonProps) => {
    const [onHover, setHoverState] = useState(false);
    const { loading, text, textColor, fontSize, fontWeight, backgroundColor, width, height, hoverTextColor, hoverBackgroundColor, textTransform, borderRadius } = props

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

    // Disabled Button Properties
    var disabledButtonProperties = {
        backgroundColor: '#D9D9D9',
        TextTransform: textTransform,
        cursor: 'not-allowed',
        width, height, borderRadius,
        backgroundImage: 'none'
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
                    <div className="spinner-border text-light" role="status" style={{ display: 'none' }}>
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    // button text
                    <p style={{ ...textProperties }}>{text}</p>
            }


        </LoaderButtonWidget>
    );
};

export default LoaderButton;