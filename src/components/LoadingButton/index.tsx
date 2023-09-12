import styled, { keyframes } from "styled-components";

interface LoaderButtonProps {
    width?: number
    height?: number
    backgroundColor?: string
    hoverBackgroundColor?: string,
    borderRadius?: string,
    loaderColor?: string
}

const LoaderButton = (props: LoaderButtonProps) => {
    const { loaderColor, backgroundColor, width, height, borderRadius } = props

    // Created styled button widget
    const LoaderButtonWidget = styled.button`
    display: flex;
    justify-content: center;
    font-family: 'Nunito Sans';
    align-items: center;
    text-align: center;
    box-shadow: 0px 6px 13px rgba(0, 0, 0, 0.12);
    outline: none !important;
    border-radius: ${borderRadius};
    border: none;
    cursor: pointer;
  `;

    const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;

    const SpinnerWidget = styled.div`
    border: 3px solid #f3f3f3;
    border-top: 3px solid ${loaderColor || '#000000'};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${spinner} 0.5s linear infinite;
  `;

    // Button properties
    var buttonProperties = { backgroundColor, width, height, borderRadius }

    return (
        <LoaderButtonWidget style={{ ...buttonProperties }}>
            <SpinnerWidget />
        </LoaderButtonWidget>
    );
};

export default LoaderButton;