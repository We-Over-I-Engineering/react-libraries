import { useEffect, useState } from 'react';
import styled from "styled-components";

export interface WOISwitchButtonProps {
    trackWidth: number
    trackHeight: number
    padding?: number
    trackBorderRadius?: number
    trackBorderColor?: string
    trackBorderWidth?: number
    trackActiveColor?: string
    trackInActiveColor?: string
    thumbSize: number
    thumbBorderRadius?: number
    thumbBorderColor?: string
    thumbBorderWidth?: number
    thumbActiveColor?: string
    thumbInActiveColor?: string
    isActive: boolean,
    thumbIconSize?: number
    thumbActiveIcon?: string
    thumbInActiveIcon?: string
}

const WOISwitchButton = (props: WOISwitchButtonProps) => {
    const { trackWidth, trackHeight, padding, trackBorderRadius, trackBorderColor, trackBorderWidth, trackActiveColor, trackInActiveColor, thumbSize, thumbBorderRadius, thumbBorderColor, thumbBorderWidth, thumbActiveColor, thumbInActiveColor, isActive, thumbIconSize, thumbActiveIcon, thumbInActiveIcon } = props;
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(isActive);
    }, [isActive]);

    // add animation to the slider
    const TrackWidget = styled.div`
        width: ${trackWidth}px;
        height: ${trackHeight}px;
        background-color: ${toggled ? trackActiveColor : trackInActiveColor};
        border-radius: ${trackBorderRadius}px;
        position: relative;
        padding: ${padding}px;
        border-color: ${trackBorderColor};
        border-style: solid;
        border-width: ${trackBorderWidth}px;
        cursor: pointer;
        transition: background-color 1s ease;
    `;

    const handleToggle = () => setToggled(!toggled);

    const ThumbWidget = styled.div`
        width: ${thumbSize}px;
        height: ${thumbSize}px;
        background-color: ${toggled ? thumbActiveColor : thumbInActiveColor};
        border-radius: ${thumbBorderRadius}%;
        border-color: ${thumbBorderColor};
        border-style: solid;
        border-width: ${thumbBorderWidth}px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(${toggled ? (trackWidth - thumbSize - 2) + 'px' : '-2px'});
        transition: 1s;
    `;

    return (
        <TrackWidget onClick={handleToggle}>
            <ThumbWidget>
                {(!toggled && thumbInActiveIcon) && <img src={thumbInActiveIcon} alt='inactive thumb icon' height={thumbIconSize} width={thumbIconSize} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
                {(toggled && thumbActiveIcon) && <img src={thumbActiveIcon} alt='active thumb icon' height={thumbIconSize} width={thumbIconSize} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />}
            </ThumbWidget>
        </TrackWidget>
    );
};

export default WOISwitchButton;