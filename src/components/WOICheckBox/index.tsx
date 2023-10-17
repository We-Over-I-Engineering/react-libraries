import { useEffect, useState } from 'react';
import styled from 'styled-components';

export interface WOICheckBoxProps {
    size: number
    borderRadius?: number
    borderWidth?: number
    activeBorderColor?: string
    inActiveBorderColor?: string
    activeBackgroundColor?: string
    inActiveBackgroundColor?: string
    icon?: string
    iconSize?: number
    isChecked: boolean
}

const WOICheckBox = (props: WOICheckBoxProps) => {
    const { size, borderRadius, borderWidth, activeBorderColor, inActiveBorderColor, activeBackgroundColor, inActiveBackgroundColor, icon, iconSize, isChecked } = props;
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(isChecked);
    }, [isChecked]);

    const CheckboxWidget = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        height: ${size}px;
        width: ${size}px;
        cursor: pointer;
        border-style: solid;
        border-width: ${borderWidth}px;
        border-radius: ${borderRadius}px;
        border-color: ${toggled ? activeBorderColor : inActiveBorderColor};
        background-color: ${toggled ? activeBackgroundColor : inActiveBackgroundColor};
    `;

    const handleToggle = () => { console.log('clicked'); setToggled(!toggled); }

    return (
        <CheckboxWidget onClick={handleToggle}>
            {(toggled && icon) && <img src={icon} alt='icon' height={iconSize} width={iconSize} />}
        </CheckboxWidget>
    );
};

export default WOICheckBox;