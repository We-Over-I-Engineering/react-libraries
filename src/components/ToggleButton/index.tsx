import React, { useState } from 'react';
import styled from "styled-components";

interface ToggleButtonProps {
    isToggled?: boolean;
    onToggle?: (isToggled: boolean) => void;
    trueBackgroundColor?: string;
    falseBackgroundColor?: string;
}

const ToggleButton = (props: ToggleButtonProps) => {
    const { isToggled, onToggle, trueBackgroundColor = 'green', falseBackgroundColor = 'gray' } = props;
    const [toggled, setToggled] = useState(isToggled || false);

    // add animation to the slider
    const ToggleWidget = styled.button`
    width: 56px;
    height: 32px;
    background-color: ${toggled ? trueBackgroundColor : falseBackgroundColor};
    border-radius: 16px;
    cursor: pointer;
    position: relative;
    border: none;
    outline: none;
    transition: background-color 0.3s ease;
  `;

    const handleToggle = () => {
        const newState = !toggled;
        setToggled(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    const Slider = styled.div`
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(${toggled ? '20px' : '0'});
    transition: 0.3s;
`;


    return (
        <ToggleWidget onClick={handleToggle}>
            <Slider />
        </ToggleWidget>
    );
};

export default ToggleButton;