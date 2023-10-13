import styled from "styled-components";

type Props = {
    variant: {
        borderWidth?: number
        borderType?: string
        isSuccess: boolean
        isError: boolean
        borderColor?: string
        fontFamily?: string
        color?: string
        backgroundColor?: string
        borderRadius?: number
        fontSize?: number
        fontWeight?: string
        isDisabled?: boolean
        placeholderFontFamily?: string
        placeholderFontSize?: number
        placeholderFontWeight?: string
        placeholderFontDecoration?: string
        placeholderColor?: string
    }
}

// Created styled button widget
export const TextFieldWidget = styled.input<Props>`
    display: flex;
    align-items: center;
    width: 346px;
    height: 56px;
    padding: 0px 16px 0 40px;
    gap: 16px;
    outline: none;
    font-style: normal;
    text-transform: capitalize;
    line-height: normal;
    transition: 0.5s all ease-out;
    border-width: ${(props) => props.variant.borderWidth ? props.variant.borderWidth + 'px' : '1px'};
    border-style: ${(props) => props.variant.borderType ? props.variant.borderType : 'solid'};
    border-color: ${(props) => props.variant.isSuccess ? '#00B87C' : props.variant.isError ? '#ff3333' : '#00000050'};
    font-family: ${(props) => props.variant.fontFamily ? props.variant.fontFamily : 'Nunito Sans'};
    color: ${(props) => props.variant.color ? props.variant.color : '#000000'};
    background: ${(props) => props.variant.backgroundColor ? props.variant.backgroundColor : '#00000050'};
    border-radius: ${(props) => props.variant.borderRadius ? props.variant.borderRadius + 'px' : '4px'};
    font-size: ${(props) => props.variant.fontSize ? props.variant.fontSize + 'px' : '16px'};
    font-weight: ${(props) => props.variant.fontWeight ? props.variant.fontWeight : '400'};
    opacity: ${(props) => props.variant.isDisabled ? 0.5 : 1};
    cursor: ${(props) => props.variant.isDisabled ? 'not-allowed' : 'auto'};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-width: ${(props) => props.variant.borderWidth ? props.variant.borderWidth + "px" : '1px'};
        border-style: ${(props) => props.variant.borderType ? props.variant.borderType : 'solid'};
        border-color: ${(props) => props.variant.isSuccess ? '#00B87C' : props.variant.isError ? '#ff3333' : props.variant.borderColor ? props.variant.borderColor : '#E0E0E0'};
        background: ${(props) => props.variant.borderColor ? props.variant.borderColor + '20' : '#00000050'};
    }

    &::placeholder,  &::-webkit-input-placeholder {
        font-family: ${(props) => props.variant.placeholderFontFamily ? props.variant.placeholderFontFamily : 'Nunito Sans'};
        font-size: ${(props) => props.variant.placeholderFontSize ? props.variant.placeholderFontSize + 'px' : '14px'};
        font-weight: ${(props) => props.variant.placeholderFontWeight ? props.variant.placeholderFontWeight : '400'};
        text-decoration: ${(props) => props.variant.placeholderFontDecoration ? props.variant.placeholderFontDecoration : 'normal'};
        color: ${(props) => props.variant.placeholderColor ? props.variant.placeholderColor : '#000000'};
        opacity: ${(props) => props.variant.isDisabled ? 0.5 : 1};
    }
    
    &:-ms-input-placeholder {
        font-family: ${(props) => props.variant.placeholderFontFamily ? props.variant.placeholderFontFamily : 'Nunito Sans'};
        font-size: ${(props) => props.variant.placeholderFontSize ? props.variant.placeholderFontSize + 'px' : '14px'};
        font-weight: ${(props) => props.variant.placeholderFontWeight ? props.variant.placeholderFontWeight : '400'};
        text-decoration: ${(props) => props.variant.placeholderFontDecoration ? props.variant.placeholderFontDecoration : 'normal'};
        color: ${(props) => props.variant.placeholderColor ? props.variant.placeholderColor : '#000000'};
        opacity: ${(props) => props.variant.isDisabled ? 0.5 : 1};
    }

`;