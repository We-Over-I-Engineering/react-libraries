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
    clickFunction?: () => void
}

const WOIRadioButton = (props: WOIRadioButtonProps) => {
    const { size, activeBorderColor, inActiveBorderColor, borderWidth, activeColor, inActiveColor, isSelected, clickFunction } = props;
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
        border-color: ${toggled ? activeBorderColor ? activeBorderColor : 'transparent' : inActiveBorderColor ? inActiveBorderColor : 'transparent'};
        border-style: solid;
        border-width: ${borderWidth}px;
        cursor: pointer;
    `;

    const handleToggle = () => { clickFunction ? clickFunction() : setToggled(!toggled) };

    const InnerWidget = styled.div`
        width: ${size - 4}px;
        height: ${size - 4}px;
        background-color: ${toggled ? activeColor : inActiveColor};
        border-radius: 100%;
        border-color: ${toggled ? activeBorderColor ? activeBorderColor : 'transparent' : inActiveBorderColor ? inActiveBorderColor : 'transparent'};
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