import { useEffect, useState } from 'react';
import styled from "styled-components";

export interface WOIRadioButtonProps {
    size: number
    activeBorderColor?: string
    inActiveBorderColor?: string
    borderWidth?: number
    activeColor?: string
    inActiveColor?: string
    isSelected: boolean
}

const WOIRadioButton = (props: WOIRadioButtonProps) => {
    const { size, activeBorderColor, inActiveBorderColor, borderWidth, activeColor, inActiveColor, isSelected } = props;
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(isSelected);
    }, [isSelected]);

    // add animation to the slider
    const OuterWidget = styled.div`
        width: ${size}px;
        height: ${size}px;
        background-color: #FFFFFF;
        border-radius: 100%;
        padding: 3px;
        border-color: ${toggled ? activeColor : inActiveColor};
        border-style: solid;
        border-width: ${borderWidth}px;
        cursor: pointer;
    `;

    const handleToggle = () => setToggled(!toggled);

    const InnerWidget = styled.div`
        width: ${size - 4}px;
        height: ${size - 4}px;
        background-color: ${toggled ? activeBorderColor : inActiveBorderColor};
        border-radius: 100%;
        border-color: ${toggled ? activeColor : inActiveColor};
        border-style: solid;
        border-width: ${borderWidth}px;
        position: absolute;
    `;

    return (
        <OuterWidget onClick={handleToggle}>
            <InnerWidget />
        </OuterWidget>
    );
};

export default WOIRadioButton;